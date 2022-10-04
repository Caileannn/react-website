import React from "react";
import "./MBank.css";

function MBank() {
  return (
    <div>
      <div className="content-main-block-1">
        <div className="content-container-ep">
          <div className="content-text">
            <div className="text-body">
              <div className="text-title">
                <h2>MEMORY BANK</h2>
                <h4>💭</h4>
              </div>
              <h3>Memory, Image Proccessing (2021)</h3>
              <p>
                MEMORY BANK is an exploration of video feedback and screen
                burn-in. The inspiration behind the work was drawn from the
                phenomenon of the ghost-image or screen burn-in that occurs in
                older electronic display devices such as the CRT-type monitors,
                where the non-uniform use of pixels is a result of prolonged
                exposure of non-moving images creates ghost-like images from the
                static objects. MEMORY BANK is a collection of stills produced
                by various image processing techniques, which were designed
                specifically to mimic the effects of screen burn-in.
              </p>
              <p>
                The project is also an exercise in understanding computational
                memory while experimenting with alternative modes of memory and
                how it processes and stores information – showcasing a different
                abstraction of reality through familiar locations and objects
                around the city of Limerick.
              </p>
            </div>
          </div>
          <div className="content-images">
            <div className="images-body"></div>
          </div>
        </div>
        <div className="content-container">
          <div className="flex-image-epch">
            <img src="/Images/memory-bank/mb01.png" alt="Memory Bank"></img>
            <img src="/Images/memory-bank/mb02.png" alt="Memory Bank"></img>
            <img src="/Images/memory-bank/mb03.png" alt="Memory Bank"></img>
            <img src="/Images/memory-bank/mb04.png" alt="Memory Bank"></img>
            <img src="/Images/memory-bank/mb05.png" alt="Memory Bank"></img>
            <img src="/Images/memory-bank/mb06.png" alt="Memory Bank"></img>
            <img src="/Images/memory-bank/mb07.png" alt="Memory Bank"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MBank;
