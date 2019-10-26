import React from 'react';

function Footer(){
    return (
        <footer>
    <section className="col">
      <span className="footer-title">
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

    <section className="col">
        <span className="footer-title">
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

      <section className="col">
          <span className="footer-title">
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
    )

}

export default Footer;