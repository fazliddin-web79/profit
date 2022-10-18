import React, { useState } from "react";
import HomeBody from "../homeBody";
import HomeMenuNav from "../homeMainNav";
import "./style.css";

const Navbar = () => {
  const [mode, setMode] = useState(true);
  const [fixed, setFixed] = useState(true);
  const body = document.querySelector("body");
  const onDarkMode = () => {
    setMode(!mode);
    body.classList.toggle("dark");
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) setFixed(false);
    else setFixed(true);
  });

  return (
    <div>
      <div className="nav-wrapper">
        <div className="nav-top-bg">
          <img
            src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/ad-top.jpg"
            alt="navTopImg"
          />
        </div>
        <header className={fixed ? "" : "nav-fixed"}>
          <nav className="container">
            <div className="nav-left">
              <div className="toggle-nav-btn">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
                </svg>
              </div>
              <a className="logo" href="/">
                <img
                  src={
                    mode
                      ? "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/12/logo.svg"
                      : "https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/12/logo-light.svg"
                  }
                  alt="FOXIZ"
                />
              </a>
              <div className="nav-link-box">
                <a className="nav-link" href="/">
                  <span>home</span>
                  <span className="nav-angle">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="nav-link-box">
                <a className="nav-link" href="/">
                  <span>politics</span>
                  <span className="nav-angle">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="nav-link-box">
                <a className="nav-link" href="/">
                  <span>technology</span>
                  <span className="nav-angle">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="nav-link-box">
                <a className="nav-link" href="/">
                  <span>posts</span>
                  <span className="nav-angle">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="nav-link-box">
                <a className="nav-link" href="/">
                  <span>bookmarks</span>
                  <span className="nav-angle">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="nav-link-box">
                <a className="nav-link" href="/">
                  <span>pages</span>
                  <span className="nav-angle">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </a>
              </div>
              <a className="nav-link-box nav-dots" title="More" href="/">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>
              </a>
            </div>
            <div className="nav-right">
              <a className="nav-login-btn" href="/">
                Sign In
              </a>
              <div className="nav-icon nav-icon-bell" title="Nofication">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Bell_On">
                    <path d="M18.79,15.34a2.087,2.087,0,0,0-1.26-.61V10.19a5.5,5.5,0,0,0-1.62-3.91,5.826,5.826,0,0,0-2.15-1.33V4.89a1.8,1.8,0,0,0-1.61-1.81,1.749,1.749,0,0,0-1.91,1.75v.12a5.547,5.547,0,0,0-3.77,5.24v4.54a2.122,2.122,0,0,0-1.88,2.11v.53a2.121,2.121,0,0,0,2.12,2.12H10.3a1.725,1.725,0,0,0,3.4,0h3.59a2.121,2.121,0,0,0,2.12-2.12v-.53A2.1,2.1,0,0,0,18.79,15.34Zm-.38,2.03a1.118,1.118,0,0,1-1.12,1.12H6.71a1.118,1.118,0,0,1-1.12-1.12v-.53a1.118,1.118,0,0,1,1.12-1.12.762.762,0,0,0,.76-.77V10.19a4.555,4.555,0,0,1,3.24-4.34.729.729,0,0,0,.53-.71V4.83a.735.735,0,0,1,.25-.56.744.744,0,0,1,.51-.2h.07a.807.807,0,0,1,.69.82v.25a.729.729,0,0,0,.53.71A4.668,4.668,0,0,1,15.2,6.99a4.468,4.468,0,0,1,1.33,3.2v4.76a.8.8,0,0,0,.22.55.773.773,0,0,0,.54.22,1.127,1.127,0,0,1,1.12,1.12Z"></path>
                  </g>
                </svg>
              </div>
              <div className="nav-icon" title="Search">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  version="1.1"
                  id="search"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="dark-btn">
                <div
                  className={mode ? "dark-toggle" : "dark-toggle down"}
                  onClick={onDarkMode}
                >
                  {mode ? (
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                  ) : (
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"></path>
                      </g>
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className=""></div>
      </div>
      <div className="demo-buy">
        <div className="demo">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"></path>
              <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"></path>
            </svg>
          </div>
          <p>Demos</p>
        </div>
        <div className="buy">
          <div>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                fill="currentColor"
              ></path>
              <path
                d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                fill="currentColor"
              ></path>
              <path
                d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <p>Buy Now</p>
        </div>
      </div>
      <main>
        <div className="container">
          <div className="hero-navbar">
            <div className="hero-nav-mobile">
              <a className="hero-link" href="/">
                Business
              </a>
              <a className="hero-link" href="/">
                Politics
              </a>
              <a className="hero-link" href="/">
                Travel
              </a>
              <a className="hero-link" href="/">
                Entertainment
              </a>
              <a className="hero-link" href="/">
                Science
              </a>
              <a className="hero-link" href="/">
                Technology
              </a>
              <a className="hero-link" href="/">
                Fashion
              </a>
            </div>
            <div className="hero-nav-left">
              <div className="hero-hot-news">
                <div className="hot-new-icon">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fillRule="nonzero"
                        d="M12 23a7.5 7.5 0 0 0 7.5-7.5c0-.866-.23-1.697-.5-2.47-1.667 1.647-2.933 2.47-3.8 2.47 3.995-7 1.8-10-4.2-14 .5 5-2.796 7.274-4.138 8.537A7.5 7.5 0 0 0 12 23zm.71-17.765c3.241 2.75 3.257 4.887.753 9.274-.761 1.333.202 2.991 1.737 2.991.688 0 1.384-.2 2.119-.595a5.5 5.5 0 1 1-9.087-5.412c.126-.118.765-.685.793-.71.424-.38.773-.717 1.118-1.086 1.23-1.318 2.114-2.78 2.566-4.462z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="hot-new-text">Hot News</div>
              </div>
              <div className="hero-new-title">
                How My Phone’s Most Annoying Feature Saved My Life
              </div>
            </div>
            <div className="hero-nav-right">
              <div className="next-news-btn">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </div>
              <p>Quick Links</p>
              <a className="hero-nav-link" href="/">
                Technology
              </a>
              <a className="hero-nav-link" href="/">
                Business
              </a>
              <a className="hero-nav-link" href="/">
                Science
              </a>
              <a className="hero-nav-link" href="/">
                Covid-19 Statistics
              </a>
            </div>
          </div>
          <div className="hero-nav-mobile-2">
            <div className="hero-new-title hero-new-title-2">
              <div className="hot-new-icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fillRule="nonzero"
                      d="M12 23a7.5 7.5 0 0 0 7.5-7.5c0-.866-.23-1.697-.5-2.47-1.667 1.647-2.933 2.47-3.8 2.47 3.995-7 1.8-10-4.2-14 .5 5-2.796 7.274-4.138 8.537A7.5 7.5 0 0 0 12 23zm.71-17.765c3.241 2.75 3.257 4.887.753 9.274-.761 1.333.202 2.991 1.737 2.991.688 0 1.384-.2 2.119-.595a5.5 5.5 0 1 1-9.087-5.412c.126-.118.765-.685.793-.71.424-.38.773-.717 1.118-1.086 1.23-1.318 2.114-2.78 2.566-4.462z"
                    ></path>
                  </g>
                </svg>
              </div>
              How My Phone’s Most Annoying Feature Saved My Life
            </div>
            <div className="next-news-btn-2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </div>
          </div>
          <HomeMenuNav />
        </div>
      </main>
      <HomeBody />
      <div className="footer">
        <footer className="container">
          <div className="foot-box foot-box-1">
            <div className="foot-slash">{"//"}</div>
            <p>
              <span>W</span>e influence 20 million users and is the number one
              business and technology news network on the planet
            </p>
          </div>
          <div className="foot-box foot-box-2">
            <h1>Quick Link</h1>
            <a className="foot-link" href="/">
              MY BOOKMARK
            </a>
            <a className="foot-link" href="/">
              INTERESTS <span className="new-foot">New</span>{" "}
            </a>
            <a className="foot-link" href="/">
              CONTACT US
            </a>
            <a className="foot-link" href="/">
              BLOG INDEX
            </a>
          </div>
          <div className="foot-box foot-box-3">
            <h1>Top Categories</h1>
            <a className="foot-link" href="/">
              BUSINESS
            </a>
            <a className="foot-link" href="/">
              POLITICS
            </a>
            <a className="foot-link" href="/">
              TECH<span className="hot-foot">Hot</span>
            </a>
            <a className="foot-link" href="/">
              HEALTH
            </a>
          </div>
          <div className="foot-box foot-box-4">
            <h1>Sign Up for Our Newsletter</h1>
            <p>
              Subscribe to our newsletter to get our newest articles instantly!
            </p>
            <form className="foot-email-form" action="">
              <input type="text" placeholder="Your email address" />
              <button type="submit">
                <span>Sign Up Now</span>
              </button>
            </form>
            <div>
              <input type="checkbox" name="" id="" />
              <span>I have read and agree to the terms &amp; conditions</span>
            </div>
          </div>
        </footer>
        <div className="container footer-medium">
          <a className="footer-medium-logo" href="/">
            <img
              src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/09/footer-s-logo.png"
              alt="Foxiz"
            />
          </a>
          <div className="footer-medium-social">
            <span className="follow-us">Follow US</span>
            <a href="https://www.facebook.com">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </a>
            <a href="https://www.twitter.com">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <div className="foot-left">
            © 2022 Foxiz News Network. Ruby Design Company. All Rights Reserved.
          </div>
          <div className="foot-right">
            <a className="foot-bottom-link foot-bottom-link-1" href="/">
              Contact
            </a>
            <a className="foot-bottom-link" href="/">
              Blog
            </a>
            <a className="foot-bottom-link" href="/">
              Complaint
            </a>
            <a className="foot-bottom-link" href="/">
              Advertise
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
