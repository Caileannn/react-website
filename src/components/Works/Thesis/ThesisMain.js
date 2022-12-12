import React from 'react'
import './ThesisMain.css'

export default function ThesisMain() {
  return (
    <div>
        <div className="content-main-block">
      <div className="content-container">
        <div className="content-text">
          <div className="text-body">
              <div className="text-title">
                  <h2>The Electronic Image: An Object of Time and Energy</h2>
                  <h4>⚡</h4>
              </div>
            <h3>Masters Thesis, Video Synthesis (2021)</h3>          
            <p>This video series comprises of three individual studies, namely Embedded Energy [07:18], Electronic Phase [16:26], and Omnidirectional Objects [02:16], with each video study exploring an inherent characteristic of the video signal that reflects the key phases of the development in the evolution of the medium’s structural, temporal and spatial capabilities. Created as part of my Thesis “The Electronic Image: An Object of Time and Energy”.</p>
            <p>Art and Technology MA @ University of Limerick</p>
            <p>These three studies have been shaped by the experimental processes, techniques, and philosophies of the pioneering artists working with video. The artists in question, specifically the works of Steina and Woody Vasulka, were driven by their yearning to understand the electronic signal and to formulate an electronic language. The work, in its entirety, is an investigation of the unique set of “codes” embedded within the language of the video signal, consequently, recognising the electronic image as an object of time, energy, and its programmable building element – the waveform.</p>
            <div className='thesis'><a href="/Documents/Cailean Finn - Thesis - The Electronic Image_An Object of Time and Energy.pdf" target="_blank" rel="noreferrer"><p>Thesis Paper</p></a></div>
            <p className="showcased-text"><span className="showcased-arrow">→</span> <span className="showcased-year">(2022)</span> <a className="showcased-link" rel="noreferrer" target="_blank" href="https://ormstonhouse.com/programme/the-limerick-show/">The Limerick Show</a>, Ormston House. Limerick, Ireland</p>
          </div>
        </div>
        <div className="content-images">
          <div className="images-body">
              <img src="/Images/electronic-image/Still_09.png" alt="om-still"></img>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className='flex-image-ei'>
        <a href='https://www.youtube.com/watch?v=Dr69viT21Oo&ab_channel=CaileanFinn' target="_blank" rel="noreferrer"><img src="/Images/electronic-image/ei01.gif" alt="om-still"></img></a>
        <a href='https://www.youtube.com/watch?v=CITs48I7t2U&ab_channel=CaileanFinn' target="_blank" rel="noreferrer"><img src="/Images/electronic-image/ei02.gif" alt="om-still"></img></a>
        <a href='https://www.youtube.com/watch?v=myXqCsXgbXw' target="_blank" rel="noreferrer"><img src="/Images/electronic-image/ei03.gif" alt="om-still"></img></a>
        </div>
        <div className='image-list-ei'>
        <img src="/Images/electronic-image/Still_05.png" alt="om-still"></img>
        <img src="/Images/electronic-image/Still_06.png" alt="om-still"></img>
        
        </div>
      </div>
    </div>
    </div>
  )
}
