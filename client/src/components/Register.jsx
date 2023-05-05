
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div>
            <div className="w-screen h-full flex items-center justify-center flex-col">
                <div className="w-[85%] md:w-1/2 h-auto shadow-md py-8 rounded border-2 border-white-600 my-10">
                    <div className="w-full h-auto flex items-center justify-center flex-col mb-10">
                        <img className="w-[4rem] h-auto mb-4" src="/img/logo.png" alt="" />
                        <h1 className="text-[2rem] underline underline-offset-2 decoration-2">Register here:</h1>
                    </div>
                    <div className="w-full h-auto">
                        <div className="flex items-center justify-center flex-col">
                            <div className="w-[65%] mb-2 underline underline-offset-2 decoration-2 text-white-800">
                                <p>Name:</p>
                            </div>
                            <input className="w-[65%] h-[3rem] rounded pl-2 mb-8 border-2 border-white-600" type="text" placeholder="Name"/>
                            <div className="w-[65%] mb-2 underline underline-offset-2 decoration-2 text-white-800">
                                <p>Email:</p>
                            </div>
                            <input className="w-[65%] h-[3rem] rounded pl-2 mb-8 border-2 border-white-600" type="text" placeholder="Email"/>
                            <div className="w-[65%] mb-2 underline underline-offset-2 decoration-2 text-white-800">
                                <p>Are you a real estate agent?</p>
                            </div>
                           <select className="w-[65%] h-[3rem] rounded px-2 mb-8 border-2 border-white-600 text-white-800">
                                <option value="0">Please Select</option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                           </select>
                           <div className="w-[65%] mb-2 underline underline-offset-2 decoration-2 text-white-800">
                                <p>Password:</p>
                            </div>
                            <input className="w-[65%] h-[3rem] rounded pl-2 mb-8 border-2 border-white-600" type="text" placeholder="Password"/>
                            <button className="px-8 py-2 rounded bg-primary-500 hover:bg-secondary-500 hover:text-white-900 text-white-500">Register</button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center mb-8">
                    <h3 className="text-[1.1rem]">Have an account? <Link to={'/loginreg'}><span className="text-primary-500 underline underline-offset-2 decoration-2">Login here</span></Link></h3>
                </div>
            </div>
        </div>
    )
}

export default Register
