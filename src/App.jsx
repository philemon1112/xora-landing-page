
import './App.css'
import Faq from './sections/faq'
import Features from './sections/Features'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Pricing from './sections/Pricing'

function App() {

  return (
    <main className='overflow-hidden'>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
    </main>
  )
}

export default App
