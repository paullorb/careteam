import style from './Navbar.module.css'

import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <div className={style.links}>
        <Link className={style.link} to="/">Home</Link>
        <Link className={style.link} to="/team">Team</Link>
        <Link className={style.link} to="/tasks">Tasks</Link>
        <Link className={style.link} to="/schedule">Schedule</Link>
      </div>
      <div className={style.auths}>
        <Link className={style.link} to="/login">Login</Link>
      </div>
      <div className={style.hamburgerContainer}>
        <img className={style.hamburger} src={'/hamburger.svg'} />
      </div>
    </nav>
  )
}