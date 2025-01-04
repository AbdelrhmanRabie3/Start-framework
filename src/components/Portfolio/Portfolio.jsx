import React, { useState } from 'react'
import img1 from '../../assets/images/poert1.png'
import img2 from '../../assets/images/port2.png'
import img3 from '../../assets/images/port3.png'
export default function Portfolio() {
 let [modalImage,setmodalImage] =useState(img2) ;
 let [clicked,setClicked]= useState(false);
function openLayer(img)
{
 setmodalImage(img);
}

  return <>
  <section className='portfolio  py-6 d-flex flex-column justify-content-center align-items-center'>
    <h1 className='text-uppercase text-dark-blue'>portfolio component
    </h1>
    <div className="dark-star position-relative text-dark-blue ">
<i className="fa-solid fa-star "></i>
</div>

<div className="container mt-2">
  <div className="row g-4 ">
  <div className="col-lg-4 col-md-6">
    <div onClick={function(){openLayer(img1);
    setClicked(true);
    }} className="img-container rounded-2 position-relative "><img className='w-100 rounded-2' src={img1} alt="" />
    <div className="image-layer rounded-2">
      <span><i class="fa-solid fa-plus"></i></span>
    </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6">
    <div onClick={function(){openLayer(img2);
    setClicked(true);
    }} className="img-container rounded-2 position-relative "><img className='w-100 rounded-2' src={img2} alt="" />
    <div className="image-layer rounded-2">
      <span><i class="fa-solid fa-plus"></i></span>
    </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6">
    <div onClick={function(){openLayer(img3);
    setClicked(true);
    }} className="img-container rounded-2 position-relative "><img className='w-100 rounded-2' src={img3} alt="" />
    <div className="image-layer rounded-2">
      <span><i class="fa-solid fa-plus"></i></span>
    </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6">
    <div onClick={function(){openLayer(img1);
    setClicked(true);
    }} className="img-container rounded-2 position-relative "><img className='w-100 rounded-2' src={img1} alt="" />
    <div className="image-layer rounded-2">
      <span><i class="fa-solid fa-plus"></i></span>
    </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6">
    <div onClick={function(){openLayer(img2);
    setClicked(true);
    }} className="img-container rounded-2 position-relative "><img className='w-100 rounded-2' src={img2} alt="" />
    <div className="image-layer rounded-2">
      <span><i class="fa-solid fa-plus"></i></span>
    </div>
    </div>
  </div>
  <div className="col-lg-4 col-md-6">
    <div onClick={function(){openLayer(img3);
    setClicked(true);
    }} className="img-container rounded-2 position-relative "><img className='w-100 rounded-2' src={img3} alt="" />
    <div className="image-layer rounded-2">
      <span><i class="fa-solid fa-plus"></i></span>
    </div>
    </div>
  </div>
  </div>
</div>

  </section>
{clicked?<div onClick={function(){
  setClicked(false);
  }} className="modal-layer ">
  <img className='w-40 rounded-2' src={modalImage} alt="" />
  </div>:null}
  
  </>
}
