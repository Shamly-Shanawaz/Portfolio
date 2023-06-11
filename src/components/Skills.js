import React from 'react'
import {motion} from "framer-motion"

const Skill=({name,x,y})=>{
  return(
    <motion.div className='flex items-center justify-center rounded-full py-3 px-6 font-semibold
         bg-dark text-light shadow-dark absolute'
         whileHover={{scale:1.05}}
         initial={{x:0,y:0}}
         whileInView={{x:x,y:y}}
         transition={{duration:1.5}}
         viewport={{once:true}}
         >
           {name}
        </motion.div>
  )
}

export default function Skills() {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight' >
        {/* <motion.div className='flex items-center justify-center rounded-full p-6 font-semibold
         bg-dark text-light shadow-dark'
         whileHover={{scale:1.05}}>
           Core
        </motion.div> */}
        <Skill name="HTML" x="6vw" y="-1vw"/>
        <Skill name="CSS" x="-6vw" y="- 1vw"/>
        <Skill name="JavaScript" x="0vw" y="4vw"/>
        <Skill name="C" x="-2vw" y="-11vw"/>
        <Skill name="Python" x="-18vw" y="4vw"/>
        <Skill name="Java" x="19vw" y="0vw"/>
        <Skill name="PHP" x="-4vw" y="11vw"/>
        <Skill name="MySQL" x="-17vw" y="-6vw"/>
        <Skill name="MSSQL" x="14vw" y="-8vw"/>
        <Skill name="MongoDB" x="12vw" y="9vw"/>
        <Skill name="ReactJS" x="-5vw" y="-18vw"/>
        <Skill name="NextJS" x="15vw" y="-16vw"/>
        <Skill name="ExpressJS" x="-20vw" y="-14vw"/>
        <Skill name="Frame Motion" x="-15vw" y="15vw"/>
        <Skill name="Tailwind CSS" x="15vw" y="16vw"/>
        <Skill name="AWS" x="32vw" y="0vw"/>
        <Skill name="Docker" x="-32vw" y="0vw"/>
      </div>   
    </>
  )
}
