import { directive } from 'babel-types';
import React from 'react';
import ReactDOM from 'react-dom';
const App = () => {
return (
    <div>
        <nav>blabla</nav>
        <h1 className="app">Say Hello to ReactJS</h1>
    </div>

)
};

ReactDOM.render(<App />, document.getElementById('root'));
