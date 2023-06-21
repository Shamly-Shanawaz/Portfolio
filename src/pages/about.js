import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profile from "../../public/images/profile/DP2.jpg"
import {useInView, useMotionValue,useSpring} from "framer-motion"
import React, { useEffect, useRef } from 'react'
import Skills from '@/components/Skills'
import Education from '@/components/Education'

const AnimatedNumbers= ({value})=>{
    const ref=useRef(null);
    const motionValue=useMotionValue(0);
    const springValue=useSpring(motionValue,{duration:3000});
    const isInView=useInView(ref,{once:true});

    useEffect(()=>{
        motionValue.set(value);
    },[isInView,value,motionValue]);

    useEffect(()=>{
        springValue.on("change",(latest)=>{
            if(ref.current && latest.toFixed(0)<=value){
                ref.current.textContent=latest.toFixed(0)
            }
        })
    },[springValue,value])

    return <span ref={ref}></span>
}

export default function about() {
  return (
    <>
    <Head>
        <title>Shamly | About </title>
        <meta name="description" content="description"/>
    </Head>
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-10'>
            <AnimatedText text="Love What You Do" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                    <p className='font-medium'>
                    A technically competent and self-motivated undergraduate with qualitative academic college experience in the field of ICT. An effective team player who leverages technical, leadership and communication skills to achieve goals and one who continuously seeks opportunities to master new technologies.
                    </p>
                </div>
                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                    <Image src={profile} alt="shamly" className='w-full h-auto rounded-2xl '
                    priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>
                <div className='col-span-2 flex flex-col items-end gap-20 
                xl:col-span-8 xl:flex-row xl:gap-0 xl:justify-between xl:items-center md:order-3'> 
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='iniline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value="3"/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                        xl:text-center md:text-lg sm:text-base xs:text-sm'>
                            projects completed
                        </h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='iniline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value="6"/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                        xl:text-center md:text-lg sm:text-base xs:text-sm'>
                            years of coding
                        </h2>
                    </div>
                </div>
                
            </div>
            <Skills/>
            <Education/>
        </Layout>
    </main>
    </>
  
  )
}
