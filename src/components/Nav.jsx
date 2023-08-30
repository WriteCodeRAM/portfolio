import React from 'react'
import { useState } from 'react'

function Nav() {
    const [name, setName] = useState('{Randal_}')

  return (
    <nav>
      <h1> {name} </h1>  
        </nav>
  )
}

export default Nav