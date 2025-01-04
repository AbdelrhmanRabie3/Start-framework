import React from 'react'

export default function Contact() {
  return <>
  <section className='contact  d-flex flex-column justify-content-center align-items-center vh-100'>

  <h1 className='text-uppercase text-dark-blue mt-5'>conatct section
    </h1>
    <div className="dark-star position-relative text-dark-blue ">
<i className="fa-solid fa-star "></i>
</div>
<form action="" className='w-50 mt-5'>
  <input className='form-control' placeholder='UserName' type="text" name="UserName" id="UserName" />
  <input className='form-control' placeholder='UserAge' type="number" name="UserAge" id="UserAge" />
  <input className='form-control' placeholder='UserEmail' type="email" name="UserEmail" id="UserEmail" />
  <input className='form-control' placeholder='UserPassword' type="password" name="UserPassword" id="UserPassword" />
  <button type='button' className=' bg-light-green rounded-2 border-0 text-white py-2 mt-3'>Send message</button>
</form>

  </section>
  </>
}
