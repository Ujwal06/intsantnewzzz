import React, { Component } from 'react'
import { NewsItem } from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from './Spinner';

export class News extends Component { 
    static defaultProps = {
        country: 'us',
        pageSize: 6,
        category: 'general',
    }
    
    static propTypes = {
        country: PropTypes.string.isRequired,
        pageSize: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    async updateNews() {
        this.props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        await this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState((prevState) => ({ page: prevState.page + 1 }), async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });

            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({
                articles: this.state.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults,
                loading: false,
            });
        });
    };

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{ margin: '35px 0px' }}>
                    <span className="text-warning">Instant Newzzz</span>-Top Headlines
                </h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => (
                                <div className="col-md-3" key={element.url}>
                                    <NewsItem
                                        title={element.title ? element.title.slice(0, 41) : ""}
                                        description={element.description ? element.description.slice(0, 95) : ""}
                                        imageUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        );
    }
}
