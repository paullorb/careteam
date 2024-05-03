import { Routes, Route } from 'react-router-dom'

import style from './App.module.css'

import Navbar from './components/Navbar/Navbar'

import Landing from './pages/landing/Landing'
import Tasks from './pages/tasks/Tasks'
import Team from './pages/team/Team'
import Schedule from './pages/schedule/Schedule'

export default function App() {

  return (
    <div>
      <Navbar />
      <div className={style.container}>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/team" element={<Team />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
    </div>
    </div>
  )
}
