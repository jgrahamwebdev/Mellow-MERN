import Cards from "../components/Cards"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import HomeGrid from "../components/HomeGrid"
import Navbar from "../components/Navbar"
import Newsletter from '../components/Newsletter';

//NEEDED FOR EMAIL SUBSCRIPTION
import MailchimpSubscribe from "react-mailchimp-subscribe"
const url = 'https://gmail.us13.list-manage.com/subscribe/post?u=2a55f12e43a3f882ef012cd36&amp;id=7ded02caea&amp;f_id=007e8ae2f0';

const HomeScreen = () => {
    return (
        <div className="w-full h-auto bg-white-500">
            <Navbar />
            <Hero />
            <Cards />
            {/* NEWSLETTER */}
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                <Newsletter
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
                )}
            />
            <HomeGrid />
            <Footer />
        </div>
    )
}

export default HomeScreen
