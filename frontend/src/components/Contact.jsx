import React, { useState } from "react"
import axios from "axios"
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [mobile, setMobile] = useState("");
    const [loading, setLoading] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data } = await axios.post(
                "https://elite-power-production-backend.onrender.com",
                {
                    name,
                    email,
                    mobile,
                    message,
                },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                }
            );
            setName("");
            setEmail("");
            setMobile("");
            setMessage("");
            toast.success(data.message);
            setLoading(false);
          } catch (error) {
            setLoading(false);
            toast.error(error.response.data.message);
          }
    };

    return (
        <section className="contact">
            <form onSubmit={sendEmail}>
                <h1>Contact Us</h1>
                <div>
                    <label>Name</label>
                    <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Mobile Number</label>
                    <input 
                    type= "number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    />
                </div>
                <div>
                    <label>Message</label>
                    <input 
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button
                type="submit"
                disabled={loading}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "15px",
                }}
                >{loading && <ClipLoader size={20} color="white" />}Send Message
                </button>
            </form>
        </section>
    )
}

export default Contact
