import React from 'react'
import './Ruhi.css'
import { ForceGraph2D } from 'react-force-graph';
import ReactTimeAgo from 'react-time-ago';

function Ruhi() {


    
    let oldDate = new Date()
    oldDate.setDate(6);
    oldDate.setMonth(9);
    oldDate.setFullYear(2018);


    const date = oldDate
    const data = {
        "nodes": [
          {"id": "💌", "group": 1},
          {"id": "😘", "group": 1},
          {"id": "💖", "group": 1},
          {"id": "🥰", "group": 1},
          {"id": "😍", "group": 1},
          {"id": "😘", "group": 1},
          {"id": "💖", "group": 1},
          {"id": "🥰", "group": 1},
          {"id": "💌", "group": 1},
          {"id": "👩🏽‍❤️‍👨🏻", "group": 1},
          {"id": "💖", "group": 1},
          {"id": "🥰", "group": 1},
          {"id": "😍", "group": 1},
          {"id": "😘", "group": 1},
          {"id": "💖", "group": 1},
          {"id": "👩🏽‍❤️‍👨🏻", "group": 1},
          {"id": "😍", "group": 1},
          {"id": "😘", "group": 1},
          {"id": "💖", "group": 1},
          {"id": "👩🏽‍❤️‍👨🏻", "group": 1},
          {"id": "😍", "group": 1},
          {"id": "💌", "group": 1},
          {"id": "👩🏽‍❤️‍👨🏻", "group": 1},
          {"id": "🥰", "group": 1},
          {"id": "😍", "group": 1},
          {"id": "👩🏽‍❤️‍👨🏻", "group": 1},
          {"id": "💖", "group": 1},
          {"id": "💌", "group": 1},
          {"id": "💞", "group": 1},
          {"id": "💞", "group": 1},
          {"id": "👩🏽‍❤️‍👨🏻", "group": 1},
          {"id": "💖", "group": 1},
          {"id": "💌", "group": 1},
          {"id": "💞", "group": 1},
          {"id": "😘", "group": 1},
          {"id": "👩🏽‍❤️‍👨🏻", "group": 1},
          {"id": "💖", "group": 1},
          {"id": "💌", "group": 1},
        ],
        "links": [
          
          
        ]
      }

      

  return (
    <>
    <div className='ruhi-txt'>
        <p>Ruhi 💖</p>
        <p className='ruhi-sentence'>A place on the ☁ dedicated to us 💖</p>
        <p className='ruhi-sentence'>I can't believe it has been 4 years.. it has absolutely flown by 🛫 and I've enjoyed every moment! Thank you for everything, I wouldn't be where I am without you, and I wouldn't want to be here without you. You're so special to me, and I hope thats shows more and more as the years go by. I can't wait to finally move in with you, and start a new chapter together 📘. </p>
        <p className='ruhi-sentence'>I hope you like the page, it took me longer than I would have liked to figure these flying emojis out, but I think it was worth it. I finally got to use my skills to make you something special, which is only a URL 🔗 away.</p>
        <p className='ruhi-ending'>Love, Cailean xxx</p>  
        👩🏽‍❤️‍👨🏻 <ReactTimeAgo date={date} locale="en-US"/> 👩🏽‍❤️‍👨🏻  
        
    </div>
    <div className='ruhi-main'> 

        <ForceGraph2D
          graphData={data}
          nodeAutoColorBy="group"
          d3AlphaMin={0}
          d3AlphaDecay={0.002}
          d3VelocityDecay={0.5}
          enableZoomInteraction={false}
          enableNavigationControls={false}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.id;
            const fontSize = 80/globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            const textWidth = ctx.measureText(label).width;
            const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

            ctx.fillStyle = 'rgba(255, 255, 255, 0)';
            ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = node.color;
            ctx.fillText(label, node.x, node.y);

            node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
          }}
          nodePointerAreaPaint={(node, color, ctx) => {
            ctx.fillStyle = color;
            const bckgDimensions = node.__bckgDimensions;
            bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
          }}
        />
    </div>
    </>
  )
}

export default Ruhi