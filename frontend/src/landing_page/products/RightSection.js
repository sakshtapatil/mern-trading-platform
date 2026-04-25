import React from 'react';
function RightSection({
    imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
 
}) {
    return ( 
      <div class='container '>
        <div className='row mt-5 mb-5 text-center'>
            <div className='col-6 p-5 text-center'>
                <h1 className="fs-3 mb-4  text-start" style={{marginTop: '170px'}}> {productName}</h1>
            <p className="fs-6 text-muted text-start" >{productDescription}</p>
            <div className="text-start">
                <a href={learnMore} style={{textDecoration:"none", color: "#0D6EFD"}}>Learn More  →</a>
               
          
            </div>
            
            </div>
             <div className='col-6'>
                <img src={imageURL}></img>
             </div>
            
        </div>

      </div>
     );
}

export default RightSection;