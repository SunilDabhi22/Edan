import { Container, Row, Col, Toast, Button } from 'react-bootstrap'
import './index.css'
import { MailIcon, Facebook, Instagram, YouTube, Twitter } from '../../SharedComponents/sharedIcons'
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function ContactSection(props: any) {

    const [isToast, setIsToast] = useState(false);

    return (

        <div className='contact_main'>
            <div className='contact-heading'>
                <h1>Contact Us</h1>
            </div>

            <div className='contact_address'>
                <Container>
                    <Row className='align-items-center'>
                        <Col md={4} xs={12}>
                            <div className='contact_address_details'>
                                <h5 className='office_title'>Sales</h5>
                                <p>Looking to buy a new boiler?</p>
                                <div className='office_time'>
                                    <p>
                                        <span>Mon - Fri</span>
                                        <span>8am - 7pm</span>
                                    </p>
                                    <p>
                                        <span>Sat</span>
                                        <span>8am - 4pm</span>
                                    </p>
                                </div>
                                <h5 className='office_number'>0121 389 1647</h5>
                                <span className='mail-box'><MailIcon /> Email Sales</span>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className='contact_address_details'>
                                <h5 className='office_title'>Aftercare</h5>
                                <p>Have an issue or need some support?</p>
                                <div className='office_time'>
                                    <p>
                                        <span>Mon - Fri</span>
                                        <span>8am - 4:30pm</span>
                                    </p>
                                    <p>
                                        <span>Sat</span>
                                        <span>8am - 4pm</span>
                                    </p>
                                </div>
                                <h5 className='office_number'>0121 389 1647</h5>
                                <span className='mail-box'><MailIcon /> Email Aftercare</span>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <div className='contact_address_details'>
                                <h5 className='office_title'>Engineers</h5>
                                <p>Want to join our network, or need assistance?</p>
                                <div className='office_time'>
                                    <p>
                                        <span>Mon - Fri</span>
                                        <span>8am - 7pm</span>
                                    </p>
                                </div>
                                <h5 className='office_number'>0121 389 1647</h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='contact_form_sec' id='ContactForm'>
                <Container>
                    <Row className='align-items-center'>
                        <Col md={8}>
                            <Formik
                                initialValues={
                                    {
                                        fullName: '',
                                        contactNo: '',
                                        email: '',
                                        message: '',
                                    }
                                }
                                validate={values => {
                                    const errors: any = {};
                                    if (!values.fullName) {
                                        errors.fullName = 'Full Name is Required';
                                    }
                                    if (!values.contactNo) {
                                        errors.contactNo = 'Contact Number is Required';
                                    }
                                    if (!values.email) {
                                        errors.email = 'Email is Required';
                                    }
                                    if (!values.message) {
                                        errors.message = 'Message is Required';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    const newObj = {
                                        values: values,
                                        isFrom: 'contactPage',
                                    }
                                    axios.post(`http://localhost:3000/send`, newObj)
                                        .then((res: any) => {
                                            const response = res;
                                            if (response.data) {
                                                setIsToast(true);
                                            }
                                            setTimeout(() => {
                                                setIsToast(false);
                                            }, 3000);

                                        }).catch((err: any) => {
                                            console.log("Err", err);
                                        })
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    /* and other goodies */
                                }) => (
                                    <form onSubmit={handleSubmit} className='contact-form-main'>
                                        <Container>
                                            <Row className='align-items-center'>
                                                <Col md={6} xs={12}>
                                                    <div className='form-input'>
                                                        <label>Full name</label>
                                                        <input
                                                            type="text"
                                                            name="fullName"
                                                            placeholder='e.g. John Doe'
                                                            onChange={handleChange}
                                                            value={values.fullName}
                                                        />
                                                        <span className='form-error'>
                                                            {errors.fullName}
                                                        </span>
                                                    </div>
                                                </Col>

                                                <Col md={6} xs={12}>
                                                    <div className='form-input'>
                                                        <label>Contact number</label>
                                                        <input
                                                            type="text"
                                                            name="contactNo"
                                                            placeholder='e.g. 0123 123 1234'
                                                            onChange={handleChange}
                                                            value={values.contactNo}
                                                        />
                                                        <span className='form-error'>
                                                            {errors.contactNo}
                                                        </span>
                                                    </div>
                                                </Col>

                                                <Col md={12} xs={12}>
                                                    <div className='form-input'>
                                                        <label>Email address</label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            placeholder='e.g. email@example.com'
                                                            onChange={handleChange}
                                                            value={values.email}
                                                        />
                                                        <span className='form-error'>
                                                            {errors.email}
                                                        </span>
                                                    </div>
                                                </Col>

                                                <Col md={12} xs={12}>
                                                    <div className='form-input'>
                                                        <label>Message</label>
                                                        <textarea
                                                            name="message"
                                                            rows={4}
                                                            placeholder='Enter message here'
                                                            onChange={handleChange}
                                                            value={values.message}
                                                        />
                                                        <span className='form-error'>
                                                            {errors.message}
                                                        </span>
                                                    </div>
                                                </Col>

                                                <span className='form-note'>Once submitted, a member of our team will be in touch ASAP.</span>

                                                <div className='form-btn'>
                                                    <button type="submit">
                                                        Send
                                                    </button>
                                                </div>
                                            </Row>
                                        </Container>
                                    </form>
                                )}
                            </Formik>
                        </Col>

                        <Col md={4}>
                            <div className='contact_social'>
                                <h4 className='social_title'>Social</h4>
                                <span>Be our friend, follow us.</span>
                                <div className='contact_social_media'>
                                    <li><Link to='/' title='Facebook'><Facebook /></Link></li>
                                    <li><Link to='/' title='Instagram'><Instagram /></Link></li>
                                    <li><Link to='/' title='YouTube'><YouTube /></Link></li>
                                    <li><Link to='/' title='Twitter'><Twitter /></Link></li>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {isToast &&
                <Container>
                    <Row>
                        <Toast className='toast_message'>
                            <Toast.Body>Thank you for contacting us. We will be in touch with ASAP.</Toast.Body>
                            <Button variant="link" onClick={() => setIsToast(false)}>Close</Button>
                        </Toast>
                    </Row>
                </Container>
            }
        </div>

    )
}