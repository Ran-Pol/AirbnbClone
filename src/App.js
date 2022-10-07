import './App.css'
import Nav from './components/Nav'
import Section from './components/Section'
import Card from './components/Card'
import cardData from './data/carData'

function App() {
  const cards = cardData.map((card) => {
    return (
      <Card
        img={card.coverImg}
        tag="TRENDING"
        rate={card.stats.rating}
        country={card.location}
        host={card.title}
        price={card.price}
        review={card.stats.reviewCount}
      />
    )
  })
  return (
    <div className="App">
      <Nav />
      <Section />
      <div className="cardContainer">
        {cards}
      </div>
    </div>
  )
}

export default App
