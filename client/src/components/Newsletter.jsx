
const Newsletter = ({ status, message, onValidated }) => {
    let email;
    const submit = () =>
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });

    return (
        <div className="w-[95%] md:w-[85%] h-[18rem] bg-white-600 mb-[4rem] mx-auto flex items-center justify-center flex-col rounded-md">
            <div className="flex items-center justify-center flex-col mb-3">
                <img className="h-[4rem] w-auto mb-2" src="./img/logo.png" alt="logo"/>
                <h3 className="text-[1.8rem] font-bold">Subscribe to our newsletter</h3>
                <h5 className="text-[1.1rem] font-light">Stay up to date with the latest listings!</h5>
            </div>

            <div>
                {status === "sending" && <div style={{ color: "#2980b9", fontSize: "1.2rem" }}>Sending...</div>}
                {status === "error" && (
                    <div
                        style={{ color: "red", fontSize: "1.2rem" }}
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
                {status === "success" && (
                    <div
                        style={{ color: "#27ae60", fontSize: "1.2rem"}}
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
            </div>
            <div className="flex items-center justify-center w-[85%] md:w-[70%] h-[3rem]">
                <input
                    className="w-3/4 md:w-1/2 h-[2.25rem] rounded mr-2 pl-2"
                    ref={node => (email = node)}
                    type="email"
                    placeholder="Your email"
                />

                <button className="bg-[#2ECC40] rounded-md py-2 px-3 text-sm font-[400] text-white shadow-sm hover:text-white-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2ECC40]" onClick={submit}>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter
