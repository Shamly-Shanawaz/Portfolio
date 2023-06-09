import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import exotelImg from "../../public/images/projects/exotel.png"
import hospitalImg from "../../public/images/projects/Hospital.png"
import miningImg from "../../public/images/projects/mining kit.png"
import shoeImg from "../../public/images/projects/shoe2.png"
import { motion } from 'framer-motion'
import TransistionEffect from '@/components/TransistionEffect'


const FramerImg=motion(Image);

const FeaturedProject=({type,title,summary,img,link,github,})=>{
    return(
        <article 
        className='w-full flex items-center justify-between rounded-3xl relative rounded-br-2xl
        border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 '>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]  bg-dark rounded-br-3xl dark:bg-light
        xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full '>
                <FramerImg src={img} alt={title} className="w-full h-auto"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm '>{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link href={github} target="_blank" className='w-10'><GithubIcon/></Link>
                <Link href={link} target="_blank"
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
                sm:px-4 sm:text-base'
                >Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project =({title,tech,img,link,github,client,className})=>{
    return(
        <article className='w-full m-w-[60vw]  flex flex-col items-center justify-center rounded-2xl 
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
        xs:p-4'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]  bg-dark rounded-br-3xl  dark:bg-light
        md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            {/* <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'> */}
                <FramerImg src={img} alt={title} className={`w-full h-auto max-h-[35vh] ${className}`} 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            {/* </Link> */}
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                {/* <Link href={link} target="_blank" className='hover:underline underline-offset-2'> */}
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>{title}</h2>
                {/* </Link> */}
                <div>
                <span>Tech: </span>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{tech}</span>
                </div>
                {client && 
                <div>
                <span>Client : </span>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{client}</span>
                </div>
                }
                
                
                {/* <div className='mt-2 flex items-center justify-between w-full'>
                <Link href={link} target="_blank"
                className='text-lg font-semibold underline md:text-base'
                >Visit</Link>
                <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon/></Link>
                
                </div> */}
            </div>
        </article>
    )

}

export default function projects() {
  return (
    <>
    <Head>
        <title>Shamly | Projects </title>
        <meta name="description" content="description"/>
    </Head>
    <TransistionEffect/>
    <main className='w-full flex flex-col items-center justify-center dark:text-light'> 
        <Layout>
            <AnimatedText text="Project Gallery" className=' lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <div className='grid grid-col-12 gap-24 gap-y-10 xl:gap-x-16 lg:gap-x-8 md:gap-y-20 sm:gap-x-0'>
                <div className='col-span-12'>
                    {/* <FeaturedProject
                     title="Crypto Screener Application"
                     summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                local currency."
                    link="/"
                    type="Featured Project"
                    img={Project1}
                    github="/"
                    /> */}
                </div>
                <div className='col-span-6  sm:col-span-12'>
                <Project
                    title="Hotel Management System"
                    tech="ReactJS , ExpressJS , MySQL , AWS"
                    img={exotelImg}
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project
                     title="Hospital Website"
                    link="/"
                    tech="HTML5 , CSS"
                    img={hospitalImg}
                    github="/"
                    />
                </div>
                <div className='col-span-6  sm:col-span-12'>
                <Project
                    title="E-commerce Application"
                    tech="NextJS , ExpressJS , MongoDB , Tailwind CSS"
                    img={shoeImg}
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project
                     title="Mining Kit"
                    tech="C , Proteus"
                    img={miningImg}
                    />
                </div>
            </div>
        </Layout>
    </main>
    </>
  )
}
