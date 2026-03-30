import { useEffect } from 'react'
import Footer from '../components/Footer'
import { LINKS } from '../constants'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'Chi siamo | Ristorante Africa'
  }, [])

  return (
    <>
      <header className="about-hero">
        <h1>Chi siamo</h1>
      </header>

      <article className="prose">
        <p>
          <strong>Ristorante Africa</strong> vi accoglie per farvi scoprire i sapori autentici del Corno
          d’Africa: dall’injera alle ricette speziate con berberè, fino al rito del caffè tradizionale. La
          nostra cucina unisce la tradizione <strong>eritrea ed etiope</strong> (Habesha), con piatti
          preparati secondo ricette radicate e ingredienti di qualità.
        </p>
        <p>
          Che siate alla ricerca di un pranzo conviviale, di un piatto vegetariano ricco di sapori o di
          un’esperienza da condividere con amici sul <strong>misto Habesha</strong>, il nostro menu è
          pensato per accompagnarvi in un viaggio gastronomico unico.
        </p>

        <h2 id="contatti">Contatti e social</h2>
        <p>
          Seguiteci per novità, eventi e i retroscena della nostra cucina. Per indicazioni e recensioni
          trovateci anche su Google Maps.
        </p>

        <div className="links-grid">
          <a className="link-card" href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
            <div>
              <span>Instagram</span>
              <small>@ristorante.africa</small>
            </div>
            <span aria-hidden="true">→</span>
          </a>
          <a className="link-card" href={LINKS.tiktok} target="_blank" rel="noopener noreferrer">
            <div>
              <span>TikTok</span>
              <small>@ristorante_africa</small>
            </div>
            <span aria-hidden="true">→</span>
          </a>
          <a className="link-card" href={LINKS.maps} target="_blank" rel="noopener noreferrer">
            <div>
              <span>Google Maps</span>
              <small>Indicazioni e recensioni</small>
            </div>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <h2>Dove siamo</h2>
        <p>
          <a href={LINKS.maps} target="_blank" rel="noopener noreferrer">
            Apri la posizione su Google Maps
          </a>{' '}
          per indicazioni stradali e recensioni.
        </p>
      </article>

      <Footer variant="about" />
    </>
  )
}
