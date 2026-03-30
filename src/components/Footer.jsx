import { Link } from 'react-router-dom'
import { LINKS } from '../constants'

export default function Footer({ variant = 'default' }) {
  return (
    <footer className="site-footer">
      <div className="footer-social">
        {variant === 'about' ? (
          <Link to="/">Torna al menu</Link>
        ) : (
          <>
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <span aria-hidden="true">·</span>
            <a href={LINKS.tiktok} target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
            <span aria-hidden="true">·</span>
            <a href={LINKS.maps} target="_blank" rel="noopener noreferrer">
              Google Maps
            </a>
          </>
        )}
      </div>
      <p className="copyright">© {new Date().getFullYear()} Ristorante Africa. Tutti i diritti riservati.</p>
    </footer>
  )
}
