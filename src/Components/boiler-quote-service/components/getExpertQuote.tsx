import '../index.css';
import { Button, Col, Container, Row, Toast } from 'react-bootstrap';
import { useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';

export default function QuoteResult(props: any) {

    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);
    const [isToast, setIsToast] = useState(false);

    return (
        <div className='boiler_quote_prod_another'>
            <div className='form_head'>
                <h3>Get quoted by an expert</h3>
                <p>Submit your details below, and we'll be in touch in a flash.</p>
            </div>
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

                    axios.post(`/api/send`, newObj)
                        .then((res: any) => {
                            const response = res;
                            if (response.data) {
                                setIsToast(true);
                                setShow(false);
                            }
                            setTimeout(() => {
                                setIsToast(false);
                                setShow(false);
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
                    <form onSubmit={handleSubmit} className='request-callback_another'>
                        <Container>
                            <Row className='align-items-center'>
                                <Col md={12} xs={12}>
                                    <div className='form-input'>
                                        <label>Name</label>
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

                                <Col md={12} xs={12}>
                                    <div className='form-input'>
                                        <label>Contact Number</label>
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
                            </Row>
                            <Row className='align-items-center'>
                                <Col md={12} xs={12}>
                                    <div className='form-input'>
                                        <label>Email Address</label>
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
                            </Row>
                            <Row className='align-items-center'>
                                <Col md={12} xs={12}>
                                    <div className='form-input'>
                                        <label>Notes/Comments</label>
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

                                <div className='form-btn'>
                                    <button type='button' onClick={() => handleSubmit()}>
                                        Submit
                                    </button>
                                </div>
                            </Row>
                        </Container>
                    </form>
                )}
            </Formik>

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
    );
} 