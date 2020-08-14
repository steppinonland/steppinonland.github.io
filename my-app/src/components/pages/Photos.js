import React from "react";
import "./photos.css"
const Photos = () => (
  <div>
    <div className="jumbotron">
    <h1>Photo Gallery</h1>
    <a href="index.html" className="btn-outline-secondary"><button type="button" className="btn btn-outline-dark">
      <i className="fas fa-home" aria-hidden="true">
      </i>            Go Home</button></a>
</div>
<div className="row-g"> 
  <div className="column-g">
    <div className="o-overlay">
    <img src="assets/clouds.jpg" className="image-overlay" />
    <div className="overlay">
        <div className="texto">These are clouds</div>
    </div>
    </div>
    <div className="o-overlay">
    <img src="assets/healthcare photo.jpg" className="image-overlay" />
    <div className="overlay">
        <div className="texto">healthcare!</div>
    </div>
    </div>
    <div className="o-overlay">
        <img src="assets/political pic.jpg" className="image-overlay"/>
        <div className="overlay">
            <div className="texto">me doing politics!</div>
        </div>
    </div>
  </div>
  <div className="column-g">
    <div className="o-overlay">
        <img src="assets/polpic2.JPG" className="image-overlay"/>
        <div className="overlay">
            <div className="texto">heeeres another photo</div>
        </div>
        </div>
    <div className="o-overlay">
    <img src="assets/polpic3.JPG" className="image-overlay"/>
    <div className="overlay">
        <div className="texto">3rd political picture</div>
    </div>
    </div>
    <div className="o-overlay">
    <img src="assets/ppl.jpg" className="image-overlay"/>
    <div className="overlay">
        <div className="texto">hangin out</div>
    </div>
    </div>
  </div>  
  <div className="column-g">
      <div className="o-overlay">
    <img src="assets/clouds.jpg" className="image-overlay"/>
    <div className="overlay">
        <div className="texto">These are clouds</div>
    </div>
    </div>
    <div className="o-overlay">
    <img src="assets/wfh.JPG" className="image-overlay"/>
    <div className="overlay">
        <div className="texto">workin from home!</div>
    </div>
    </div>
    <div className="o-overlay">
    <img src="assets/austinbaidas.jpg" className="image-overlay"/>
    <div className="overlay">
        <div className="texto">i'm doin politics!</div>
    </div>
    </div>
  </div>
</div>

  </div>
);

export default Photos;
