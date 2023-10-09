import React, { useState, useEffect } from 'react';

const AdmissionForm = () => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [class_name, setClass] = useState('');
    const [d_o_b, setDOB] = useState('');
    const [father_name, setFatherName] = useState('');
    const [mother_name, setMotherName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [phone, setPhone] = useState('');
    const [address_line_1, setAddress1] = useState('');
    const [address_line_2, setAddress2] = useState('');
    const [description, setDescription] = useState('');
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
            first_name,
            last_name,
            gender,
            class_name,
            d_o_b,
            father_name,
            mother_name,
            occupation,
            phone,
            address_line_1,
            address_line_2,
            description,
            thankmessage,
            page_type: "Admission 2023",
            form_type: "Admission Form",
        };

        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}student-contact-form`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                }
            );
            const responseData = await response.json();
            console.log(responseData);
            setThank('Thank you for your message. It has been sent.');
            setFirstName('');
            setLastName('');
            setGender('');
            setClass('');
            setDOB('');
            setFatherName('');
            setMotherName('');
            setOccupation('');
            setPhone('');
            setAddress1('');
            setAddress2('');
            setDescription('');
        } catch (error) {
            console.log(error);
            setThank('Message failed to send. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="from-bottom">
            <div className="row">
                <h3>Student Detail</h3>
                <div className="col-md-6">
                    <div className="form-feild">
                        <input type="text" value={first_name} onChange={e => setFirstName(e.target.value)} placeholder="First Name" required />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-feild">
                        <input type="text" value={last_name} onChange={e => setLastName(e.target.value)} placeholder="Last Name" required />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-feild">
                        <input type="text" value={gender} onChange={e => setGender(e.target.value)} placeholder="Gender" required />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-feild">
                        <input type="text" value={class_name} onChange={e => setClass(e.target.value)} placeholder="Class" required />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-feild">
                        <label className="form-sad">Date of Birth</label>
                        <input type="date" value={d_o_b} onChange={e => setDOB(e.target.value)} placeholder="Date of Birth" required/>
                    </div>
                </div>



                <h3>Parents Details</h3>
                <div className="col-md-6">
                    <div className="form-feild">
                        <input type="text" value={father_name} onChange={e => setFatherName(e.target.value)} placeholder="Father's Name" required />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-feild">
                        <input type="email" value={mother_name} onChange={e => setMotherName(e.target.value)} placeholder="Mother's Name" required />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-feild">
                        <input type="text" value={occupation} onChange={e => setOccupation(e.target.value)} placeholder="Occupation" required />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-feild">
                        <input type="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" required />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-feild">
                        <input type="text" value={address_line_1} onChange={e => setAddress1(e.target.value)} placeholder="Address Line 1" required/>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-feild">
                        <input type="text" value={address_line_2} onChange={e => setAddress2(e.target.value)} placeholder="Address Line 2" />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-feild">
                        <textarea type="textrea" value={description} onChange={e => setDescription(e.target.value)} placeholder="Write Something here" />
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="form-button">
                        <button type="submit" class="custom-btn"><span>Submit Application</span></button>
                        {thankmessage && <p className="error-msg">{thankmessage}</p>}
                    </div>
                </div>
            </div>

        </form>
    );
};

export default AdmissionForm;