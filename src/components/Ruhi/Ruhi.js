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
        <br></br>
        <span> 
        </span>
        <p className='ruhi-sentence'>I can't believe it has been 4 years.. it has absolutely flown by. </p>
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