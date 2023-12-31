import React from 'react'
import Slidebar from './Slidebar'
import GovHome from './components/govhome/GovHome'

function GovProfile() {
  return (
    <div className="    pt-16   flex flex-col">
      <Slidebar />
      <div className="     pl-[305px]     pr-2">
        <GovHome />
      </div>
    </div>
  )
}

export default GovProfile
