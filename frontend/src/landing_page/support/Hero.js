import React from 'react';
function Hero() {
    return ( 
       <section className='container-fluid' id='supportHero'>
        <div className=' p-4' id='supportWrapper'>
           <h4>Support Portal</h4> 
           <a href='#' className='fs-5'>Track Tickets</a>
        </div>
        <div className='row p-5 '>
            <div className='col-6 p-2 ' >
                <h1 className='fs-3 mr-5' style={{marginLeft: '130px'}} >Search for an answer or browse help topics <br/> to create a ticket</h1>
                <input  style={{marginLeft: '130px'}} type='text' placeholder="eg.how do I activate F&O" />
                <br/>
                <a href='#'  style={{margin: '10px',marginLeft:'125px'}}>Track account opening</a>
                  <a href='#'  style={{margin: '10px'}}>Track segment activation</a>
                    <a href='#' style={{margin: '10px'}}>Intraday margins</a><br/>
                      <a href='#'  style={{margin: '10px',marginLeft:'125px'}}>Kite user manuals</a>
            </div>
            
              <div className='col-6 p-2 '>
                <h1 className='mx-5' >Featured</h1>
                <ol className='mx-4'>
                    <li> <a href='#' style={{lineHeight:'2.5'}} >Current Takeovers and Delisting-january 2024</a></li>
                     <li> <a href='#'>Latest intraday leverages-MIS & CO</a></li>
                </ol>
              </div>
           
        </div>
       </section>
     );
}

export default Hero;