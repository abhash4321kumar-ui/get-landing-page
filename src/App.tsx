import Navbar from './components/Navbar'
import Homesection from './components/Homesection'
import Homedisplay from './components/home_display/Homedisplay'
import Kashmirtour from './components/tourpackage-component/Kashmirtour'
import Topcategories from './components/categories/Topcategories'
import Destination from './components/destination/Destination'
import Reviews from './components/reviews-component/Reviews'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'
import FloatingButtons from './components/FloatingButtons'

const App = () => {
  return (
    <div>
      {/* Navbar yaha hai, isliye poore page par fixed rehta hai */}
      <Navbar />
      <Homesection />
      <Homedisplay />
      <Kashmirtour />
      <Topcategories />
      <Destination />
      <Reviews />
      <Faq />
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App
