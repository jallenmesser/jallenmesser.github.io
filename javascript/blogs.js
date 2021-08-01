'use strict';

const e = React.createElement;

class BlogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    <button onClick={() => this.setState({ liked: true })}>
    Like
  </button>
  }
}

const domContainer = document.querySelector('#blog_container');
ReactDOM.render(e(BlogContainer), domContainer);