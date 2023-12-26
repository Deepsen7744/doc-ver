import React, { useContext } from 'react'
import SidebarStudent from './SidebarStudent'
import { AppContext } from '../../context/AppContext'
import { useEffect, useState } from 'react'
import CryptoJS from 'crypto-js'

import date from './assets/date.png'
import user from './assets/user.png'
import herobg from './assets/19197013.jpg'
import phone from './assets/phone.png'
import meta from './assets/metamask.png'
import email from './assets/email.png'
import study from './assets/study.png'
import img from './assets/about-element-2.png'
import { IoChevronForwardCircleOutline } from 'react-icons/io5'
import './studenthome.css'

function StudentProfile() {
  const { getStudentInfo, account, setDashboardLoading } =
    useContext(AppContext)

  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      console.log(account)
      const response = await getStudentInfo(account)
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
    <div className="   pt-16  flex flex-col">
      <SidebarStudent />
      {data ? (
        <div className="      pl-80 pt-7">
          <div className="w-full overflow-x-hidden">
            <div className=" bg-gradient-to-r from-slate-50 to-white text-black h-[33rem] pt-4">
              {/* -------------------hero Section---------- */}
              <section className="px-[4rem] flex flex-row justify-between items-center realtive">
                {/* left box */}
                <div className="flex flex-col gap-4">
                  <div className="text-[2.5rem] font-bold">
                    Welcome{' '}
                    <span className="text-red-500 text-[3.15rem]">
                      Saurabh Verma
                    </span>
                  </div>
                  <p className="mt-2 font-normal text-[2.3rem]">
                    Personal Details
                  </p>
                  <div className="flex flex-row items-center mt-2">
                    <img src={user} alt="nm" className="w-[2.25rem]" />
                    <p className="font-semibold  text-xl"> - {data.name}</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <img src={meta} alt="nm" className="w-[2.25rem]" />
                    <p className="font-normal  text-lg">
                      {' '}
                      - {data.AccountNumber}
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <img src={email} alt="nm" className="w-[2.25rem]" />
                    <p className="font-normal  text-xl"> - {data.email}</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <img src={phone} alt="nm" className="w-[2.25rem]" />
                    <p className="font-normal  text-lg"> - {data.tel}</p>
                  </div>
                  <div className="flex flex-row items-center">
                    <img src={date} alt="nm" className="w-[2.15rem]" />
                    <p className="font-normal  text-lg"> - {data.date}1</p>
                  </div>
                  <div>
                    <button className="px-3 py-2 bg-[#5a4bda]  hover:bg-[#4437b8] rounded-md mt-4 text-white">
                      Available Certificates{' '}
                      <IoChevronForwardCircleOutline className=" inline-block text-[1.15rem]" />
                    </button>
                  </div>
                  <div>
                    <img
                      src={img}
                      className="absolute left-[29%] top-[17%] w-[3rem] study move"
                      alt="mn"
                    />
                  </div>
                </div>

                {/* Right box */}
                <div>
                  <img
                    src={herobg}
                    alt="nm"
                    className="w-[30rem] study move"
                  ></img>
                </div>
              </section>
            </div>

            <div className="flex justify-end">
              <div className="w-[75%] h-[0.1rem] bg-slate-400 mt-6 "></div>
            </div>
            {/* ---------certificates apply----------- */}

            <section className="relative h-[19rem] bg-slate-200 flex  justify-center items-center mt-6">
              <div className="flex flex-col justify-center items-center ml-[5rem]">
                <div className=" font-semibold text-[1.3rem]">
                  Done with Learning, Apply now for Certificates from Your
                  Institute.
                </div>
                <div>
                  <button className="px-3 py-2 bg-[#5a4bda]  hover:bg-[#4437b8] rounded-md mt-4 text-white">
                    Apply Now{' '}
                    <IoChevronForwardCircleOutline className=" inline-block text-[1.15rem]" />
                  </button>
                </div>
              </div>
              <div>
                <img
                  src={study}
                  className="absolute left-[9%] top-[10%] study move"
                  alt="nm"
                />
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default StudentProfile

{
  /* <h2>My Profile</h2>
<p>Name: {data.name}</p>
<p>Acc Number: {data.AccountNumber}</p>
<p>Email: {data.email}</p>
<p>Phone: {data.tel}</p>
<p>Date of Birth: {data.date}</p> */
}
