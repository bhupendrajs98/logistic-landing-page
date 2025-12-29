import React from 'react'
import Hero from './Hero'
import Provide from './Provide'
import Choose from './Choose'

function Services() {
  return (
    <div>
      <Hero/>
      <hr className="border-t border-gray-300 my-6" />

      <Provide/>
      <hr className="border-t border-gray-300 my-6" />

      <Choose/>
      <hr className="border-t border-gray-300 my-6" />

    </div>
  )
}

export default Services
