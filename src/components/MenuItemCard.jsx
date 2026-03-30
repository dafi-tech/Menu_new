const BADGE_CLASS = { spicy: 'badge-spicy', veg: 'badge-veg', vegan: 'badge-veg' }

const BADGE_LABEL = {
  spicy: 'Piccante',
  veg: 'Vegetariano',
  vegan: 'Vegano',
}

export default function MenuItemCard({ title, price, description, badges }) {
  return (
    <li className="menu-item">
      <div className="menu-item-header">
        <h3>{title}</h3>
        <span className="price">{price}</span>
      </div>
      {description ? <p>{description}</p> : null}
      {badges?.length ? (
        <div className="badges">
          {badges.map((b) => (
            <span key={`${title}-${b}`} className={`badge ${BADGE_CLASS[b]}`}>
              {BADGE_LABEL[b]}
            </span>
          ))}
        </div>
      ) : null}
    </li>
  )
}
