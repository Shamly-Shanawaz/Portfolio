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
            <AnimatedText text="Love What You Do" className='mb-16'/>
            <div className='grid w-full grid-cols-8 gap-16'>
                <div className='col-span-3 flex flex-col items-start justify-start'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                    <p className='font-medium'>
                    A technically competent and self-motivated undergraduate with qualitative academic college experience in the field of ICT. An effective team player who leverages technical, leadership and communication skills to achieve goals and one who continuously seeks opportunities to master new technologies.
                    </p>
                </div>
                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                bg-light p-8 dark:bg-dark dark:border-light'>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                    <Image src={profile} alt="shamly" className='w-full h-auto rounded-2xl '/>
                </div>
                <div className='col-span-2 flex flex-col items-end gap-20'>
                    
                    <div className='flex flex-col items-end justify-center'>
                        <span className='iniline-block text-7xl font-bold'>
                            <AnimatedNumbers value="3"/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>projects completed</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center'>
                        <span className='iniline-block text-7xl font-bold'>
                            <AnimatedNumbers value="7"/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>years of coding</h2>
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
