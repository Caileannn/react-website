import React from "react";
import "./Comhair.css";

function Comhair() {
  return (
    <div>
      <div className="content-main-block-1">
        <div className="content-container-comhair">
          <div className="content-text">
            <div className="text-body">
              <div className="text-title">
                <h2>Cómháir</h2>
                <h4>📹</h4>
              </div>
              <h3>Computer Vision, Surveillance (2021)</h3>
              <p>
                Cómhair was created to explore the psychological impact such
                technologies may have on individuals as an outcome of the fear
                and the sanctity of individual freedoms by highlighting the
                computational process of how facial recognition systems operate,
                while also attempting to humanise these processes. As of today,
                most artists seem to be fostering the anxiety of the viewers to
                provoke questions that may augment their awareness of these
                technologies. A potential medium through which a change in the
                landscape of the relationship between the viewer and technology
                may be triggered is by keeping the viewers in a state of a
                dis-ease beyond ephemeral experiences.
              </p>
              <p>
               Cómhair is a real-time generative audio-visual work that utilises facial-recognition software.
              </p>
            </div>
          </div>
          <div className="content-images">
            <div className="images-body"></div>
          </div>
        </div>
        <div className="content-container">
          <div className="flex-image-comhair">
            <img src="/Images/Comhair/C01.png" alt="Comahir"></img>
            <iframe src="https://www.youtube.com/embed/EG99MaXkGJ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comhair;
