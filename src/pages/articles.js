import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import article3 from "../../public/images/articles/create modal component in react using react portals.png"
import { motion } from 'framer-motion'



const FramerImg=motion(Image);

const Article=({img,title,date,link})=>{
    return(
        <li>
            <Link href={link} target='_blank'>
                <h2>{title}</h2>
            </Link>
            <span>{date}</span>
        </li>
    )
}


const FeaturedArticle=({img,title,time,summary,link})=>{
    return(
        <li className='col-span-1 w-full p-4 bg-light border  border-solid border-dark rounded-2xl relative'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]  bg-dark rounded-br-3xl'/>
            <Link href={link} target="_blank"
            className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImg src={img} alt={title} className="w-full h-auto"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline'>{title}</h2>
                <p className='text-sm mb-2'>{summary}</p>
                <span className='text-primary font-semibold'>{time}</span>
            </Link>
        </li>
    )
}

export default function articles() {
  return (
    <>
    <Head>
        <title>Shamly | Articles </title>
        <meta name="description" content="description"/>
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
            <AnimatedText text="Words Can Change The World" className='mb-16'/>
            <ul className='grid grid-cols-2 gap-16'> 
                    <FeaturedArticle
                        title="Build A Custom Pagination Component In Reactjs From Scratch"
                        summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                        time="9 min read"
                        link="/"
                        img={article1}
                        />
                 <FeaturedArticle
                        title="Build A Custom Pagination Component In Reactjs From Scratch"
                        summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                        time="9 min read"
                        link="/"
                        img={article2}
                        />
            </ul>
            <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
            <ul>
                <Article
                    title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                    img={article3}
                    date="17-06-2023"
                    link="/"
                />
                <Article
                    title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                    img={article3}
                    date="17-06-2023"
                    link="/"
                />
                <Article
                    title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                    img={article3}
                    date="17-06-2023"
                    link="/"
                />
                <Article
                    title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                    img={article3}
                    date="17-06-2023"
                    link="/"
                />
                
            </ul>
        </Layout>
    </main>
    </>
  )
}
