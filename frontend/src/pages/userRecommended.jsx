import { React } from "react";
import Login from "./Login";
import { AuthHeader } from "../auth/authorization";

export default function Recommended() {
  if (AuthHeader()) {
    return (
      <>
        <section data-aos="fade-up" class="block container block-plans">
          <div class="grid grid--1x3">
            <div class="plan">
              <div class="card card--secondary">
                <header class="card__header">
                  <h3 class="plan__name">Entry</h3>

                  <a className="nav__brand" href="/">
                    <img src="../src/assets/images/test.png" alt="logo" />
                  </a>

                  {/* <span class="plan__price">$14</span>
                  <span class="plan__billing-cycle">/month</span>
                  <span class="badge badge--secondary badge--small">
                    10% OFF
                  </span>
                  <span class="plan__description">Easy start on the cloud</span> */}
                </header>

                <div class="card__body">
                  <ul class="list list--tick">
                    <li class="list__item">Unlimited Websites</li>
                    <li class="list__item">Unlimited Bandwidth</li>
                    <li class="list__item">100 GB SSD Sotrage</li>
                    <li class="list__item">3 GB RAM</li>
                  </ul>
                  <button class="btn btn--outline btn--block">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="plan plan--popular">
              <div class="card card--primary">
                <header class="card__header">
                  <h3 class="plan__name">Entry</h3>
                  <a className="nav__brand" href="/">
                    <img src="../src/assets/images/test.png" alt="logo" />
                  </a>
                </header>
                <div class="card__body">
                  <ul class="list list--tick">
                    <li class="list__item">Unlimited Websites</li>
                    <li class="list__item">Unlimited Bandwidth</li>
                    <li class="list__item">100 GB SSD Sotrage</li>
                    <li class="list__item">3 GB RAM</li>
                  </ul>
                  <button class="btn btn--outline btn--block">Buy Now</button>
                </div>
              </div>
            </div>
            <div class="plan">
              <div class="card card--secondary">
                <header class="card__header">
                  <h3 class="plan__name">Entry</h3>
                  <a className="nav__brand" href="/">
                    <img src="../src/assets/images/test.png" alt="logo" />
                  </a>
                </header>
                <div class="card__body">
                  <ul class="list list--tick">
                    <li class="list__item">Unlimited Websites</li>
                    <li class="list__item">Unlimited Bandwidth</li>
                    <li class="list__item">100 GB SSD Sotrage</li>
                    <li class="list__item">3 GB RAM</li>
                  </ul>
                  <button class="btn btn--outline btn--block">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <Login />
      </>
    );
  }
}
