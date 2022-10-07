import './App.css'
import Nav from './components/Nav'
import Section from './components/Section'
import Card from './components/Card'
import cardData from './data/carData'

function App() {
  const cards = cardData.map((card) => {
    return (
      <Card
      key={card.id}
        cardList = {card}
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