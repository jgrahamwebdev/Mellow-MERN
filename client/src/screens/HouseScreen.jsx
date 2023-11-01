
// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HouseScreen = () => {
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
            {listings.map((listing) => {
                return (
                    <div key={listing._id}>
                        <h3>{listing.address}</h3>
                        <h4>{listing.price}</h4>
                        <p>{listing.description}</p>
                        <p>Listed by: {listing.firstName} {listing.lastName}</p>
                    </div>
                )
            })}
            
        </div>
    )
}

export default HouseScreen
