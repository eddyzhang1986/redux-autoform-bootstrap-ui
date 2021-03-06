import React, { Component } from 'react';
import DevTools from '../components/DevTools';

class App extends Component {
    render() {
        let { children } = this.props;

        return (
            <div className="container-fluid">
                <div>
                    {children}
                </div>
                <DevTools />;
            </div>
        );
    }
}

export default App;