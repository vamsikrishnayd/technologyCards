// Write your code here.

import './index.css'

const Card = props => {
  const {cardData} = props
  const {title, description, imgUrl, className} = cardData

  return (
    <div className={`${className} card-container`}>
      <h1 className="heading">{title}</h1>
      <p className="info">{description}</p>
      <div className="img-card">
        <img src={imgUrl} className="avatar" alt="avatar" />
      </div>
    </div>
  )
}

export default Card
