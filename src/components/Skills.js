import React from 'react'
import {motion} from "framer-motion"

const Skill=({name,x,y})=>{
  return(
    <motion.div className='flex items-center justify-center rounded-full py-3 px-6 font-semibold
         bg-dark text-light shadow-dark absolute dark:text-dark dark:bg-light
         lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  lg:p-6 md:p-4'
         whileHover={{scale:1.05}}
         initial={{x:0,y:0}}
         whileInView={{x:x,y:y,transition:{duration:1.5}}}
         viewport={{once:true}}
         >
           {name}
        </motion.div>
  )
}

const SkillXS=({name})=>{
  return(
    <motion.div className='flex items-center justify-center rounded-full py-2 px-4 font-semibold
         bg-dark text-light shadow-dark  dark:text-dark dark:bg-light'
         whileHover={{scale:1.05}}
         initial={{y:200}}
         whileInView={{y:0,transition:0.5,ease:"easeInOut"}}
         viewport={{once:true}}
         >
           {name}
        </motion.div>
  )
}

export default function Skills() {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:hidden
       lg:bg-circularLightLg lg:dark:bg-circularDarkLg
       md:bg-circularLightMd md:dark:bg-circularDarkMd 
       sm:bg-circularLightSm sm:dark:bg-circularDarkSm ' >
        <Skill name="HTML" x="6vw" y="-1vw"/>
        <Skill name="CSS" x="-6vw" y="-1vw"/>
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

      <div className='hidden sm:flex flex-col gap-4 mt-10 '>
      <div className='flex justify-center gap-2'>
        <SkillXS name="HTML"/>
        <SkillXS name="CSS" />
        <SkillXS name="JavaScript"/>
      </div>
      <div className='flex justify-center gap-2'>
        <SkillXS name="C"/>
        <SkillXS name="Python"/>
        <SkillXS name="Java"/>
        <SkillXS name="PHP" />
        
      </div>
      <div className='flex justify-center gap-2'>
        <SkillXS name="MySQL" />
        <SkillXS name="MSSQL" />
        <SkillXS name="MongoDB"/>
      </div>
      <div className='flex justify-center gap-2'>
        <SkillXS name="ReactJS" />
        <SkillXS name="NextJS" />
        <SkillXS name="ExpressJS" />
      </div>
      <div className='flex justify-center gap-2'>
        <SkillXS name="Frame Motion" />
        <SkillXS name="Tailwind CSS" />
      </div>
      <div className='flex justify-center gap-2'>
        <SkillXS name="AWS"/>
        <SkillXS name="Docker" />
      </div>

      
        
        
        
        
       
      </div> 
    </>
  )
}
