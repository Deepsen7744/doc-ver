import React from 'react'
import SidebarInstitute from './SidebarInstitude'
import { AppContext } from '../../context/AppContext'
import { useEffect, useState } from 'react'
import CryptoJS from 'crypto-js'
import { useContext } from 'react'

import java from './assets/java-logo-1.png'
import python from './assets/python-logo-vector.svg'
import js from './assets/javascript-logo-vector.svg'
import cpp from './assets/c-logo.png'
import aws from './assets/amazon-web-services.svg'
import dotted from './assets/dotted.svg'
import tele from './assets/telegram.webp'
import dis from './assets/discord.webp'
import yt from './assets/youtube.webp'
import linkedin from './assets/linkedin.webp'
import zizag from './assets/zigzag.png'
import { FaExternalLinkAlt } from 'react-icons/fa'
import herobg from './assets/programBG.png'

import shadow from './assets/shadowbg.png'
import phone from './assets/phone.png'
import meta from './assets/metamask.png'
import email from './assets/email.png'
import inst from './assets/institute.png'

function InstituteProfile() {
  const texts = [
    '< Easy >',
    '< Affordable >',
    '< Practical >',
    // Add more texts as needed
  ]

  const [changingText, setChangingText] = useState(texts[0])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * texts.length)
      setChangingText(texts[randomIndex])
    }, 2000)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId)
  }, [texts])
  const { getInstituteInfo, account, setDashboardLoading } =
    useContext(AppContext)

  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      console.log(account)
      const response = await getInstituteInfo(account)
      console.log(response[1])

      const secretKey = 'secret'
      const decryptedBytes = CryptoJS.AES.decrypt(response[1], secretKey)
      const decryptedData = JSON.parse(
        decryptedBytes.toString(CryptoJS.enc.Utf8)
      )

      console.log('----------')
      console.log(decryptedData)
      console.log('===========')

      setData(decryptedData)
      setDashboardLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error)
      setDashboardLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="  pt-16   flex flex-col">
      <SidebarInstitute />
      <div className="     pl-[300px] pt-7">
        <div>
          <div className="w-full overflow-x-hidden">
            {/* -------------------hero Section---------- */}

            <section className="h-[35rem] px-[4rem] flex flex-row justify-between items-center">
              {/* left box */}
              <div className="flex flex-col gap-4">
                <div className="text-[2.5rem] font-bold">
                  Upscaling Made{' '}
                  <span className="text-red-500">{changingText}</span>
                </div>
                <p className="mt-3 font-normal text-slate-700 text-2xl">
                  One-Stop Shop for Authentic Educational Products.
                </p>
                <div className="flex flex-row items-center mt-2">
                  <img src={inst} alt="nm" className="w-[2.25rem]" />
                  <p className="font-normal text-slate-700 text-xl">
                    {' '}
                    - {data.instituteName}
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <img src={meta} alt="nm" className="w-[2.25rem]" />
                  <p className="font-normal text-slate-700  text-lg">
                    {' '}
                    - {data.AccountNumber}
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <img src={email} alt="nm" className="w-[2.25rem]" />
                  <p className="font-normal text-slate-700 text-xl">
                    {' '}
                    - {data.email}
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <img src={phone} alt="nm" className="w-[2.25rem]" />
                  <p className="font-normal text-slate-700 text-xl">
                    {' '}
                    - {data.contactNumber}
                  </p>
                </div>
                <div>
                  <button className="px-3 py-2 bg-red-400 text-white hover:bg-red-500 rounded-md mt-4">
                    Explore Courses
                  </button>
                </div>
              </div>

              {/* Right box */}
              <div>
                <img src={herobg} alt="nm" className="w-[28rem] relative"></img>
              </div>
              <img
                src={shadow}
                alt="nm"
                className="absolute right-6 opacity-50 top-4"
              ></img>
            </section>

            {/* -----------platform Stats--------- */}
            <section className="bg-[#09314D] relative h-[20rem]">
              <img src={zizag} className="absolute w-[8rem]"></img>
              <img src={dotted} className="absolute right-0"></img>
              <div className=" text-center text-4xl text-white pt-6">
                India's Most Loved Educational Platform
              </div>
              <div className="grid grid-cols-4 gap-y-16 py-16 px-10 items-center">
                <div className="flex flex-col items-center border-r-gray-50 text-white sm:border-r">
                  <p className="text-[3rem] font-bold">130k+</p>
                  <p className="text-xl">Subscribers</p>
                  <u>on Youtube</u>
                </div>
                <div className="flex flex-col items-center border-r-gray-50 text-white sm:border-r">
                  <p className="text-[3rem] font-bold">30k+</p>
                  <p className="text-xl">Subscribers</p>
                  <u>on Instagram</u>
                </div>
                <div className="flex flex-col items-center border-r-gray-50 text-white sm:border-r">
                  <p className="text-[3rem] font-bold">80k+</p>
                  <p className="text-xl">Subscribers</p>
                  <u>on LinkedIn</u>
                </div>
                <div className="flex flex-col items-center border-r-gray-50 text-white ">
                  <p className="text-[3rem] font-bold">40k+</p>
                  <p className="text-xl">Subscribers</p>
                  <u>on Telegram</u>
                </div>
              </div>
            </section>

            {/* ---------------courses-------- */}
            <section className="h-[28rem] py-5 relative">
              <div className="h-[2px] w-[60%] right-0 absolute px-10 bg-slate-300 mt-6"></div>
              <div className="font-semibold text-4xl ml-[4rem] pt-6 ">
                Courses
              </div>
              <div className="flex flex-row justify-around m-5 gap-3">
                {/* 1st box */}
                <div className="flex flex-col justify-center rounded-md items-center max-w-[15rem] p-3 border-[1px] bg-slate-100 h-[20rem]">
                  <img src={java} className="w-[7.5rem]" alt="r" />
                  <div className=" items-center flex flex-col justify-center">
                    <p className="font-semibold my-1">Java Programming</p>
                    <p className="font-thin my-2">
                      ALLEN is equipped with the team of top most faculties for
                      preparation of jee
                    </p>
                    <button className="px-2 py-1 border-1 border-black bg-blue-600 text-white hover:bg-black rounded-md border-[0.05rem]">
                      View Course
                    </button>
                  </div>
                </div>

                {/* 2nd box */}
                <div className="flex flex-col justify-center rounded-md items-center max-w-[15rem] p-3 border-[1px] bg-slate-100 h-[20rem]">
                  <img src={cpp} className="w-[6.5rem]" alt="r" />
                  <div className=" items-center flex flex-col justify-center">
                    <p className="font-semibold my-1">C++ Programming</p>
                    <p className="font-thin my-2">
                      ALLEN is equipped with the team of top most faculties for
                      preparation of jee
                    </p>
                    <button className="px-2 py-1 border-1 border-black bg-blue-600 text-white hover:bg-black rounded-md border-[0.05rem]">
                      View Course
                    </button>
                  </div>
                </div>

                {/* 3rd box */}
                <div className="flex flex-col justify-center rounded-md items-center max-w-[15rem] p-3 border-[1px] bg-slate-100 h-[20rem]">
                  <img src={js} className="w-[7rem]" alt="r" />
                  <div className=" items-center flex flex-col justify-center">
                    <p className="font-semibold my-1">Javascript Programming</p>
                    <p className="font-thin my-2">
                      ALLEN is equipped with the team of top most faculties for
                      preparation of jee
                    </p>
                    <button className="px-2 py-1 border-1 border-black bg-blue-600 text-white hover:bg-black rounded-md border-[0.05rem]">
                      View Course
                    </button>
                  </div>
                </div>

                {/* 4th box */}
                <div className="flex flex-col justify-center rounded-md items-center max-w-[15rem] p-3 border-[1px] bg-slate-100 h-[20rem]">
                  <img src={python} className="w-[7rem]" alt="r" />
                  <div className=" items-center flex flex-col justify-center">
                    <p className="font-semibold my-1">Python Programming</p>
                    <p className="font-thin my-2">
                      ALLEN is equipped with the team of top most faculties for
                      preparation of jee
                    </p>
                    <button className="px-2 py-1 border-1 border-black bg-blue-600 text-white hover:bg-black rounded-md border-[0.05rem]">
                      View Course
                    </button>
                  </div>
                </div>

                {/* 5th box */}
                <div className="flex flex-col justify-center rounded-md items-center max-w-[15rem] p-3 border-[1px] bg-slate-100 h-[20rem]">
                  <img src={aws} className="w-[11rem]" alt="r" />
                  <div className=" items-center flex flex-col justify-center">
                    <p className="font-semibold mt-5 mb-2">AWS</p>
                    <p className="font-thin my-2">
                      ALLEN is equipped with the team of top most faculties for
                      preparation of jee
                    </p>
                    <button className="px-2 py-1 border-1 border-black bg-blue-600 text-white hover:bg-black rounded-md border-[0.05rem]">
                      View Course{' '}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* --------------join coding------------- */}
            <section className="h-[30rem]  relative py-[4rem]">
              <img className="absolute" src={dotted} alt="f" />
              <img
                className="absolute bottom-2 right-3 h-[30%]"
                src={dotted}
                alt="f"
              />
              <div className="w-[40%] absolute h-[2px] bg-slate-300 right-0"></div>
              <div className="flex justify-center items-center flex-col p-5">
                <div className="text-4xl font-bold mt-4 font-mono">
                  Join our Coding family
                </div>
                <p className="mt-5 font-semibold text-slate-400 text-xl">
                  If you would like to keep up on the latest posts and courses,
                  <br />
                  come by and connect with us on the following links
                </p>
              </div>
              {/* --------social media links container------ */}
              <div className="mx-[9rem] flex flex-row justify-evenly items-center pt-[4rem] flex-wrap">
                <a className="cursor-pointer">
                  <div className="flex flex-col justify-center items-center">
                    <img src={yt} className="w-[6rem]" />
                    <div className="my-3 flex flex-row items-center ">
                      <FaExternalLinkAlt className="mr-1 text-[#ff0000]  text-lg" />
                      <p className="text-2xl font-bold text-[#ff0000]">
                        Youtube
                      </p>
                    </div>
                  </div>
                </a>
                <a className=" cursor-pointer">
                  <div className="flex flex-col justify-center items-center">
                    <img src={dis} className="w-[6rem]" />
                    <div className="my-3 flex flex-row items-center ">
                      <FaExternalLinkAlt className="mr-1 text-[#5865f2]  text-lg" />
                      <p className="text-2xl font-bold text-[#5865f2]">
                        Discord
                      </p>
                    </div>
                  </div>
                </a>
                <a className=" cursor-pointer">
                  <div className="flex flex-col justify-center items-center">
                    <img src={linkedin} className="w-[6rem]" />
                    <div className="my-3 flex flex-row items-center ">
                      <FaExternalLinkAlt className="mr-1 text-[#0077b5]  text-lg" />
                      <p className="text-2xl font-bold text-[#0077b5]">
                        LinkedIn
                      </p>
                    </div>
                  </div>
                </a>
                <a className=" cursor-pointer">
                  <div className="flex flex-col justify-center items-center">
                    <img src={tele} className="w-[6rem]" />
                    <div className="my-3 flex flex-row items-center ">
                      <FaExternalLinkAlt className="mr-1 text-[#229ed9]  text-lg" />
                      <p className="text-2xl font-bold text-[#229ed9]">
                        Telegram
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstituteProfile

{
  /* <h2>Institute Profile</h2>
        <p>Name: {data.instituteName}</p>
        <p>Acc Number: {data.AccountNumber}</p>
        <p>Email: {data.email}</p>
        <p>Phone: {data.contactNumber}</p>
      </div> */
}
