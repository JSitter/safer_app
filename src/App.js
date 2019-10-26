import React from 'react';
import './App.css';
import './styles.css';


function App() {
  return (
    <div className="App">
      <header className="bg-header parallax header-bg">
        <section ><a href="#" className="header-logo logo-color">Safer App</a></section>
      </header>
      <nav className="navbar sticky nav-color">

        <ul className="nav-title">
          <li><a href="http://Some Site.com"><h1>Safer App</h1></a></li>
        </ul>
        <section className="nav-section" >
          <ul>
            <li>
              <a href="https://jaytria.com">Be Safer</a>
            </li>
            <li>
              <a href="https://jaytria.com">Get Safer</a>
            </li>
            <li>
              <a href="https://jaytria.com">About Us</a>
            </li>
          </ul>
        </section>

        </nav>
        <section class="hero-block">
  <h2>Be Safer with Safer App</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</section>
<footer>
    <section class="col">
      <span class="footer-title">
        <a href="http://google.com"><h2>Title One</h2></a>
      </span>
      <ul>
        <li>
        <a href="http://google.com">Title One</a>
        </li>
        <li>
            <a href="http://google.com">Link Two</a>
        </li>      
        <li>
            <a href="http://google.com">Link Three</a>
        </li>
      </ul>
    </section>

    <section class="col">
        <span class="footer-title">
          <a href="http://jkjoogle.com"><h2>Title One</h2></a>
        </span>
        <ul>
          <li>
            <a href="http://xazabbad.com">Link One</a>
          </li>
          <li>
              <a href="http://xyzabc.com">Link Two</a>
          </li>      
          <li>
              <a href="http://google.com">Link Three</a>
          </li>
        </ul>
      </section>

      <section class="col">
          <span class="footer-title">
            <h2>Title One</h2>
          </span>
          <ul>
            <li>
              <a href="http://google.com">Link One</a>
            </li>
            <li>
                <a href="http://google.com">Link Two</a>
            </li>      
            <li>
                <a href="http://google.com">Link Three</a>
            </li>
          </ul>
        </section>
  </footer>
    </div>
  );
}

export default App;
