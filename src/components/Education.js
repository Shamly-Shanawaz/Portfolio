import React, { useRef } from 'react'
import {motion, useScroll } from 'framer-motion'

const Details=({position,institute,instituteLink,time,address,work})=>{
    return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        
        <div>
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={instituteLink}
            target='_blank' className='text-primary capitalize'
            >@{institute}</a> </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full '>
                {work}
            </p>
        </div>
    </li>
    }

export default function Education() {
    const ref=useRef(null)
    const {scrollYProgress}=useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>
        <div ref={ref} className='w-[75%] mx-auto relative '>
            <motion.div
            style={{scaleY:scrollYProgress}}
             className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'></motion.div>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details position="G.C.E Ordinary  Level" instituteLink="https://www.zahiracollege.lk/" institute="Zahira College" time="2006-2016" address="Colombo, Sri Lanka" 
                work=""/>
                        <Details position="G.C.E Advanced Level" instituteLink="https://www.zahiracollege.lk/" institute="Zahira College" time="2017-2019" address="Colombo, Sri Lanka" 
                work=""/>
                        <Details position="It Undergraduate" instituteLink="https://uom.lk/" institute="University of Moratuwa" time="2021-Present" address="Moratuwa, Sri Lanka" 
                work=""/>
            </ul>
        </div>
    </div>
  )
}
