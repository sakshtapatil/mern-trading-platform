import React from "react";
function Universe() {
  return (
    <div class="container ">
      <div className="row mt-5 mb-5 text-center">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3">
          <img src="media\images\drive-download-20260331T172409Z-3-001\smallcaseLogo.png"></img>
          <p className="text-small text-muted mt-3">
            Thematic investing platform
            <br />
            that helps you invest in diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media\images\drive-download-20260331T172409Z-3-001\sensibullLogo.svg" style={{ width: '199px' }}></img>
          <p className="text-small text-muted mt-3">Options trading platform that lets you<br/>
create strategies, analyze positions, and examine<br/>
data points like open interest, FII/DII, and more.</p>
        </div>
        <div className="col-4 p-3">
          <img src="media\images\drive-download-20260331T172409Z-3-001\zerodhaFundhouse.png" style={{ width: '199px' }}></img>
          <p className="text-small text-muted mt-3">Our asset management venture<br/>
that is creating simple and transparent index<br/>
funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-3">
          <img src="media\images\drive-download-20260331T172409Z-3-001\streakLogo.png" style={{ width: '199px' }}></img>
          <p className="text-small text-muted mt-3">
            Systematic trading platform<br/>
that allows you to create and backtest<br/>
strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media\images\drive-download-20260331T172409Z-3-001\dittoLogo.png" style={{ width: '150px' }}></img>
          <p className="text-small text-muted mt-3">
            Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
            <br />
            Sign up for free
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media\images\drive-download-20260331T172409Z-3-001\goldenpiLogo.png" style={{ width: '199px' }}></img>
          <p className="text-small text-muted mt-3">
            Bonds trading platform
            <br />
            that offers a wide range of bond investment options.
          </p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mt-3 mb-5' style={{width:'15%',margin:'0 auto'}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
