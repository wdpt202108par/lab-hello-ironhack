import React from "react";

const App = () => {
  return (
    <div>
      <div class="container">
        <h1 className="app">Say hello to ReactJS!</h1>
        <p>
          You will learn how to use the most popular frontend libary, and become
          a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>
      <div class="box">
        <div>
          <img class="img" src="/images/icon1.png" alt="cle"></img>
          <h3>Declaractive</h3>
          <p>React makes it painless to create interactive Uls.</p>
        </div>
        <div>
          <img class="img" src="/images/icon2.png" alt="play"></img>
          <h3>Components</h3>
          <p>Build encaspsulated components that manage their state.</p>
        </div>
        <div>
          <img class="img" src="/images/icon3.png" alt="settings"></img>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div>
          <img class="img" src="/images/icon4.png" alt="ordi"></img>
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
