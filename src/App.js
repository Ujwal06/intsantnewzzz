import './App.css';
import React, { Component } from 'react';
import { NavBar } from './components/NavBar';
import { News } from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar height={3} color = "#f11946" progress={this.state.progress}></LoadingBar>
          <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={6} country="us" category="general" />} />
            <Route path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={6} country="us" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={6} country="us" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={6} country="us" category="general" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={6} country="us" category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={6} country="us" category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={6} country="us" category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={6} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
