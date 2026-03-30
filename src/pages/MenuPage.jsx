import { useEffect } from 'react'
import MenuItemCard from '../components/MenuItemCard'
import Footer from '../components/Footer'
import { menuSections } from '../data/menuData'

export default function MenuPage() {
  useEffect(() => {
    document.title = 'Menu | Ristorante Africa'
  }, [])

  return (
    <>
      <section className="hero">
        <h1>Il nostro menu</h1>
        <p className="tagline">
          Dall’injera morbido ai tibs speziati, dal berberè profumato al caffè tradizionale — i sapori del
          Corno d’Africa. Un viaggio nella tradizione culinaria eritrea ed etiope.
        </p>
        <div className="divider" aria-hidden="true" />
      </section>

      <main>
        {menuSections.map((section) => (
          <section
            key={section.id}
            className="section"
            id={section.id}
            aria-labelledby={`${section.id}-title`}
          >
            <h2 className="section-title" id={`${section.id}-title`}>
              {section.title}
              {section.count ? <span className="section-count">{section.count}</span> : null}
            </h2>

            {section.items ? (
              <ul className="menu-list">
                {section.items.map((item) => (
                  <MenuItemCard key={item.title} {...item} />
                ))}
              </ul>
            ) : null}

            {section.subsections?.map((sub) => (
              <div key={sub.title} className="subsection">
                <h3>{sub.title}</h3>
                <ul className="menu-list">
                  {sub.items.map((item) => (
                    <MenuItemCard key={`${sub.title}-${item.title}`} {...item} />
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </main>

      <Footer />
    </>
  )
}
