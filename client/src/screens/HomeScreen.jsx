import Cards from "../components/Cards"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import HomeGrid from "../components/HomeGrid"
import Navbar from "../components/Navbar"

const HomeScreen = () => {
    return (
        <div className="w-full h-auto bg-white-500">
            <Navbar />
            <Hero />
            <Cards />
            <HomeGrid />
            <Footer />
        </div>
    )
}

export default HomeScreen
