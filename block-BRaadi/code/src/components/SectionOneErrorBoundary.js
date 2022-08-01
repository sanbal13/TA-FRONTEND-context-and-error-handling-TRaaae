import { Component } from 'react';

class SectionOneErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {    
    if (this.state.hasError) {
      return <h1>Something went wrong! Reload the page</h1>;
    }
    return this.props.children; 
  }
}

export default SectionOneErrorBoundary;
