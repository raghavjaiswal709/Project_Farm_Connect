import React from 'react'
import AllHeader from '../../components/Layout/AllHeader/AllHeader/AllHeader'
import "../WholesellerDashboard/WholesellerDashboard.css"
import nofile from "../../assets/Screenshot_2023-11-07_130533-removebg-preview (1).png"


const WholesellerDashboard = () => {
  return (
    <div>
    <AllHeader />
      <section className='headingAfterlogin'>
        <h1>Farmers haven't uploaded any thing yet😪</h1>
      </section>
      <section className='afterloginNoFilePng'>
        <img className='noFilePng' src={nofile} alt='' />
      </section>
    </div>
  )
}

export default WholesellerDashboard
