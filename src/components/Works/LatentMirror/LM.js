import React from 'react'
import './LM.css'

function LM() {
  return (
    <div className="content-main-block-1">
      <div className="content-container">
        <div className="content-text">
          <div className="text-body">
              <div className="text-title">
                  <h2>Latent Mirror</h2>
                  <h4>🖼️</h4>
              </div> 
            <h3>A/V Performance, AI, TouchDesigner (2022)</h3>          
            <p>This audio-visual performance was created in response to the “Poratraits: People & Place” exhibtion at the WGOA (Waterford Gallery of Art). The performance exlpored the role portraits hold in the digital age, and how our percpetion of the ‘subject’ or ‘sitter’ has in some ways changed to facilitate virtual interactions. For this performance, I collaborated with local sound artist and producer <a className='evan-link' href='https://www.instagram.com/theevanmiles/' rel="noreferrer" target="_blank">Evan Miles</a>, to produce visuals in response to his music. Our aim was to understand what meaning has been lost or gained during this digital conversion, and in what ways can we reimagine our digital identity through sound, and video.</p>
            <p>The visual element of the performance was real-time and audio reactive, which captured the facial structure of the performing sound artist. By utilising Machine Learning Models, the captured face was manipulated and distorted further to animate another portrait, in an attempt to deconstruct and isolate key compositional elements of the ‘subject’. Through this work, we hoped to reflect on our digital identity, and highlight the disconnection between our physical and virtual presence.</p>
            <p>Created with TouchDesigner and DeepFace Lab.</p>
            <p className="showcased-text"><span className="showcased-arrow">→</span> <span className="showcased-year">(2022)</span> <a className="showcased-link" rel="noreferrer" target="_blank" href="https://imagineartsfestival.com/sound-portraits/">Sound & Portraits</a>, WGOA, Imagine Arts Festival. Waterford, Ireland</p>
          </div>
        </div>
        <div className="content-images">
          <div className="images-body">
              <img src="/Images/LM/LM_01.png" alt="om-still"></img>
          </div>
        </div>
      </div>
      <div className="content-container">
      
      <div className='flex-image-lm'>
      <img src="/Images/LM/FDLM.gif" alt="om-still"></img>
      <img src="/Images/LM/LM_07.png" alt="om-still"></img>
      <img src="/Images/LM/LM_11.png" alt="om-still"></img>
      <img src="/Images/LM/LM_15.png" alt="om-still"></img>

      </div>
      </div>
    </div>
  )
}

export default LM