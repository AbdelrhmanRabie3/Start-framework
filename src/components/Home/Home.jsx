import React from 'react'
import img1 from '../../assets/images/avataaars.svg'
export default function Home() {
  return <>
  <section className='Home vh-100 d-flex gap-2 flex-column justify-content-center align-items-center bg-light-green'>
<img src={img1} alt="" />
<h1 >start Framework</h1>
<div className="star">
<i className="fa-solid fa-star "></i>
</div>


<p>Graphic Artist - Web Designer - Illustrator</p>
  </section>
  </>
}
