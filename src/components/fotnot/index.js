import React from "react"
import "./style.css"
import { TweenLite, Linear } from "gsap"


class Fotnot extends React.Component {
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
      TweenLite.to(['.line', '.line-glow'], 1.5, {
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

        <div className="menuboarddivfotnot">

        <svg className="svgclass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300">
          <defs>
            <filter id="glow-filter">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter>
          </defs>
            <polyline className="line"></polyline>
            <polyline className="line-glow"></polyline>
        </svg>

          <div className="fotnotlogos">

            <a href="https://www.instagram.com/hedy.tech">
              <div className="logobox" id="instagramlogo" />
            </a>
            <a href="https://www.linkedin.com/company/hedy-tech">
              <div className="logobox" id="linkedinlogo" />
            </a>

          </div>


          <div className="fotnotcontact" id="paddingtopbottom">
            <a href="mailto:hello@hedy.tech" style={{ textDecoration: "none", color: "white" }}>
              <div className="button btn-3"><span><h4 id="nomargin">hello@hedy.tech</h4></span></div>
            </a>
          </div>

          <div id="paddingbottom">
          <div className="fotnotcontact2" id="arcamajoranospace">
            <div id="colorpink">
            <div id="arcamajora">
              <h5 className="" id="nomargintoplittlebottom">HEDYLITY TECHNOLOGY</h5>
              </div>
            </div>
                <h6 id="nomargintoplittlebottom">Lästmakargatan 18 111 44 Stockholm</h6>
          </div>
        </div>

        </div>
      </div>
    )
  }

}

export default Fotnot
