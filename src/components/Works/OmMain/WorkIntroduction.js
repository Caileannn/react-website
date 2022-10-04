import React from "react";
import './WorkIntroduction.css';

function WorkIntroduction() {
  return (
    <div className="content-main-block-1">
      <div className="content-container">
        <div className="content-text">
          <div className="text-body">
              <div className="text-title">
                  <h2>(O)MACHINE</h2>
                  <h4>🧠</h4>
              </div>
            <h3>Video Installation, AI, Generative (2022)</h3>          
            <p>(O)MACHINE is a real-time generative performance that employs contemporary machine learning algorithms to explore how we humanise technologies.The architecture of this system was designed to emulate our stream of consciousness, where the machine is trapped in this perpetual cycle through processes of reflection and feedback. As questions begin to arise around the sentience or ‘intelligence’ of these thinking machines, it has become even more important to explore our relationship with machines, and how it continues to evolve. By engaging with its output, it positions artificial intelligence as both a subject and tool. Through this approach, we may begin to expand the dynamics of this connection through new methods of collaboration. From this interaction, we can continue to learn more about how these systems function, how they think, if they even think at all, or can it help us think?</p>
            <p>The project takes inspiration from the concept of the “o-machine” that was proposed by Alan Turing as an alternative to automatic machines, which dominate the computational work today. The o-machine adopted an unconventional approach which utilised an unspecified entity, named the “oracle”, to provide guidance in the machine's decision making process when executing any task - a form of supervised learning. </p>
            <p>By utilising open-source models for natural language processing, and text-to-speech synthesis, the sound and text produced are generative and processed in real-time. The algorithm is set up to produce an infinite loop, where text is generated, transformed into speech, and its response feeding back into its input - providing a continuation of its dialogue. The 3D environment was created using Three.js.</p>
          </div>
        </div>
        <div className="content-images">
          <div className="images-body">
              <img src="/Images/o-machine/om-01.png" alt="om-still"></img>
          </div>
        </div>
      </div>
      <div className="content-container">
      
      <div className='flex-image'>
      <iframe title="(O)MACHINE" src="https://player.vimeo.com/video/723073426?h=b7cb2c084f" width="864" height="486" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
      </div>
    </div>
  );
}

export default WorkIntroduction;
