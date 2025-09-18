import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="md:mx-10">
      {/* grid wrapper for 3 sections */}
      <div className="grid grid-cols-[2fr_1fr_1fr] md:grid-cols-3 gap-14 my-10 mt-40 text-sm">
        
        {/* left side */}
        <div>
          <img className='mb-5-w-40' src={assets.logo} alt=" " />
          <p className='w-full md:w-2/3 text-gray-600 leading-6 '>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit vgh.
            Temporibus possimus, rem quis velit harum, fuga iusto est ipsum,
            in necessitatibus ratione nobis illum deserunt perferendis mollitia.
            Quaerat repellendus dolorum architecto.
          </p>
        </div>

        {/* center side */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* right side */}
        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+11656+56</li>
            <li>@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* copyright */}
      <div>
        <hr />
        <p className="text-center py-4">
          Copyright 2024@ - All rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
