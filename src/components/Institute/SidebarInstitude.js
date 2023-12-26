import React, { useEffect, useContext } from 'react'
import { AiFillApple } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { BsChat } from 'react-icons/bs'
import { BsQuestionLg } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'
import { PiSignInBold } from 'react-icons/pi'
import '../Goverment/Slidebar.css'
import Warning from '../Home/Warning'
import { CgProfile } from 'react-icons/cg'
import { GiBookshelf } from 'react-icons/gi'
import { PiCertificateBold } from 'react-icons/pi'
import { GiNotebook } from 'react-icons/gi'

import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { abi } from '../../Abi'
import { warning } from 'framer-motion'
const ethers = require('ethers')

const SidebarInstitute = () => {
  const {
    account,
    result,
    warning,
    setWarning,
    setAccount,
    contractAddress,
    setContract,
    setProvider,
  } = useContext(AppContext)

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on('chainChanged', () => {
          window.location.reload()
        })

        window.ethereum.on('accountsChanged', () => {
          window.location.reload()
        })
        await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()
        const address = await signer.getAddress()
        if (address === result.ac) {
          setWarning(false)
        } else {
          setWarning(true)
        }
        console.log(warning)
        setAccount(address)
        const contract = new ethers.Contract(contractAddress, abi, signer)
        setContract(contract)
        setProvider(provider)
      } else {
        console.error('Metamask is not installed')
      }
    }
    provider && loadProvider()
  }, [])

  return (
    <div className="body">
      {warning && <Warning />}
      <div className="container">
        <div className="navigation">
          <ul>
            <li>
              <div></div>
            </li>
            <li>
              <Link to={'/dashboard/institute/institute-profile'}>
                <span className="icon">
                  <CgProfile className="iccon" />
                </span>
                <span class="title  font-pop   font-semibold">
                  Institute Profile
                </span>
              </Link>
            </li>
            <li>
              <Link to={'/dashboard/institute/add-courses'}>
                <span className="icon">
                  <GiBookshelf className="iccon" />
                </span>
                <span class="title  font-pop   font-semibold">AddCourses</span>
              </Link>
            </li>
            <li>
              <Link to={'/dashboard/institute/certificate-application'}>
                <span className="icon">
                  <GiNotebook className="iccon" />
                </span>
                <span class="title  font-pop   font-semibold">
                  Certificate Applications
                </span>
              </Link>
            </li>
            <li>
              <Link to={'/dashboard/institute/given-certificates'}>
                <span className="icon">
                  <PiCertificateBold className="iccon" />
                </span>
                <span class="title  font-pop   font-semibold">
                  Given Certificates
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SidebarInstitute
