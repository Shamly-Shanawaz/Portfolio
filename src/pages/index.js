import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import proPic from "../../public/images/profile/Shamly.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import TransistionEffect from '@/components/TransistionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shamly Shanawaz</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransistionEffect/>
      <main className='flex items-center text-dark w-full max-h-screen dark:text-light '>
        <Layout className='pt-0 pb-0 md:pt-0 sm:pt-8 '>
          <div className='flex items-center justify-between w-full lg:flex-col'>
              <div className="w-1/2 xs:w-full relative   md:mb-2 md:mr-5">
                <Image src={proPic} alt="shamly" 
                  className=' h-auto lg:hidden md:inline-block md:w-full'
                  priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
              <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                <p className='my-4 w-full text-base font-medium'>hey there,I&apos;m</p>
                <AnimatedText text="Shamly Shanawaz" className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                Greetings, earthlings! I try to create  websites that look cool and when I&apos;m not crafting , you&apos;ll find me sipping coffee,gaming or exploring the vast wonders of our world </p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link href="/Shamly Shanawaz - Resume.pdf" target={"_blank"} download={true}
                  className='flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark  border-2 
                  border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  md:p-2 md:px-4 md:text-base'>
                    Resume 
                    <LinkArrow className={"w-6 ml-2"}/>
                  </Link>
                  <Link href="mailto:m.shamlyshanawaz@gmail.com" target={"_blank"}
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
                  md:text-base'>
                   Let&apos;s Talk
                  </Link>
                </div>
              </div>
          </div>
        </Layout>
      </main>      
    </>
  )
}
