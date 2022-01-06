import { directive } from 'babel-types';
import React from 'react';
import ReactDOM from 'react-dom';
const App = () => {
return (
    <div>
        <section class="section1">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button>Awesome!</button>
        </section>
        <section class="bottom">
            <article>
                <h1>Declarative</h1>
                <p>React makes it painless to create interactive UIs</p>
            </article>
            <article>
                <h1>Components</h1>
                <p>Build encapsulated components that manage their state</p>
            </article>
            <article>
                <h1>Single-Way</h1>
                <p>A set of immutable values are passed to the component's</p>
            </article>
            <article>
                <h1>JSX</h1>
                <p>Statically-typed, designed to run on modern browsers</p>
            </article>
        </section>
    </div>

)
};

ReactDOM.render(<App />, document.getElementById('root'));
