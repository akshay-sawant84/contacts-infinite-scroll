import React from "react";
import "./Skeleton.css";

const Skeleton = () => {
  return (
    <div className="skeleton_loading">
      <div className="skeleton-width">
        <li className="blog-post skelton_contact">
          <div className="skelton_contact__figure">
            <span className="skeleton-box sb1"></span>
          </div>
          <div className="skelton_contact__body">
            <div className="o-vertical-spacing">
              <h3 className="skeleton__headline">
                <span className="skeleton-box sb2"></span>
              </h3>
              <p>
                <span className="skeleton-box sb3"></span>
                <span className="skeleton-box sb4"></span>
              </p>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Skeleton;
