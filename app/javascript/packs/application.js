import React from 'react';
import ReactDOM from 'react-dom';

class Base extends React.Component {

    render() {
        return (
            <div>
                Hello world!
            </div>
        );
    }
}

ReactDOM.render(
    <Base />,
    document.getElementById('root')
);
