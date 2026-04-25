import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return <div className="container mt-5 mb-5 text-center">
    <div className="row">
        <div className="col-6">
            <img src={imageURL}></img>
        </div>
         <div className="col-6 p-5 ">
            <h1 className="fs-3 mb-4 text-start">{productName}</h1>
            <p className="fs-6 text-muted text-start" >{productDescription}</p>
            <div className="text-start">
                <a href={tryDemo}  style={{textDecoration:"none"}}>Try Demo  →</a>
            <a href={learnMore} style={{marginLeft: '50px', textDecoration:"none"}}>Learn More  →</a>
            </div>
            <div className="mt-3 text-start"><a href={googlePlay} ><img src="media\images\drive-download-20260331T172409Z-3-001\googlePlayBadge.svg"/></a>
            <a href={appStore} style={{marginLeft: '50px'}}><img src="media\images\drive-download-20260331T172409Z-3-001\appstoreBadge.svg"/></a></div>
         </div>
    </div>
  </div>;
}

export default LeftSection;
