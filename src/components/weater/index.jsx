import React from "react";
import "./style.css";

const Weater = () => {
  return (
    <div className="editor-pick-weather">
      <div className="editor-pick-weather-name">Weather</div>
      <div className="editor-pick-weather-main">
        <div className="editor-pick-weather-left">
          <h1>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path>
            </svg>
          </h1>
          <h2>New York</h2>
          <p>Clear Sky</p>
        </div>
        <div className="editor-pick-weather-right">
          <h1>
            9
            <span>
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
                  <path d="M4.5 10a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM22 10h-2a4 4 0 1 0-8 0v5a4 4 0 1 0 8 0h2a6 6 0 1 1-12 0v-5a6 6 0 1 1 12 0z"></path>
                </g>
              </svg>
            </span>
          </h1>
          <div className="editor-pick-weather-temprature">
            <div className="plus">
              <span className="strelka-up strelka">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                  ></path>
                </svg>
              </span>
              11<span className="tem-degre"></span>
            </div>
            _
            <div className="minus">
              <span className="strelka-down strelka">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  ></path>
                </svg>
              </span>
              3<span className="tem-degre"></span>
            </div>
          </div>
          <div className="editor-pick-weather-humidity">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeMiterlimit="10"
                  strokeWidth="32"
                  d="M400 320c0 88.37-55.63 144-144 144s-144-55.63-144-144c0-94.83 103.23-222.85 134.89-259.88a12 12 0 0118.23 0C296.77 97.15 400 225.17 400 320z"
                ></path>
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M344 328a72 72 0 01-72 72"
                ></path>
              </svg>
            </span>
            65%
          </div>
          <div className="editor-pick-weather-wind">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"></path>
              </svg>
            </span>
            3 km/h
          </div>
        </div>
      </div>
      <div className="w-forecast-wrap">
        <div className="w-forecast-day forecast-day-5">
          <div className="w-forecast-day h6">Sun</div>
          <div className="w-forecast-icon">
            <svg
              className="svg-icon svg-day-sunny"
              aria-hidden="true"
              role="img"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <g>
                <path
                  fill="#f59e0b"
                  d="M32 23.36A8.64 8.64 0 1123.36 32 8.66 8.66 0 0132 23.36m0-3A11.64 11.64 0 1043.64 32 11.64 11.64 0 0032 20.36z"
                ></path>
                <path
                  fill="none"
                  stroke="#f59e0b"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M32 15.71V9.5"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    calcMode="spline"
                    dur="5s"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0; .5; 1"
                    repeatCount="indefinite"
                    values="3 6; 6 6; 3 6"
                  ></animate>
                </path>
                <path
                  fill="none"
                  stroke="#f59e0b"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M32 48.29v6.21"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    calcMode="spline"
                    dur="5s"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0; .5; 1"
                    repeatCount="indefinite"
                    values="3 6; 6 6; 3 6"
                  ></animate>
                </path>
                <path
                  fill="none"
                  stroke="#f59e0b"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M43.52 20.48l4.39-4.39"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    calcMode="spline"
                    dur="5s"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0; .5; 1"
                    repeatCount="indefinite"
                    values="3 6; 6 6; 3 6"
                  ></animate>
                </path>
                <path
                  fill="none"
                  stroke="#f59e0b"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M20.48 43.52l-4.39 4.39"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    calcMode="spline"
                    dur="5s"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0; .5; 1"
                    repeatCount="indefinite"
                    values="3 6; 6 6; 3 6"
                  ></animate>
                </path>
                <path
                  fill="none"
                  stroke="#f59e0b"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M20.48 20.48l-4.39-4.39"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    calcMode="spline"
                    dur="5s"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0; .5; 1"
                    repeatCount="indefinite"
                    values="3 6; 6 6; 3 6"
                  ></animate>
                </path>
                <path
                  fill="none"
                  stroke="#f59e0b"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M43.52 43.52l4.39 4.39"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    calcMode="spline"
                    dur="5s"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0; .5; 1"
                    repeatCount="indefinite"
                    values="3 6; 6 6; 3 6"
                  ></animate>
                </path>
                <path
                  fill="none"
                  stroke="#f59e0b"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M15.71 32H9.5"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    calcMode="spline"
                    dur="5s"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0; .5; 1"
                    repeatCount="indefinite"
                    values="3 6; 6 6; 3 6"
                  ></animate>
                </path>
                <path
                  fill="none"
                  stroke="#f59e0b"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M48.29 32h6.21"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    calcMode="spline"
                    dur="5s"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0; .5; 1"
                    repeatCount="indefinite"
                    values="3 6; 6 6; 3 6"
                  ></animate>
                </path>
                <animateTransform
                  attributeName="transform"
                  dur="45s"
                  from="0 32 32"
                  repeatCount="indefinite"
                  to="360 32 32"
                  type="rotate"
                ></animateTransform>
              </g>
            </svg>
          </div>
          <div className="w-forecast-temp">
            17 <sup>°C</sup>
          </div>
        </div>
        <div className="w-forecast-day forecast-day-5">
          <div className="w-forecast-day h6">Mon</div>
          <div className="w-forecast-icon">
            <svg
              className="svg-icon svg-cloudy"
              aria-hidden="true"
              role="img"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <defs>
                <clipPath id="forecast_cloudy_2">
                  <path
                    fill="none"
                    d="M41.8 20.25l4.48 6.61.22 4.64 5.31 2.45 1.69 5.97h8.08L61 27l-9.31-8.5-9.89 1.75z"
                  ></path>
                </clipPath>
              </defs>
              <g clipPath="url(#forecast_cloudy_2)">
                <path
                  fill="none"
                  stroke="#9ca3af"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z"
                ></path>
                <animateTransform
                  attributeName="transform"
                  dur="7s"
                  repeatCount="indefinite"
                  type="translate"
                  values="-2.1 0; 2.1 0; -2.1 0"
                ></animateTransform>
              </g>
              <g>
                <path
                  fill="none"
                  stroke="#dddddd"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
                ></path>
                <animateTransform
                  attributeName="transform"
                  dur="7s"
                  repeatCount="indefinite"
                  type="translate"
                  values="-3 0; 3 0; -3 0"
                ></animateTransform>
              </g>
            </svg>
          </div>
          <div className="w-forecast-temp">
            19 <sup>°C</sup>
          </div>
        </div>
        <div className="w-forecast-day forecast-day-5">
          <div className="w-forecast-day h6">Tue</div>
          <div className="w-forecast-icon">
            <svg
              className="svg-icon svg-day-sunny"
              aria-hidden="true"
              role="img"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <g>
                <path
                  fill="#f59e0b"
                  d="M32 23.36A8.64 8.64 0 1123.36 32 8.66 8.66 0 0132 23.36m0-3A11.64 11.64 0 1043.64 32 11.64 11.64 0 0032 20.36z"
                ></path>
                <path
                  fill="none"
                  stroke="#f59e0b"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M32 15.71V9.5"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    calcMode="spline"
                    dur="5s"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0; .5; 1"
                    repeatCount="indefinite"
                    values="3 6; 6 6; 3 6"
                  ></animate>
                </path>
                <path
                  fill="none"
                  stroke="#f59e0b"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M32 48.29v6.21"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    calcMode="spline"
                    dur="5s"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0; .5; 1"
                    repeatCount="indefinite"
                    values="3 6; 6 6; 3 6"
                  ></animate>
                </path>
                <path
                  fill="none"
                  stroke="#f59e0b"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M43.52 20.48l4.39-4.39"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    calcMode="spline"
                    dur="5s"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0; .5; 1"
                    repeatCount="indefinite"
                    values="3 6; 6 6; 3 6"
                  ></animate>
                </path>
                <path
                  fill="none"
                  stroke="#f59e0b"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M20.48 43.52l-4.39 4.39"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    calcMode="spline"
                    dur="5s"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0; .5; 1"
                    repeatCount="indefinite"
                    values="3 6; 6 6; 3 6"
                  ></animate>
                </path>
                <path
                  fill="none"
                  stroke="#f59e0b"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M20.48 20.48l-4.39-4.39"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    calcMode="spline"
                    dur="5s"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0; .5; 1"
                    repeatCount="indefinite"
                    values="3 6; 6 6; 3 6"
                  ></animate>
                </path>
                <path
                  fill="none"
                  stroke="#f59e0b"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M43.52 43.52l4.39 4.39"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    calcMode="spline"
                    dur="5s"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0; .5; 1"
                    repeatCount="indefinite"
                    values="3 6; 6 6; 3 6"
                  ></animate>
                </path>
                <path
                  fill="none"
                  stroke="#f59e0b"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M15.71 32H9.5"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    calcMode="spline"
                    dur="5s"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0; .5; 1"
                    repeatCount="indefinite"
                    values="3 6; 6 6; 3 6"
                  ></animate>
                </path>
                <path
                  fill="none"
                  stroke="#f59e0b"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M48.29 32h6.21"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    calcMode="spline"
                    dur="5s"
                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                    keyTimes="0; .5; 1"
                    repeatCount="indefinite"
                    values="3 6; 6 6; 3 6"
                  ></animate>
                </path>
                <animateTransform
                  attributeName="transform"
                  dur="45s"
                  from="0 32 32"
                  repeatCount="indefinite"
                  to="360 32 32"
                  type="rotate"
                ></animateTransform>
              </g>
            </svg>
          </div>
          <div className="w-forecast-temp">
            21 <sup>°C</sup>
          </div>
        </div>
        <div className="w-forecast-day forecast-day-5">
          <div className="w-forecast-day h6">Wed</div>
          <div className="w-forecast-icon">
            <svg
              className="svg-icon svg-cloudy"
              aria-hidden="true"
              role="img"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <defs>
                <clipPath id="forecast_cloudy_4">
                  <path
                    fill="none"
                    d="M41.8 20.25l4.48 6.61.22 4.64 5.31 2.45 1.69 5.97h8.08L61 27l-9.31-8.5-9.89 1.75z"
                  ></path>
                </clipPath>
              </defs>
              <g clipPath="url(#forecast_cloudy_4)">
                <path
                  fill="none"
                  stroke="#9ca3af"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z"
                ></path>
                <animateTransform
                  attributeName="transform"
                  dur="7s"
                  repeatCount="indefinite"
                  type="translate"
                  values="-2.1 0; 2.1 0; -2.1 0"
                ></animateTransform>
              </g>
              <g>
                <path
                  fill="none"
                  stroke="#dddddd"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
                ></path>
                <animateTransform
                  attributeName="transform"
                  dur="7s"
                  repeatCount="indefinite"
                  type="translate"
                  values="-3 0; 3 0; -3 0"
                ></animateTransform>
              </g>
            </svg>
          </div>
          <div className="w-forecast-temp">
            21 <sup>°C</sup>
          </div>
        </div>
        <div className="w-forecast-day forecast-day-5">
          <div className="w-forecast-day h6">Thu</div>
          <div className="w-forecast-icon">
            <svg
              className="svg-icon svg-cloudy"
              aria-hidden="true"
              role="img"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <defs>
                <clipPath id="forecast_cloudy_5">
                  <path
                    fill="none"
                    d="M41.8 20.25l4.48 6.61.22 4.64 5.31 2.45 1.69 5.97h8.08L61 27l-9.31-8.5-9.89 1.75z"
                  ></path>
                </clipPath>
              </defs>
              <g clipPath="url(#forecast_cloudy_5)">
                <path
                  fill="none"
                  stroke="#9ca3af"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z"
                ></path>
                <animateTransform
                  attributeName="transform"
                  dur="7s"
                  repeatCount="indefinite"
                  type="translate"
                  values="-2.1 0; 2.1 0; -2.1 0"
                ></animateTransform>
              </g>
              <g>
                <path
                  fill="none"
                  stroke="#dddddd"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
                ></path>
                <animateTransform
                  attributeName="transform"
                  dur="7s"
                  repeatCount="indefinite"
                  type="translate"
                  values="-3 0; 3 0; -3 0"
                ></animateTransform>
              </g>
            </svg>
          </div>
          <div className="w-forecast-temp">
            18 <sup>°C</sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weater;
