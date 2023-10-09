import React, { useState, useEffect } from 'react';

const ContactForm = () => {
    const [full_name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [thankmessage, setThank] = useState('');
    const [page_type, setPageType] = useState('');

    useEffect(() => {
        setPageType(getPageType());
    }, []);

    const getPageType = () => {

    };

    const handleSubmit = async e => {
        e.preventDefault();
        const data = {
            full_name,
            email,
            phone_number,
            message,
            thankmessage,
            page_type: "Contact",
            form_type: "Contact Form",
        };

        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}common-contact-form`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                }
            );
            const responseData = await response.json();
            console.log(responseData);
            setThank('Thank you for your message. It has been sent.');
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        } catch (error) {
            console.log(error);
            setThank('Message failed to send. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="from-bottom">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-feild">
                        <label>Full Name</label>
                        <input type="text" value={full_name} onChange={e => setName(e.target.value)} placeholder="Name" required />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-feild">
                        <label>Email Address</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-feild">
                        <label>Phone Number</label>
                        <input type="text" value={phone_number} onChange={e => setPhone(e.target.value)} placeholder="Phone" required />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-feild">
                        <label>Message</label>
                        <textarea type="textrea" value={message} onChange={e => setMessage(e.target.value)} placeholder="Type Your Message Here..." />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-button">
                        <button type="submit" class="custom-btn"><span>Submit</span></button>
                        {thankmessage && <p className="error-msg">{thankmessage}</p>}
                    </div>
                </div>
            </div>

        </form>
    );
};

export default ContactForm;