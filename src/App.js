import { Route, Routes } from 'react-router-dom'
import GovDashboard from './components/Goverment/GovDashboard'
import HomePage from './components/Home/HomePage'
import Dashboard from './components/Home/Dashboard'
import Login from './components/Home/Login'
import Navbar from './components/Home/Navbar'
import Signup from './components/Home/Signup'
import InstDashboard from './components/Institute/InstDashboard'
import StudDashboard from './components/Student/StudDashboard'
import Verification from './components/Verification/Verification'
import GovProfile from './components/Goverment/GovProfile'
import InsttituteApplications from './components/Goverment/InstituteApplications'
import RegisteredInstitute from './components/Goverment/RegisteredInstitute'
import InstituteProfile from './components/Institute/InstituteProfile'
import AddCourses from './components/Institute/AddCourses'
import GivenCertificates from './components/Institute/GivenCertificates'
import StudentProfile from './components/Student/StudentProfile'
import Application from './components/Student/Application'
import MyCertificates from './components/Student/MyCertificates'
import CertificateApplication from './components/Institute/CertificateApplication'
import GovSignup from './components/Home/GovSignup'
import InstSignup from './components/Home/InstSignup'
import StudSignup from './components/Home/StudSignup'
import Verificationfaild from './components/Verification/VerificationFaild'
import VerifiedSuccessfully from './components/Verification/VerifiedSuccesfully'
// import EnrolledStudents from './components/Institute/EnrolledStudents'
import './App.css'
import { ThemeProvider } from './themeProvider'
import Preloader from './components/Home/Preloader'
import { useState, useEffect } from 'react'

const dotenv = require('dotenv')

dotenv.config()

function App() {
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {showPreloader ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
          }}
        >
          <Preloader />
        </div>
      ) : (
        <ThemeProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<StudDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/dashboard/goverment" element={<GovDashboard />} />

            <Route path="/dashboard/institute" element={<InstDashboard />} />
            <Route path="/dashboard/student" element={<StudDashboard />} />
            <Route path="/verification" element={<Verification />} />
            <Route
              path="/verification-failed"
              element={<Verificationfaild />}
            />
            <Route
              path="/verification-successfull"
              element={<VerifiedSuccessfully />}
            />

            <Route
              path="/dashboard/goverment/goverment-profile"
              element={<GovProfile />}
            />
            <Route
              path="/dashboard/goverment/institute-applications"
              element={<InsttituteApplications />}
            />
            <Route
              path="/dashboard/goverment/registered-institutes"
              element={<RegisteredInstitute />}
            />
            {/* <Route
            path="/dashboard/institute/enrolled-students"
            element={<EnrolledStudents />}
          /> */}
            <Route
              path="/dashboard/institute/institute-profile"
              element={<InstituteProfile />}
            />
            <Route
              path="/dashboard/institute/add-courses"
              element={<AddCourses />}
            />
            <Route
              path="/dashboard/institute/certificate-application"
              element={<CertificateApplication />}
            />
            <Route
              path="/dashboard/institute/given-certificates"
              element={<GivenCertificates />}
            />
            <Route
              path="/dashboard/student/student-profile"
              element={<StudentProfile />}
            />
            <Route
              path="/dashboard/student/student-application"
              element={<Application />}
            />
            <Route
              path="/dashboard/student/my-certificates"
              element={<MyCertificates />}
            />
            <Route path="/signup/goverment" element={<GovSignup />} />
            <Route path="/signup/institute" element={<InstSignup />} />
            <Route path="/signup/student" element={<StudSignup />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </ThemeProvider>
      )}
    </div>
  )
}

export default App
