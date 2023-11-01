import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ListHomeScreen = () => {
    const [address, setAddress] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    let navigate = useNavigate(); 

    const onSubmitHandler = (e) => {
        // e.preventDefault();
        axios.post('http://localhost:8000/api/listing', {
          address,
          price,
          description,
          firstName,
          lastName
        })
        .then(res => {
          console.log(res)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })

        navigate('/homes');
    }
    

    return (
        <div>
            <Navbar />

            <div className="flex items-center justify-center">
            <div className="w-1/2 border-r-2">

            <div className="mx-auto max-w-3/4 lg:mx-0 mt-24 mb-12 pl-4">
                <h2 className="text-3xl font-bold tracking-tight text-primary-500 sm:text-4xl underline-offset-2 underline underline-black">List Your Home For Sale</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">Looking to sell your house? Fill out the form below and list your home for sale on Mellow:</p>
            </div>
           
            <form onSubmit={onSubmitHandler}>
                <div className="flex items-start justify-center flex-col pl-4 mb-8">
                    <label className="mb-2">Home Address:</label>
                    <input className="border-2 rounded-md pl-2 w-3/4 h-[2.2rem]" type="text" onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <div className="flex items-start justify-center flex-col pl-4 mb-8">
                    <label className="mb-2">Listing Price:</label>
                    <input className="border-2 rounded-md pl-2 w-3/4 h-[2.2rem]" type="text" onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <div className="flex items-start justify-center flex-col pl-4 mb-8">
                    <label className="mb-2">Description:</label>
                    <textarea className="border-2 rounded-md pl-2 w-3/4 h-[6rem]" type="text" onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div className="flex items-start justify-center flex-col pl-4 mb-8">
                    <label className="mb-2">First Name:</label>
                    <input className="border-2 rounded-md pl-2 w-3/4 h-[2.2rem]" type="text" onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div className="flex items-start justify-center flex-col pl-4 mb-8">
                    <label className="mb-2">Last Name:</label>
                    <input className="border-2 rounded-md pl-2 w-3/4 h-[2.2rem]" type="text" onChange={(e)=>setLastName(e.target.value)}/>
                </div>

                <input className="ml-4 text-white-100 bg-primary-500 px-4 py-2 rounded-md cursor-pointer mb-8" type="submit" />
      
            </form>
            </div>

            <div className="w-1/2 px-4">
                <img className="h-auto w-full" src="./img/interior-7.jpg" alt="" />
            </div>
            
            </div>
        </div>
    )
}

export default ListHomeScreen
