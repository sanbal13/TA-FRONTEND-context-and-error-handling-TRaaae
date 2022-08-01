import { Component } from "react";

class LocationErrorBoundary extends Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError(error) {
        return {hasError: true};
    }
    render() {
        if(this.state.hasError) {
            return <h1>Location component has an error. Please reload the page.</h1>
        }
        return this.props.children;
    }
}

export default LocationErrorBoundary;