import React from 'react'
import { doctors } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const TopDoctors = () => {

    const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5 px-3 sm:px-0">
  {doctors.slice(0, 10).map((item, index) => (
    <div
      key={index}
      onClick={() => navigate(`/appointment/${item._id}`)}
      className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
    >
      {/* Image container */}
      <div className="w-full h-56 flex items-center justify-center bg-blue-50">
        <img
          src={item.image}
          alt={item.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Card content */}
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-green-500">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <p>Available</p>
        </div>
        <p className="text-gray-900 text-lg font-medium">{item.name}</p>
        <p className="text-gray-600 text-sm">{item.speciality}</p>
      </div>
    </div>
  ))}
</div>




        <button className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
    </div>
  )
}

export default TopDoctors