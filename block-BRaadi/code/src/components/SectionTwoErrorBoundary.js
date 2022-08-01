import { Component } from "react";

class SectionTwoErrorBoundary extends Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError() {
        console.log("error in section two");
        return {hasError: true};
    }
    render() {
        if(this.state.hasError) {
            return <h1>Error in Section Two. Please load the page.</h1>
        }
        return this.props.children;
    }    
}

export default SectionTwoErrorBoundary;