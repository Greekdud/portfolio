import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
      <div className="experience__frontend">
        <h3>FrontEnd Development</h3>
        <div className="experience__content">
            <article className='experience__details'>
             <div><BsPatchCheckFill/><h4>React</h4></div>
            </article>

            <article className='experience__details'>
              <div><BsPatchCheckFill/><h4>HTML</h4></div>
            </article>

            <article className='experience__details'>
             <div> <BsPatchCheckFill/><h4>CSS</h4></div>
            </article>

            <article className='experience__details'>
              <div><BsPatchCheckFill/><h4>Bootstrap</h4></div>
            </article>

            <article className='experience__details'>
              <div><BsPatchCheckFill/><h4>Tailwind</h4></div>
            </article>

            <article className='experience__details'>
             <div> <BsPatchCheckFill/><h4>Javascript</h4></div>
            </article>
        </div>
        </div>


        <div className="experience__backend">
          <h3>Content Management System</h3>
        <div className="experience__content">
            <article className='experience__details'>
            <div><BsPatchCheckFill/> <h4>Wordpress</h4></div>
            </article>
            <article className='experience__details'>
            <div> <BsPatchCheckFill/> <h4>Shopify</h4></div>
            </article>
            <article className='experience__details'>
            <div> <BsPatchCheckFill/> <h4>Opencart</h4></div>
            </article>
            <article className='experience__details'>
             <div><BsPatchCheckFill/> <h4>Wix</h4></div>
            </article>
            <article className='experience__details'>
             <div><BsPatchCheckFill/> <h4>Joomla</h4></div>
            </article>
            <article className='experience__details'>
             <div><BsPatchCheckFill/> <h4>Magento</h4></div>
            </article>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Experience;