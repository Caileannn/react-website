import React from "react";
import "./EPCH.css";

function EPCH() {
  return (
    <div>
      <div className="content-main-block-1">
        <div className="content-container-ep">
          <div className="content-text">
            <div className="text-body">
              <div className="text-title">
                <h2>EPCH</h2>
                <h4>👽</h4>
              </div>
              <h3>AI, Diffusion Models (2022)</h3>
              <p>
                EPCH-XY is a collection of three works that were created using
                various artificial intelligence tools and techniques. The three
                compositions represent an alternative or non-human perspective
                on life, and were inspired by the developments made in deep
                learning and artificial intelligence in recent years, as we
                begin to construct more complex neural networks that emulate
                evolutionary processes and structures. It is also a mark of the
                new phase we have entered in not only computation but
                intelligence.
              </p>
              <p>
                The abstract compositions were algorithmically generated using
                the latest machine learning technologies, specifically CLIP, GAN
                and Pixel Diffusion models. Through a process of Neurography,
                which is a term referred to when working with neural networks -
                complex machine learning algorithms, these images were generated
                based upon a vast dataset of images and guided through the users
                input.
              </p>
            </div>
          </div>
          <div className="content-images">
            <div className="images-body"></div>
          </div>
        </div>
        <div className="content-container">
          <div className="flex-image-epch">
            <img src="/Images/EPCH/01.png" alt="EPCH"></img>
            <img src="/Images/EPCH/02.png" alt="EPCH"></img>
            <img src="/Images/EPCH/03.png" alt="EPCH"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EPCH;
