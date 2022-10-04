import React from "react";
import "./OP.css";

function OP() {
  return (
    <div className="content-main-block-1">
      <div className="content-container">
        <div className="content-text">
          <div className="text-body">
            <div className="text-title">
              <h2>Online Persona</h2>
              <h4>🖥️</h4>
            </div>
            <h3>GANs, AI (2021)</h3>
            <p>
              Online Persona was a work created to visualise how media can shape
              and augment our perception of an individual, their relationships
              and their immediate environment. I wanted to create a work that
              reflected the influence and significance of the media we surround
              ourselves with and consume daily – bringing awareness to the
              divide between the physical and virtual world, and the effects it
              can have on an individual if that divide becomes indefinite.
              ONLINE_PERSONA was created through a type of Machine Learning
              Algorithm called a Generative Adversarial Network, which is a tool
              used to generate artificial facial images from a particular image
              dataset. For this project, a set of images, which consisted of
              portraits captured during an online browsing session was used as
              input to then be trained on by the algorithm. The final work is a
              result of multiple days of training and fine-tuning of the
              dataset, producing these distorted and surrealist avatars.
            </p>
          </div>
        </div>
        <div className="content-images">
          <div className="images-body-op">
            <img src="/Images/op/seed46064.png" alt="om-still"></img>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="flex-image">
          <img src="/Images/op/seed46053.png" alt="om-still"></img>
          <img src="/Images/op/seed25169.png" alt="om-still"></img>
          <img src="/Images/op/seed25142.png" alt="om-still"></img>
          <img src="/Images/op/seed25008.png" alt="om-still"></img>
          <img src="/Images/op/seed0045.png" alt="om-still"></img>
        </div>
      </div>
    </div>
  );
}

export default OP;
