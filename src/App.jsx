import React from 'react'
import Homesection from './components/Homesection'
import Homedisplay from './components/home_display/Homedisplay'
import Kashmirtour from './components/tourpackage-component/Kashmirtour'
import Topcategories from './components/categories/Topcategories'
import Destination from './components/destination/Destination'
import Reviews from './components/reviews-component/Reviews'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Homesection />
      <Homedisplay />
      <Kashmirtour />
      <Topcategories />
      <Destination />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
