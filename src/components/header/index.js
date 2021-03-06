import React from "react"
import "./style.css"
import { TweenLite, Linear } from "gsap"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.updateLine();
  }
  //updateLine();
  updateLine = () => {
      let data = this.generatePoints();
      let color = '#F1888A'
      TweenLite.ticker.fps(10);
      TweenLite.to(['.line2', '.line-glow'], 1.5, {
          attr: {'points': data, 'stroke': color },
          ease: Linear.easeNone,
          onComplete: this.updateLine
      });
  }

  generatePoints = () => {
      let freq = Math.random()*0.03,
          svgSize = {w: 800, h: 300},
          amplitude = Math.random() * 0.25 * svgSize.h,
          segments = [];

      let p = { x: 0, y: 0 };
      for (let i = 0; i < svgSize.w; i++) {
          p.x = i;
          p.y = amplitude * Math.sin(p.x * freq) + svgSize.h / 2;
          segments.push(p.x + ',' + p.y);
      }
      return segments.join(' ');
  }

  render() {
    return (
      <div>
        <div className="mobile">
        <div id="headerpic">
        <div id="opacitydark">


        <div className="header">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300">
          <defs>
            <filter id="glow-filter">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter>
          </defs>
            <polyline className="line2"></polyline>
            <polyline className="line-glow"></polyline>
        </svg>

        <div className="hedylitytechnologytext">

            <div className="typewriter">WE ARE HEDYLITY TECHNOLOGY</div>

          <div className="fadeintext">
            <h1 className="callushedytext2" id="colorwhite">But you can call us <mark className="pink">Hedy</mark></h1>
          </div>
          </div>
          </div>
          </div>
          </div>


        </div>
        <div>




          <div className="web">
          <div id="">
          <div id="headerpic">
          <div id="opacitydark">


          <div className="header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300">
          <defs>
            <filter id="glow-filter">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter>
          </defs>
            <polyline className="line"></polyline>
            <polyline className="line-glow"></polyline>
        </svg>
        </div>





        <div className="hedylitytechnologytext">

          <div className="typewriter" id="colorwhite">
            <h1>WE ARE HEDYLITY TECHNOLOGY</h1>
          </div>





          <div className="fadeintext">
            <h1 className="callushedytext" id="colorwhite">But you can call us <mark className="pink">Hedy</mark></h1>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>

    </div>
    )
  }

}

export default Header
