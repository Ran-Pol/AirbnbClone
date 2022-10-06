import './App.css'
import Nav from './components/Nav'
import Section from './components/Section'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Nav />
      <Section />
      <Card
        tag="SOLD OUT"
        rate={'5.0'}
        country="USA"
        host="Life lessons with Katie Zaferes"
        price={138}
      />
    </div>
  )
}

export default App
