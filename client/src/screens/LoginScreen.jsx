import { Link } from "react-router-dom"

const LoginScreen = () => {
    return (
        <div>
            <div className="w-screen h-screen flex items-center justify-center flex-col">
                <div className="w-1/2 h-auto shadow-md py-8 rounded border-2 border-white-600 mb-10">
                    <div className="w-full h-auto flex items-center justify-center flex-col mb-10">
                        <img className="w-[4rem] h-auto mb-4" src="/img/logo.png" alt="" />
                        <h1 className="text-[2rem] underline underline-offset-2 decoration-2">Login or register to begin:</h1>
                    </div>
                    <div className="w-full h-auto">
                        <div className="flex items-center justify-center flex-col">
                            <div className="w-[65%] mb-2 underline underline-offset-2 decoration-2 text-white-800">
                                <p>Email:</p>
                            </div>
                            <input className="w-[65%] h-[3rem] rounded pl-2 mb-8 border-2 border-white-600" type="text" placeholder="Email"/>
                            <div className="w-[65%] mb-2 underline underline-offset-2 decoration-2 text-white-800">
                                <p>Password:</p>
                            </div>
                            <input className="w-[65%] h-[3rem] rounded pl-2 mb-8 border-2 border-white-600" type="text" placeholder="Password"/>
                            <button className="px-8 py-2 rounded bg-primary-500 hover:bg-secondary-500 hover:text-white-900 text-white-500">Login</button>
                        </div>
                    </div>
                </div>
                    <h3 className="text-[1.1rem]">New user? <Link to={'/register'}><span className="text-primary-500 underline underline-offset-2 decoration-2">Register here</span></Link></h3>
            </div>
        </div>
    )
}

export default LoginScreen
