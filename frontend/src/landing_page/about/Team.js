import React from 'react';
function Team() {
    return ( 
        <div className="container">
      <div className="row p-3  ">
        <h1 className="fs-2 text-center text-muted" style={{marginLeft:'70px',marginBottom:'0'}}>
            People
        </h1>
      </div>

      <div className="row " style={{lineHeight:'1.8',fontSize:'1.2em'}}>
        <div className="col-6 mt-5 p-3 text-center">
          <img  src='media/images/drive-download-20260331T172409Z-3-001/nithinKamath.jpg' style={{borderRadius:'100%',width:'50%',marginLeft:'200px'}} alt="Founder"></img>
          <h4 className='mt-3 fs-5 text-muted' style={{marginLeft:'200px'}}>Nithin Kamath</h4>
          <p className='fs-6 text-muted mt-3' style={{marginLeft:'200px'}}>Founder, CEO</p>
        </div>
        <div className="col-6  fs-6 p-3">
           
         <p style={{marginTop:'50px',fontSize:'1.1em'}} > Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

         <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

        <p>Playing basketball is his zen.</p>

        <p >Connect on <a href='#' style={{textDecoration:'none'}}>Homepage </a>  / <a href='#' style={{textDecoration:'none'}}>TradingQnA</a> / <a href='#' style={{textDecoration:'none'}}>Twitter</a></p>
        </div>
      </div>
    </div>
     );
}

export default Team;