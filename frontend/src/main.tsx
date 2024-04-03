import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "@material-tailwind/react";
// copmponents 
import Auth from './screens/Auth'
import PrivateRoute from './components/private/privateRoute'
import Entry from './screens/entry.tsx'
import Home from './screens/Home'
import Doctor from './screens/Doctor'
import DoctorHome from './screens/doctors/DoctorHome'
import DoctorDetails from './screens/doctors/DoctorDetails'
import Profile from './screens/Profile'
import PatientProfilePage from './screens/profile/PatientProfilePage.tsx'
import Chat from './screens/Chat.tsx'
import ChatHome from './screens/chats/ChatHome.tsx'
import ChatDetails from './screens/chats/ChatDetails.tsx'
import PrivateRouteDoc from './components/private/privateRouteDoc'
import Application from './screens/Application.tsx'
import ApplyDoctor from './screens/apply/ApplyDoctor.tsx'
import DoctorAppointment from './screens/doctors/DoctorAppointment.tsx'
import Record from './screens/Record.tsx'
import RecordHome from './screens/record/RecordHome.tsx'
import DoctorTreatment from './components/doctor/DoctorTreatment.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<PrivateRoute />}>
        <Route path="" element={<Entry />} >
          <Route index element={<Home />} />

          <Route path="doctors" element={<Doctor />} >
            <Route index element={<DoctorHome />} />
            <Route path=":id" element={<DoctorDetails />} />
            <Route path=":id/:date" element={<DoctorAppointment />} />
          </Route>
          <Route path="chat" element={<Chat />} >
            <Route index element={<ChatHome />} />
            <Route path=":id" element={<ChatDetails />} />
          </Route>
          <Route path="appointments" element={<Doctor />} >
            <Route index element={<DoctorHome />} />
            <Route path=":id" element={<DoctorDetails />} />
          </Route>
          <Route path="profile" element={<Profile />} >
            <Route index element={<PatientProfilePage />} />
          </Route>

          <Route path="" element={<PrivateRoute />} >
            <Route path="Application" element={<Application />} >
              <Route index element={<ApplyDoctor />} />
            </Route>
            
          </Route>
          <Route path="Record" element={<Record />} >
            <Route index element={<RecordHome />} />
            <Route path=":id" element={<DoctorTreatment />} />
          </Route>
        </Route>

      </Route>
      <Route path="auth" element={<Auth />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
