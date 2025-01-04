import React from 'react'
export default function Footer() {
  return <>
  <footer className=''>
<div className="container-fluid p-4 bg-light-dark">
<div className="row">
    <div className="col-md-4 py-4">
    <div className="footer-inner text-center">
            <h2 className=''>LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p> 
    </div>
    </div>
    <div className="col-md-4 py-4">
    <div className="footer-inner text-center">
            <h2 className=''>AROUND THE WEB</h2>
            <p>2215 John Daniel Drive</p>
            <div className="footer-icons d-flex justify-content-center ">
              <span className=''> <i class="fa-brands fa-facebook"></i></span>
              <span className=' '> <i class="fa-brands fa-twitter"></i></span>
              <span className=''> <i class="fa-brands fa-linkedin-in"></i></span>
              <span className=''> <i class="fa-solid fa-globe"></i></span>
            </div>

    </div>
    </div>
    <div className="col-md-4 py-4">
    <div className="footer-inner text-center">
            <h2 className=''>ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

    </div>
    </div>
</div>
</div>
<div className="copeyrights text-center py-3">
  <p>Copyright © Your Website 2021</p>
</div>
  </footer>
  </>
}
