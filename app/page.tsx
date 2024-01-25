import Image from 'next/image'
import NavBar from './components/nav-bar'
import Hero from './components/hero'
import Feature from './components/feature'
import FeatureList from './components/feature-list'
import Benefits from './components/benefits'

export default function Home() {
  return (
    
    <main>
      <NavBar />
      <Hero />
      <Feature/> 
      <FeatureList/>
      <Benefits/>
    </main>
  )
}
