import React from 'react';
function Education() {
    return ( 
        <div className="container">
            <div className="row">
                <div className='col mt-5'>
                    <img src='media/images/drive-download-20260331T172409Z-3-001/education.svg' alt="Education"></img>
                </div>
                <div className='col mt-5'>
                    <h1 className='mb-3 mt-4 fs-2'>Free and open market education</h1>
                    <p className='text-muted'>Varsity, the largest online stock market education book in the world <br/>covering everything from the basics to advanced trading.</p>
                    <a href="" style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right-long"></i> </a>
                    
                    <p className='mt-5 text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i> </a>
                </div>
            </div>
        </div>
     );
}

export default Education;