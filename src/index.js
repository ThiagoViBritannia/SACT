import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Lister from './screen/Lister';
import Login from './screen/Login';

//ReactDOM.render(<App />, document.getElementById('root'));
var type = "project";

class WindowManager extends React.Component {
    renderBack() {

    }

    render() {
//        return <Lister name={type}/>;
        return <Login />;
    }
}

ReactDOM.render(<Lister name={type} />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
