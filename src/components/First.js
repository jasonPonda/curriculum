import React from "react";

const First = () => {
  return (
    <section className="firstSection">
      <div className="education">
        <h3>EDUCATION</h3>
        <div className="study">
          <div className="esi">
            <p>Bachelor </p>
            Stop
            <p>10/2020-01/2022 | HE2B ESI (Brussels) </p>
            <p> Informatique réseaux et systèmes de télécommunications</p>
          </div>

          <div className="ipl">
            <p>Bachelor </p>
            <p>Stop</p>
            <p>09/2018-09/2020 | Paul Lambin (Woluwe-St-Lambert)</p>
            <p>Informatique de gestion</p>
          </div>

          <div className="secondary">
            <p>SECONDARY - CESS </p>
            <p> 09/2016 - 06/2018 | Saint-Vincent-Saint-François (Ixelles)</p>
          </div>
        </div>
      </div>

      <div className="languages">
        <h3>LANGUAGES</h3>
        <div className="level">
          <div className="france">
            <svg
              width="30"
              height="23"
              viewBox="0 0 30 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_7_82)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H30V23H0V0Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H9.99844V23H0V0Z"
                  fill="#002654"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.0016 0H30V23H20.0016V0Z"
                  fill="#CE1126"
                />
              </g>
              <defs>
                <clipPath id="clip0_7_82">
                  <rect width="30" height="23" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>French C2</span>
          </div>

          <div className="england">
            <svg
              width="30"
              height="23"
              viewBox="0 0 30 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_7_166)">
                <path d="M0 0H30V23H0V0Z" fill="#012169" />
                <path
                  d="M3.51562 0L14.9531 8.67292L26.3438 0H30V2.97083L18.75 11.5479L30 20.0771V23H26.25L15 14.4229L3.79688 23H0V20.125L11.2031 11.5958L0 3.06667V0H3.51562Z"
                  fill="white"
                />
                <path
                  d="M19.875 13.4646L30 21.0833V23L17.2969 13.4646H19.875ZM11.25 14.4229L11.5312 16.1L2.53125 23H0L11.25 14.4229ZM30 0V0.14375L18.3281 9.15208L18.4219 7.04375L27.6562 0H30ZM0 0L11.2031 8.43333H8.39062L0 2.0125V0Z"
                  fill="#C8102E"
                />
                <path
                  d="M11.2969 0V23H18.7969V0H11.2969ZM0 7.66667V15.3333H30V7.66667H0Z"
                  fill="white"
                />
                <path
                  d="M0 9.24792V13.8479H30V9.24792H0ZM12.7969 0V23H17.2969V0H12.7969Z"
                  fill="#C8102E"
                />
              </g>
              <defs>
                <clipPath id="clip0_7_166">
                  <rect width="30" height="23" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>English A2</span>
          </div>

          <div className="dutchland">
            <svg
              width="30"
              height="23"
              viewBox="0 0 30 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_7_180)">
                <path d="M0 0H30V23H0V0Z" fill="#21468B" />
                <path d="M0 0H30V15.3333H0V0Z" fill="white" />
                <path d="M0 0H30V7.66667H0V0Z" fill="#AE1C28" />
              </g>
              <defs>
                <clipPath id="clip0_7_180">
                  <rect width="30" height="23" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Dutch A2</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default First;
