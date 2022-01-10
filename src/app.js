import React from "react";

const App = () => {
  return (
    <div>
      <section id="container">
        <div id="nav">
          <img class="ironhack-logo" src="/images/ironhack-logo.svg" alt="Ironhack logo"></img>
          <img class="menu-icon" src="/images/menu-top.svg" alt="Menu icon"></img>
        </div>
        <div id="container-txt">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use</p>
          <p>the most popular frontend libary,</p>
          <p>and become a super Ninja developer.</p>
          <button>Awesome!</button>
        </div>
      </section>
      <section id="box">
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
      </section>
    </div>
  );
};

export default App;
