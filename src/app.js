import React from 'react'; // <== import React

const App = () => {
    return (
        <div>
            <section id="page-top">
            <embed src="/images/react-logo.svg"></embed>
                <div id="header">
                    <embed src="/images/ironhack-logo.svg"></embed>
                    <embed src="/images/menu-top.svg"></embed>
                </div>
                <div id="main">
                    <h1>Say hello to ReactJS </h1>
                    <h2>You will learn how to use the most popular frontend library, and become super Ninja developer.</h2>
                    <a href="/">Awesome!</a>
                </div>
            </section>
            <section id="page-body">
                <div>
                    <img src="/images/icon1.png"></img>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div>
                    <img src="/images/icon2.png"></img>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div>
                    <img src="/images/icon3.png"></img>
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the components.</p>
                </div>
                <div>
                    <img src="/images/icon4.png"></img>
                    <h3>JSX</h3>
                    <p>Statically-typed. Designed to run on modern browsers.</p>
                </div>

            </section>
        </div>
    )
    
}


export default App;