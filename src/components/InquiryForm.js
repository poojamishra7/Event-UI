import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const InquiryForm = () => {
    const [startDate, setStartDate] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        eventDate: '',
        whatsappUpdates: false,
    });
    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        eventDate: '',
    });
    let [error_msg, setMsg] = useState("");
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'name') {
            const filteredValue = value.replace(/[^a-zA-Z\s]/g, '');
            setFormData((prevData) => ({
                ...prevData,
                [name]: filteredValue,
            }));
        } else if (name === 'phone') {
            const filteredValue = value.replace(/[^\d]/g, '');
            setFormData((prevData) => ({
                ...prevData,
                [name]: filteredValue,
            }));
        } else {
            debugger;
            setFormData((prevData) => ({
                ...prevData,
                [name]: type === 'checkbox' ? checked : value,
            }));
        }
    };
    const isValidName = (name) => /^[A-Za-z\s]+$/.test(name);
    const isValidPhone = (phone) => /^[789]\d{9}$/.test(phone);
    const validateForm = () => {
        const { name, phone, eventDate } = formData;
        let isValid = true;
        const newErrors = {};

        if (name && !isValidName(name)) {
            newErrors.name = 'Invalid name. Only letters and spaces are allowed.';
            isValid = false;
        }

        if (phone && !isValidPhone(phone)) {
            newErrors.phone = 'Invalid phone number. Must be a 10-digit Indian number starting with 7-9.';
            isValid = false;
        }

        if (!eventDate) {
            newErrors.eventDate = 'Event date is required.';
            isValid = false;
        }
        setMsg('');
        if (!eventDate && !phone && !name) {
            setMsg('Please fill required details')
        } else {
            setErrors(newErrors);
        }
        return isValid;
    };
    const saveEnquiryData = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('/api/save-enquiry', formData);
                setMsg('Thank you for dropping your message, Our team will connect to you soon.');
            } catch (error) {
                setMsg('Error saving enquiry:', error);
            }
        } else {
            setMsg('Please fill in all required fields.');
        }
    };

    return (
        <form onSubmit={saveEnquiryData}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                    <input
                        type="text"
                        className="form-control"
                        name='name'
                        placeholder="*Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-phone"></i></span>
                    <input
                        type="text"
                        className="form-control"
                        name='phone'
                        placeholder="*Enter your phone number"
                        value={formData.phone}
                        maxLength={10}
                        onChange={handleChange}
                    />
                </div>
            </div>
            {errors.phone && <span className="error">{errors.phone}</span>}
            <div className="mb-3">
                <label htmlFor="eventDate" className="form-label">Event Date</label>
                <div className="input-group">    
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date);
                            setFormData((prevData) => ({
                                ...prevData,
                                eventDate: date,
                            }));
                        }}
                        dateFormat="dd/MM/yyyy"
                        className="form-control"
                        placeholderText="Select Event Date"
                        style={{ width: '100%' }}
                    />
                </div>
            </div>
            {errors.eventDate && <span className="error">{errors.eventDate}</span>}
            <div className="form-check mb-3">
                <input
                    name='whatsappUpdates'
                    className="form-check-input mt-1"
                    type="checkbox"
                    id="whatsappUpdates"
                    checked={formData.whatsappUpdates}
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="whatsappUpdates" style={{'paddingTop': '0%'}}>
                    Send me updates on WhatsApp
                </label>
            </div>
            <span className='error'>{error_msg}</span>
            <button type="submit" className="btn btn-primary">Get Free Quotes</button>
        </form>
    );
};

export default InquiryForm;
