import React,{ Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
        <div className='my-4'>
            <div className="card">
                <img src={imageUrl?imageUrl:"https://c8.alamy.com/comp/2R9J9MT/reading-an-online-newspaper-in-internet-browser-instant-news-access-pixel-perfect-icon-2R9J9MT.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <span class="badge rounded-pill text-bg-warning">{source}</span>
                    <p className="card-text">{description}...</p>
                    <p className='card-text'><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p> 
                    <a href={newsUrl} className="btn btn-sm btn-primary">Read more!</a>
                </div>
            </div>
        </div>
        )
    }
}
