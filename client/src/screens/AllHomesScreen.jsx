import Navbar from "../components/Navbar"
// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const NewListingScreen = () => {
    const [listings, setListings] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/listings')
        .then((res) => { 
            console.log(res)
            setListings(res.data)
        })
        .catch((err) => console.log(err))

    }, [])

    return (
        <div>
            <Navbar />
            <div className="py-24 flex items-center justify-start flex-wrap">
            {listings.map((listing) => {
                return (
                    <div className="pl-4" key={listing._id}>
                        <h3>{listing.address}</h3>
                        <h4>${listing.price}</h4>
                        <p>{listing.description}</p>
                        <p><span className="font-semibold">Listed by:</span> {listing.firstName} {listing.lastName}</p>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default NewListingScreen
