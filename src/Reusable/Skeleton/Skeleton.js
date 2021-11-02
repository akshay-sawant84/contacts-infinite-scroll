import React from "react";
import "./Skeleton.css";

const Skeleton = () => {
  return (
    <div className="skeleton_loading">
      <div className="skeleton-width">
        <li class="blog-post skelton_contact">
          <div class="skelton_contact__figure">
            <span class="skeleton-box sb1"></span>
          </div>
          <div class="skelton_contact__body">
            <div class="o-vertical-spacing">
              <h3 class="skeleton__headline">
                <span class="skeleton-box sb2"></span>
              </h3>
              <p>
                <span class="skeleton-box sb3"></span>
                <span class="skeleton-box sb4"></span>
              </p>
            </div>
          </div>
        </li>
      </div>

      {/* <li class="blog-post o-media">
        <div class="o-media__figure">
          <span class="skeleton-box" style="width:100px;height:80px;"></span>
        </div>
        <div class="o-media__body">
          <div class="o-vertical-spacing">
            <h3 class="blog-post__headline">
              <span class="skeleton-box" style="width:55%;"></span>
            </h3>
            <p>
              <span class="skeleton-box" style="width:80%;"></span>
              <span class="skeleton-box" style="width:90%;"></span>
              <span class="skeleton-box" style="width:83%;"></span>
              <span class="skeleton-box" style="width:80%;"></span>
            </p>
            <div class="blog-post__meta">
              <span class="skeleton-box" style="width:70px;"></span>
            </div>
          </div>
        </div>
      </li> */}
    </div>
  );
};

export default Skeleton;
