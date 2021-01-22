import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default class Home extends Component {
  constructor(props) {
    super(props);

  }
 

  render() {
    return (
    <div>
     
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
     
      <ol className="carousel-indicators">
       <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
       <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
       <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
     
  <div className="carousel-inner">
     
    <div className="carousel-item active">
      <img src="https://i.postimg.cc/3rzzBzWD/banner1.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">

      <h5>First slide label</h5>
      <h1 className="header1">Welcome Royal luxury Gift</h1>
  </div>
</div>
      <div className="carousel-item">
      <img src="https://i.postimg.cc/HxxtDWvs/camping-men-1-1.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <h1 className="header1">Welcome Royal luxury Gift</h1>      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.postimg.cc/NfTSPbrC/banner4.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <h1 className="header1">Welcome Royal luxury Gift</h1>      </div>
    
      </div>

  </div>

     <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="sr-only">Previous</span>
     </a>
     <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="sr-only">Next</span>
     </a>
   
     </div>
     <div className="row bgHO">
     <div className="card " >
    <a href="https://evasell.com/"> <img src="https://i.postimg.cc/gjvTTkBt/5.jpg" className="card-img-top" alt="..."/></a>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
   </div>

   <div className="card" >
  <img src="https://i.postimg.cc/s2NqBLhm/2.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
   </div>
   <div className="card" >
  <img src="https://i.postimg.cc/s2NqBLhm/2.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
   </div>
   <div className="card" >
  <img src="https://i.postimg.cc/26LJnxdD/3.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
   </div>

   <div className="card" >
  <img src="https://i.postimg.cc/RZGjmhCj/1.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
   </div>

   <div className="card" >
  <img src="https://i.postimg.cc/s2NqBLhm/2.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
   </div>
  </div>
<hr/>
<div className="you embed-responsive embed-responsive-16by9">

<iframe width="460" height="315" src="https://www.youtube.com/embed/7c3AFzfW-WQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
  </div>
   
 




 


          )
        }
}