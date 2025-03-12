import React from 'react';
import { Div } from './HeroBgAnimationStyle';

const HeroBgAnimation = () => (
  <Div>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="bg-animation-title bg-animation-desc"
    >
      <title id="bg-animation-title">Background Animation</title>
      <desc id="bg-animation-desc">
        Animated background with smooth SVG motion for visual enhancement.
      </desc>

      <g opacity="0.15">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437Z"
          stroke="url(#radial-gradient)"
          id="path-main"
        />
      </g>

      <ellipse
        cx="295.027"
        cy="193.118"
        rx="1.073"
        ry="1.074"
        fill="#945DD6"
      >
        <animateMotion
          dur="30s"
          repeatCount="indefinite"
          rotate="auto"
          keySplines="0.25 0.1 0.25 1"
        >
          <mpath xlinkHref="#path-main" />
        </animateMotion>
      </ellipse>

      <ellipse
        cx="476.525"
        cy="363.313"
        rx="1.074"
        ry="1.073"
        transform="rotate(90 476.525 363.313)"
        fill="#13ADC7"
      >
        <animateMotion
          dur="45s"
          repeatCount="indefinite"
          rotate="auto"
          keySplines="0.25 0.1 0.25 1"
        >
          <mpath xlinkHref="#path-main" />
        </animateMotion>
      </ellipse>

      <defs>
        <radialGradient
          id="radial-gradient"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </Div>
);

export default HeroBgAnimation;
