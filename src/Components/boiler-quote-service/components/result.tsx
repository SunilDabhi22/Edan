import '../index.css';
import ProductImage1 from '../../../Assets/product/ETEC_S_FRONT_RET-3_20n-053 E-Tec on trans bg.png';
import { Col, Container, Row } from 'react-bootstrap';
import { ShieldIcon, RefreshIcon } from '../../../SharedComponents/sharedIcons'

export default function QuoteResult(props: any) {

    const boilerProduct = [
        {
            title: 'Perfect Match',
            image: ProductImage1,
            name: 'Worcester Bosch Greenstar 400030kW',
            price: '2,195'
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
            <div className='boiler_prod_item'>
                <Container>
                    <Row style={{ alignItems: 'center' }}>
                        <Col sm={4} xs={12}>
                            <div className='prod_left'>
                                <h3>Perfect Match</h3>
                                <p>The all-new benchmark for boilers</p>

                                <span><ShieldIcon /> 10 year guarantee</span>
                                <span><span className='percent_badge'>%</span> 2 Years 0% APR</span>
                            </div>
                        </Col>
                        <Col sm={8} xs={12} style={{ borderLeft: '2px solid' }}>
                            <div className='prod_right'>
                                <div className='prod_img'>
                                    <img src={ProductImage1} alt='Product' />
                                </div>
                                <div className='prod_prices'>
                                    <h4>Worcester Bosch Greenstar 400030kW</h4>
                                    <div className='prod_price_box'>
                                        <span className='dark_line'>Your fixed price (inc. installation)</span>
                                        <div className='prod_price_discount'>
                                            <span>
                                                <span className='price_cut'>Was <span>£2,295</span></span>
                                                <span className='prod_real_price'>£2,195</span>
                                                <span className='prod_note'>Fitted price inc. VAT</span>
                                            </span>
                                            <span className='divider'>or</span>
                                            <span>
                                                <span className='prod_month_price'>£28.38</span>
                                                <span className='prod_month_note'>a month & 9.9%APR </span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className='prod_submit'>
                                        <button type='button'>Send Quote</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='boiler_prod_item light_boiler_ver'>
                <Container>
                    <Row style={{ alignItems: 'center' }}>
                        <Col sm={4} xs={12}>
                            <div className='prod_left'>
                                <h3>Low-Cost Option</h3>
                                <p>Backed by an exclusive 10 year warranty</p>

                                <span><ShieldIcon /> 10 year guarantee</span>
                                {/* <span><span className='percent_badge'>%</span> 2 Years 0% APR</span> */}
                            </div>
                        </Col>
                        <Col sm={8} xs={12} style={{ borderLeft: '2px solid' }}>
                            <div className='prod_right'>
                                <div className='prod_img'>
                                    <img src={ProductImage1} alt='Product' />
                                </div>
                                <div className='prod_prices'>
                                    <h4>Alpha <br />E-Tec28kW</h4>
                                    <div className='prod_price_box'>
                                        <span className='dark_line'>Your fixed price (inc. installation)</span>
                                        <div className='prod_price_discount'>
                                            <span>
                                                <span className='price_cut'>Was <span>£2,295</span></span>
                                                <span className='prod_real_price'>£2,195</span>
                                                <span className='prod_note'>Fitted price inc. VAT</span>
                                            </span>
                                            <span className='divider'>or</span>
                                            <span>
                                                <span className='prod_month_price'>£28.38</span>
                                                <span className='prod_month_note'>a month & 9.9%APR </span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className='prod_submit'>
                                        <button type='button'>Send Quote</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='boiler_prod_item light_boiler_ver'>
                <Container>
                    <Row style={{ alignItems: 'center' }}>
                        <Col sm={4} xs={12}>
                            <div className='prod_left'>
                                <h3>Long Life</h3>
                                <p>Colossal 13 year warranty</p>

                                <span><ShieldIcon /> 13 year guarantee</span>
                                <span><span className='percent_badge'>%</span> 2 Years 0% APR</span>
                            </div>
                        </Col>
                        <Col sm={8} xs={12} style={{ borderLeft: '2px solid' }}>
                            <div className='prod_right'>
                                <div className='prod_img'>
                                    <img src={ProductImage1} alt='Product' />
                                </div>
                                <div className='prod_prices'>
                                    <h4>Alpha<br /> E-Tec Plus28kW</h4>
                                    <div className='prod_price_box'>
                                        <span className='dark_line'>Your fixed price (inc. installation)</span>
                                        <div className='prod_price_discount'>
                                            <span>
                                                <span className='price_cut'>Was <span>£2,295</span></span>
                                                <span className='prod_real_price'>£2,195</span>
                                                <span className='prod_note'>Fitted price inc. VAT</span>
                                            </span>
                                            <span className='divider'>or</span>
                                            <span>
                                                <span className='prod_month_price'>£28.38</span>
                                                <span className='prod_month_note'>a month & 9.9%APR </span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className='prod_submit'>
                                        <button type='button'>Send Quote</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

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
                                <li>Current Boiler <span>Combi Boiler</span></li>
                                <li>Replacement <span>Combi Boiler</span></li>
                                <li>Want Boiler Moving? <span>No, I don't</span></li>
                                <li>House Type <span>Detached</span></li>
                                <li>Bedrooms <span>2</span></li>
                                <li>Bathtubs <span>1</span></li>
                                <li>Showers <span>1</span></li>
                                <li>Flue Exit <span>Roof</span></li>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
} 