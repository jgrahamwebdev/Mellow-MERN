import Cards from "../components/Cards"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const HomeScreen = () => {
    return (
        <div className="w-full h-auto">
            <Navbar />
            <Hero />
            <Cards />
            <Footer />
        </div>
    )
}

export default HomeScreen
