import React from "react";
import "../src/app.css";

const App = () => {
  return  (<div className="app">
            <header>
              <nav>
                <img src="/images/ironhack-logo.svg"></img>
                <img src="/images/menu-top.svg"></img>
              </nav>
              <h1>Say hello to ReactJS</h1>
              <p>You will learn how to use<br/>the most popular frontend library,<br/>and become a super Ninja developer.</p>
              <a href="#">Awesome!</a>
            </header>
            <section>
              <div>
                <img src="/images/icon1.png"></img>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
              </div>
              <div>
                <img src="/images/icon2.png"></img>
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
              </div>
              <div>
                <img src="/images/icon3.png"></img>
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the components.</p>
              </div>
              <div>
                <img src="/images/icon4.png"></img>
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>
              </div>
            </section>
          </div>
  );
}

export default App;