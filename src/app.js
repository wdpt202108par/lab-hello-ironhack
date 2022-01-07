import React from 'react'; 

const App = () => {
  return ( 
    <div>
      <div id="firstpart">
        <section id="left" >
          <img src="/images/ironhack-logo.svg"/>
          <h1>Say hello to 
          ReactJS</h1>
          <p>You will learn how to use
          <span>the most popular frontend library,</span>
          <span>and become a super Ninja developer.</span></p>
          <a href="#">Awesome!</a>
        </section>

        <section id="logo">
          <section id="reactlogo1"></section>
          <section id="reactlogo2"></section>
          <section id="reactlogo3"></section>
        </section>

        

        <section id="right">
          <img src="/images/menu-top.svg"/>
          <section id="reactlogo4"></section>
          <section id="reactlogo5"></section>
          <section id="reactlogo6"></section>
        </section>
      </div>

      <section id="secondpart">
        <article >
          <img src="/images/icon1.png"/>
          <h2>Declarative</h2>
          <p>React makes it 
          <span>painless to create</span> 
          <span>interactive UIs.</span></p>
        </article>

        <article>
          <img src="/images/icon2.png"/>
          <h2>Components</h2>
          <p>Build encapsulated
          <span>components that</span> 
          <span>manage their state.</span> </p>
        </article>

        <article>
          <img src="/images/icon3.png"/>
          <h2>Single-Way</h2>
          <p>A set of immutable
          <span>values are passed</span> 
          <span>to the component's.</span></p>
        </article>

        <article>
          <img src="/images/icon4.png"/>
          <h2>JSX</h2>
          <p>Statically-typed, 
          <span>designed to run on</span> 
          <span>modern browsers.</span></p>
        </article>
      </section>
    </div>
  )
};

export default App;