import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="block block--dark footer">
        <div className="container grid footer__sections">
          <section className="footer__section">
            <div>
              <h2 className="footer__heading">Links</h2>
              <svg className="icon icon--white collapsible__chevron"></svg>
            </div>
            <div>
              <ul className="list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/movie">Movies</a>
                </li>
                <li>
                  <a href="/recommended">Recommended</a>
                </li>
                <li>
                  <a href="/watchlist">Watchlist</a>
                </li>
              </ul>
            </div>
          </section>
          <div className="footer__brand">
            <img src="" alt="" />
            <p className="footer__copyright">
              Copyright 2023 Ateam development
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
