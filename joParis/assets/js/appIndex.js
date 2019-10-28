import React from 'react';
import ReactDOM from 'react-dom';
class AppIndex extends React.Component {
    render() {
        return (
            <div>
                <p>Hello</p>
            </div>
        )
    }
}
ReactDOM.render(<AppIndex/>, document.getElementById('root'));