import React from 'react';
import Second from './Second';
import Third from './Third';

class First extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Passed as composition'
        }
    }
    render() {
        return (
            <div>
                From First Component
                <Second>
                    <Third text={this.state.text} />
                </Second>
            </div>
        )
    }
}
export default First;