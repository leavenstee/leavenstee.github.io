import React, { Component } from 'react';
import './App.css';
import Intro from './components/intro'
import About from './components/about'
import Jobs from './components/jobs'
import Projects from './components/projects'
// import Blog from './components/blog'
// import Timeline from './components/timeline'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Intro></Intro>
          <About></About>
          <Jobs></Jobs>
          <Projects></Projects>
      	</div>
      </div>
    );
  }
}

export default App;