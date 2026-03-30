import { NavLink } from 'react-router-dom'
import { LINKS } from '../constants'

export default function Header() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" end>
        Ristorante Africa
      </NavLink>
      <nav className="nav" aria-label="Navigazione principale">
        <NavLink to="/" end>
          Menu
        </NavLink>
        <NavLink to="/about">Chi siamo</NavLink>
        <NavLink to="/about#contatti">Contatti</NavLink>
      </nav>
      <div className="social-mini" aria-label="Social">
        <a
          href={LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          IG
        </a>
        <a href={LINKS.tiktok} target="_blank" rel="noopener noreferrer" title="TikTok">
          TT
        </a>
      </div>
    </header>
  )
}
