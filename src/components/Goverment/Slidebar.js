import React, { useEffect, useContext } from 'react'
import { AiFillApple } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { BsChat } from 'react-icons/bs'
import { BsQuestionLg } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'
import { PiSignInBold } from 'react-icons/pi'
import { FaWpforms } from 'react-icons/fa6'
import { MdApproval } from 'react-icons/md'

import './Slidebar.css'

import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { abi } from '../../Abi'
import Warning from '../Home/Warning'
const ethers = require('ethers')

const Slidebar = () => {
  const {
    account,
    setAccount,
    contractAddress,
    setContract,
    setProvider,
    warning,
    setWarning,
    result,
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
        setAccount(address)
        console.log(warning)
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
            <li className="    flex justify-center items-center  mt-4"></li>
            <li>
              <Link to={'/dashboard/goverment/goverment-profile'}>
                <span className="icon">
                  <AiOutlineHome className="iccon" />
                </span>
                <span className="title font-pop   font-semibold">
                  Gov Profile
                </span>
              </Link>
            </li>
            <li>
              <Link to={'/dashboard/goverment/institute-applications'}>
                <span className="icon">
                  <FaWpforms className="iccon" />
                </span>
                <span className="title font-pop   font-semibold">
                  Institute Applications
                </span>
              </Link>
            </li>
            <li>
              <Link to={'/dashboard/goverment/registered-institutes'}>
                <span className="icon">
                  <MdApproval className="iccon" />
                </span>
                <span className="title font-pop   font-semibold">
                  Registered Institute
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Slidebar
