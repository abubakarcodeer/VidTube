import React, { useState } from 'react'
import './Home.css'
import Slider from '../../components/Slider/Slider'
import Feed from '../../components/Feed/Feed'

function Home({ sidebar }) {

  const [category, setCategory] = useState(0)

  return (
    <>
      <Slider sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`container ${sidebar ? "" : 'large-container'}`}>
        <Feed category={category} />
      </div>
    </>
  )
}

export default Home