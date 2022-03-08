import '../index.css';
import ProductImage1 from '../../../Assets/product/ETEC_S_FRONT_RET-3_20n-053 E-Tec on trans bg.png';
import { Button, Col, Container, Modal, Row, Toast } from 'react-bootstrap';
import { ShieldIcon, RefreshIcon } from '../../../SharedComponents/sharedIcons';
import HybridImg from '../assets/hybrid.png';
import RangeTopperImg from '../assets/range_topper.png';
import CompactSizeImg from '../assets/compact-size.png';
import LowCostImg from '../assets/low-cost.png';
import PerfectMatchImg from '../assets/most-popular.png';
import AllBritishImg from '../assets/all-british.png';
import LongLifeImg from '../assets/long-life.png';
import UltraEffiecientImg from '../assets/ultra-efficient.png';
import EnergySaverImg from '../assets/energy-saver.png';
import GermanEfficientImg from '../assets/german-efficient.png';
import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import axios from 'axios';

export default function QuoteResult(props: any) {

    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);
    const [isToast, setIsToast] = useState(false);

    // useEffect(() => {
    //     const data: any = [];
    //     axios.post(`http://localhost:3000/send`, data)
    //         .then((res: any) => {
    //             const response = res;
    //             console.log("response data", response);
    //         }).catch((err: any) => {
    //             console.log("Err", err);
    //         })
    // }, [])

    const handleClose = () => setShow(false);
    const handleShow = (data: any) => {
        const obj: any = {
            data: data,
            answer: props.data
        }
        setShow(true);
        setData(obj);
    }

    const boilerItems = [
        {
            title: 'Perfect Match',
            description: 'The all-new benchmark for boilers',
            guarantee: '10 year guarantee',
            apr: '2 Years 0% APR',
            image: PerfectMatchImg,
            name: 'Worcester Bosch Greenstar 400030kW',
            price: '2,195',
            originalPrice: '2,295',
            monthlyRent: '28.38',
        },
        {
            title: 'Low-Cost Option',
            description: 'Backed by an exclusive 10 year warranty',
            guarantee: '10 year guarantee',
            image: LowCostImg,
            name: 'Alpha E-Tec28kW',
            price: '2,195',
            originalPrice: '2,295',
            monthlyRent: '28.38',
        },
        {
            title: 'Long Life',
            description: 'Colossal 13 year warranty',
            guarantee: '13 year guarantee',
            apr: '2 Years 0% APR',
            image: LongLifeImg,
            name: 'Alpha E-Tec Plus28kW',
            price: '2,195',
            originalPrice: '2,295',
            monthlyRent: '28.38',
        },
        {
            title: 'Ultra Efficient',
            description: "Viessmann's all-new, tech-packed 2021 model",
            guarantee: '10 year warranty',
            apr: '2 Years 0% APR',
            image: UltraEffiecientImg,
            name: 'Viessmann Vitodens 100-W 35kW',
            price: '3,325',
            originalPrice: '3,375',
            monthlyRent: '42.99',
        },
        {
            title: 'Compact Size',
            description: "Designed to fit in kitchen cupboards",
            guarantee: '10 year guarantee',
            image: CompactSizeImg,
            name: 'Worcester Bosch Greenstar CDi Compact 36kW',
            price: '3,380',
            monthlyRent: '43.70',
        },
        {
            title: 'Range Topper',
            description: "Worcester's most powerful, range-topping combi",
            guarantee: '10 year warranty',
            apr: '2 Years 0% APR',
            image: RangeTopperImg,
            name: 'Worcester Bosch Greenstar 8000 Style 35kW',
            price: '3,390',
            originalPrice: '3,590',
            monthlyRent: '43.83',
        },
        {
            title: 'Hybrid Powerhouse',
            description: "Insane hot water delivery for larger homes",
            guarantee: '10 year warranty',
            apr: '2 Years 0% APR',
            image: HybridImg,
            name: 'Viessmann Vitodens 111-W 32kW',
            price: '4,545',
            originalPrice: '4,645',
            monthlyRent: '58.76',
        },
        {
            title: 'German Efficiency',
            description: "Ultra-efficient and A-rated",
            guarantee: '10 year warranty',
            apr: '2 Years 0% APR',
            image: GermanEfficientImg,
            name: 'Viessmann Vitodens 050-W 30kW',
            price: '2,310',
            originalPrice: '2,450',
            monthlyRent: '29.87',
        },
        {
            title: 'Energy Saver',
            description: "Ultra-efficient, A-rated and Google smart controlled",
            guarantee: '10 year warranty',
            apr: '2 Years 0% APR',
            image: EnergySaverImg,
            name: 'Viessmann Vitodens 050-W30kW & Nest Thermostat',
            price: '2,390',
            originalPrice: '2,495',
            monthlyRent: '30.90',
        }
    ]


    return (
        <div className='boiler_quote_prod'>
            <Container>
                <Row style={{ alignItems: 'center' }}>
                    <Col xs={12}>
                        <div className='boiler_prod_header'>
                            <h3>Results</h3>
                            <p>All quotes are fixed & include Gas Safe installation</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            {boilerItems.length > 0 && boilerItems.map((e) => (
                <div className={e.title === 'Perfect Match' ? 'boiler_prod_item' : 'boiler_prod_item light_boiler_ver'}>
                    <Container fluid>
                        <Row style={{ alignItems: 'center' }}>
                            <Col sm={4} xs={12}>
                                <div className='prod_left'>
                                    <h3>{e.title}</h3>
                                    <p>{e.description}</p>

                                    {e.guarantee ? <span><ShieldIcon /> {e.guarantee}</span> : ''}
                                    {e.apr ? <span><span className='percent_badge'>%</span> {e.apr}</span> : ''}
                                </div>
                            </Col>
                            <Col sm={8} xs={12} style={{ borderLeft: '2px solid' }}>
                                <div className='prod_right'>
                                    <div className='prod_img'>
                                        <img src={e.image} alt='Product' />
                                    </div>
                                    <div className='prod_prices'>
                                        <h4>{e.name}</h4>
                                        <div className='prod_price_box'>
                                            <span className='dark_line'>Your fixed price (inc. installation)</span>
                                            <div className='prod_price_discount'>
                                                <span>
                                                    {e.originalPrice ?
                                                        <span className='price_cut'>Was <span>£{e.originalPrice}</span></span> : ""}
                                                    <span className='prod_real_price'>£{e.price}</span>
                                                    <span className='prod_note'>Fitted price inc. VAT</span>
                                                </span>
                                                <span className='divider'>or</span>
                                                <span>
                                                    <span className='prod_month_price'>£{e.monthlyRent}</span>
                                                    <span className='prod_month_note'>a month & 9.9%APR </span>
                                                </span>
                                            </div>
                                        </div>

                                        <div className='prod_submit'>
                                            <button type='button' onClick={() => handleShow(e)}>Request callback</button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ))}

            <div className='answer_section'>
                <Container>
                    <Row style={{ alignItems: 'center' }}>
                        <Col xs={12} sm={4}>
                            <h3>Your answers</h3>
                            <p>Here's what you told us, and what your fixed price quotes are based on.</p>
                            <button type='button' onClick={() => window.location.reload()} className='refresh_btn_dark'><RefreshIcon /> Restart</button>
                        </Col>
                        <Col xs={12} sm={8}>
                            <div className='answer_list'>
                                <li>Postcode <span>{props?.data?.postcode || '-'}</span></li>
                                <li>Current Boiler
                                    <span>
                                        {
                                            props?.data?.current_boiler === 'combi_boiler' ? "Combi Boiler" :
                                                props?.data?.current_boiler === 'regular_boiler' ? "Regular Boiler" :
                                                    props?.data?.current_boiler === 'system_boiler' ? "System Boiler" :
                                                        props?.data?.current_boiler === 'back_boiler' ? "Back Boiler" :
                                                            "-"
                                        }
                                    </span></li>
                                <li>Replacement
                                    <span>
                                        {
                                            props?.data?.replace_boiler === 'combi_boiler_r' ? "Combi Boiler" :
                                                props?.data?.replace_boiler === 'regular_boiler_r' ? "Regular Boiler" :
                                                    props?.data?.replace_boiler === 'system_boiler_r' ? "System Boiler" :
                                                        "-"
                                        }
                                    </span>
                                </li>
                                <li>Want Boiler Moving?
                                    <span>
                                        {
                                            props?.data?.boiler_new_location === "no_new_loc" ? "No, I don't" :
                                                props?.data?.boiler_new_location === "yes_new_loc" ? "Yes, I do" :
                                                    '-'
                                        }
                                    </span>
                                </li>
                                <li>House Type
                                    <span>
                                        {
                                            props?.data?.property_type === "semi_detached" ? "Semi-Detached" :
                                                props?.data?.property_type === "detached" ? "Detached" :
                                                    props?.data?.property_type === "terraced" ? "Terraced" :
                                                        props?.data?.property_type === "bungalow" ? "Bungalow" :
                                                            props?.data?.property_type === "flat_apart" ? "Flat/Apartment" :
                                                                '-'
                                        }
                                    </span>
                                </li>
                                <li>Bedrooms
                                    <span>
                                        {
                                            props?.data?.how_many_bedrooms === "one_bed" ? "1" :
                                                props?.data?.how_many_bedrooms === "two_bed" ? "2" :
                                                    props?.data?.how_many_bedrooms === "three_bed" ? "3" :
                                                        props?.data?.how_many_bedrooms === "four_bed" ? "4" :
                                                            props?.data?.how_many_bedrooms === "five_plus_bed" ? "5+" :
                                                                '-'
                                        }
                                    </span>
                                </li>
                                <li>Bathtubs
                                    <span>
                                        {
                                            props?.data?.bathtubs === "no_bathtubs" ? "No Bathtubs" :
                                                props?.data?.bathtubs === "one_bathtubs" ? "1" :
                                                    props?.data?.bathtubs === "two_bathtubs" ? "2" :
                                                        props?.data?.bathtubs === "three_plus_bathtubs" ? "3+" :
                                                            '-'
                                        }
                                    </span>
                                </li>
                                <li>Showers
                                    <span>
                                        {
                                            props?.data?.shower_cubicles === "no_shower_cubicles" ? "No Shower Cubicles" :
                                                props?.data?.shower_cubicles === "one_shower_cubicle" ? "1" :
                                                    props?.data?.shower_cubicles === "two_plus_shower_cubicles" ? "2+" :
                                                        '-'
                                        }
                                    </span>
                                </li>
                                <li>Flue Exit <span>
                                    {
                                        props?.data?.flue_exit === "external_wall" ? "External Wall" :
                                            props?.data?.flue_exit === "roof" ? "Roof" :
                                                '-'
                                    }
                                </span>
                                </li>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Request callback</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                                data: data,
                            }
                            axios.post(`http://localhost:3000/send`, newObj)
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
                            <form onSubmit={handleSubmit} className='request-callback'>
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
                                    </Row>
                                    <Row className='align-items-center'>
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
                                    </Row>
                                    <Row className='align-items-center'>
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
                </Modal.Body>
            </Modal>

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