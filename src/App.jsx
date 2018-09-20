import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>~hi, my name is reed~</h1>
        
        <section>
          <h3>👋 who am i</h3>
          <p>i'm a dev and teacher doing node, ruby, and sql stuff. i also make <a target="_blank" href="https://crymall.github.io/bout/">weird</a> <a target="_blank" href="https://crymall.github.io/chutes-and-ladders/">little</a> <a target="_blank" href="http://midnight-info.netlify.com/">things</a> sometimes.</p>
        </section>
        
        <section>
          <h3>🔑 why</h3>
          <p>i think coding is fun. i think it should be accessible. i get joy from looking at random people's githubs.</p>
        </section>
      
        <section>
          <h3>😤 link and build</h3>
          <p><a target="_blank" href="https://twitter.com/reedgaines">twitter</a>, <a target="_blank" href="https://www.instagram.com/reedgaines/?hl=en">instagram</a>, <a href="https://github.com/crymall" target="_blank">github</a>, <a target="_blank" href="https://www.twitch.tv/crymall">twitch</a>, <a target="_blank" href="https://www.linkedin.com/in/reed-gaines-64157269/">linkedin</a></p>
        </section>
      </Fragment>
    );
  }
}

export default App;
