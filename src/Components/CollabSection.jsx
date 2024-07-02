import React from "react";
import logo1 from "../Assets/CompanyLogos/Row1/aa.png";
import logo2 from "../Assets/CompanyLogos/Row1/ban-2.png";
import logo3 from "../Assets/CompanyLogos/Row1/bat-1.png";
import logo4 from "../Assets/CompanyLogos/Row1/bo.png";
import logo5 from "../Assets/CompanyLogos/Row1/c.png";
import logo6 from "../Assets/CompanyLogos/Row1/career-chats.png";
import logo7 from "../Assets/CompanyLogos/Row1/ck.png";
import logo8 from "../Assets/CompanyLogos/Row1/co.png";
import logo9 from "../Assets/CompanyLogos/Row1/d-1.png";
import logo10 from "../Assets/CompanyLogos/Row1/db.png";
import logo11 from "../Assets/CompanyLogos/Row1/dei.png";
import logo12 from "../Assets/CompanyLogos/Row1/e.png";
import logo13 from "../Assets/CompanyLogos/Row2/gp.png";
import logo14 from "../Assets/CompanyLogos/Row2/ipdc.png";
import logo15 from "../Assets/CompanyLogos/Row2/k.png";
import logo16 from "../Assets/CompanyLogos/Row2/nestle.png";
import logo17 from "../Assets/CompanyLogos/Row2/r.png";
import logo18 from "../Assets/CompanyLogos/Row2/rebe.png";
import logo19 from "../Assets/CompanyLogos/Row2/sm.png";
import logo20 from "../Assets/CompanyLogos/Row2/su-2.png";
import logo21 from "../Assets/CompanyLogos/Row2/su.png";
import logo22 from "../Assets/CompanyLogos/Row2/uni.png";
import logo23 from "../Assets/CompanyLogos/Row2/usa.png";

export default function CollabSection() {
  return (
    <div className="flex flex-col items-center justify-center h-min bg-background text-foreground">
      <h1 className="text-3xl font-bold mt-12 mb-2">Past Collaborators</h1>
      <div className="relative w-full overflow-hidden">
        {/* Row 1 */}
        <div className="animate-scroll flex row1">
          {[...Array(5)].map((_, iteration) =>
            [
              logo1,
              logo2,
              logo3,
              logo4,
              logo5,
              logo6,
              logo7,
              logo8,
              logo9,
              logo10,
              logo11,
              logo12,
            ].map((logo, index) => (
              <img
                key={iteration * 12 + index}
                src={logo}
                alt={`Image ${iteration * 12 + index + 1}`}
                className="w-48 h-48 object-cover"
              />
            ))
          )}
        </div>
        {/* Row 2 */}
        <div className="animate-scroll flex row2">
          {[...Array(5)].map((_, iteration) =>
            [
              logo13,
              logo14,
              logo15,
              logo16,
              logo17,
              logo18,
              logo19,
              logo20,
              logo21,
              logo22,
              logo23,
            ].map((logo, index) => (
              <img
                key={iteration * 11 + index}
                src={logo}
                alt={`Image ${iteration * 11 + index + 1}`}
                className="w-48 h-48 object-cover"
              />
            ))
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          display: flex;
          width: calc(200px * 12);
          animation-duration: 35s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        .row1 {
          animation-name: scroll-right;
        }

        .row2 {
          animation-name: scroll-left;
        }

        .w-48 {
          width: 12rem;
        }

        .h-48 {
          height: 12rem;
        }

        .object-cover {
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}
