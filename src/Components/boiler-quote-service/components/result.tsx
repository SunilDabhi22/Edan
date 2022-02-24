import '../index.css';
import ProductImage1 from '../../../Assets/product/ETEC_S_FRONT_RET-3_20n-053 E-Tec on trans bg.png';
import { Col, Container, Row } from 'react-bootstrap';
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

export default function QuoteResult(props: any) {

    const boilerProduct = [
        {
            title: 'Perfect Match',
            image: ProductImage1,
            name: 'Worcester Bosch Greenstar 400030kW',
            price: '2,195'
        }
    ]


    const { bathtubs, boiler_mounted, boiler_new_location, current_boiler, current_boiler_working, flue_exit,
        fuel_power, how_many_bedrooms, postcode, property_type, radiators, replace_boiler, roof_type, shower_cubicles, } = props?.data;

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
                <Container fluid>
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
                                    <img src={PerfectMatchImg} alt='Product' />
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
                <Container fluid>
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
                                    <img src={LowCostImg} alt='Product' />
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
                <Container fluid>
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
                                    <img src={LongLifeImg} alt='Product' />
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

            <div className='boiler_prod_item light_boiler_ver'>
                <Container fluid>
                    <Row style={{ alignItems: 'center' }}>
                        <Col sm={4} xs={12}>
                            <div className='prod_left'>
                                <h3>All-British Boiler</h3>
                                <p>A popular, UK-built combi</p>

                                <span><ShieldIcon /> 10 year warranty</span>
                            </div>
                        </Col>
                        <Col sm={8} xs={12} style={{ borderLeft: '2px solid' }}>
                            <div className='prod_right'>
                                <div className='prod_img'>
                                    <img src={AllBritishImg} alt='Product' />
                                </div>
                                <div className='prod_prices'>
                                    <h4>Ideal<br /> Logic+ 35kW</h4>
                                    <div className='prod_price_box'>
                                        <span className='dark_line'>Your fixed price (inc. installation)</span>
                                        <div className='prod_price_discount'>
                                            <span>
                                                {/* <span className='price_cut'>Was <span>£2,295</span></span> */}
                                                <span className='prod_real_price'>£2,195</span>
                                                <span className='prod_note'>Fitted price inc. VAT</span>
                                            </span>
                                            <span className='divider'>or</span>
                                            <span>
                                                <span className='prod_month_price'>£37.69</span>
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
                <Container fluid>
                    <Row style={{ alignItems: 'center' }}>
                        <Col sm={4} xs={12}>
                            <div className='prod_left'>
                                <h3>Ultra Efficient</h3>
                                <p>Viessmann's all-new, tech-packed 2021 model</p>

                                <span><ShieldIcon /> 10 year warranty</span>
                                <span><span className='percent_badge'>%</span> 2 Years 0% APR</span>
                            </div>
                        </Col>
                        <Col sm={8} xs={12} style={{ borderLeft: '2px solid' }}>
                            <div className='prod_right'>
                                <div className='prod_img'>
                                    <img src={UltraEffiecientImg} alt='Product' />
                                </div>
                                <div className='prod_prices'>
                                    <h4>Viessmann<br /> Vitodens 100-W 35kW</h4>
                                    <div className='prod_price_box'>
                                        <span className='dark_line'>Your fixed price (inc. installation)</span>
                                        <div className='prod_price_discount'>
                                            <span>
                                                <span className='price_cut'>Was <span>£3,375</span></span>
                                                <span className='prod_real_price'>£3,325</span>
                                                <span className='prod_note'>Fitted price inc. VAT</span>
                                            </span>
                                            <span className='divider'>or</span>
                                            <span>
                                                <span className='prod_month_price'>£42.99</span>
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
                <Container fluid>
                    <Row style={{ alignItems: 'center' }}>
                        <Col sm={4} xs={12}>
                            <div className='prod_left'>
                                <h3>Compact Size</h3>
                                <p>Designed to fit in kitchen cupboards</p>

                                <span><ShieldIcon /> 10 year guarantee</span>
                                {/* <span><span className='percent_badge'>%</span> 2 Years 0% APR</span> */}
                            </div>
                        </Col>
                        <Col sm={8} xs={12} style={{ borderLeft: '2px solid' }}>
                            <div className='prod_right'>
                                <div className='prod_img'>
                                    <img src={CompactSizeImg} alt='Product' />
                                </div>
                                <div className='prod_prices'>
                                    <h4>Worcester Bosch Greenstar CDi Compact 36kW</h4>
                                    <div className='prod_price_box'>
                                        <span className='dark_line'>Your fixed price (inc. installation)</span>
                                        <div className='prod_price_discount'>
                                            <span>
                                                {/* <span className='price_cut'>Was <span>£3,375</span></span> */}
                                                <span className='prod_real_price'>£3,380</span>
                                                <span className='prod_note'>Fitted price inc. VAT</span>
                                            </span>
                                            <span className='divider'>or</span>
                                            <span>
                                                <span className='prod_month_price'>£43.70</span>
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
                <Container fluid>
                    <Row style={{ alignItems: 'center' }}>
                        <Col sm={4} xs={12}>
                            <div className='prod_left'>
                                <h3>Range Topper</h3>
                                <p>Worcester's most powerful, range-topping combi</p>

                                <span><ShieldIcon /> 10 year guarantee</span>
                                <span><span className='percent_badge'>%</span> 2 Years 0% APR</span>
                            </div>
                        </Col>
                        <Col sm={8} xs={12} style={{ borderLeft: '2px solid' }}>
                            <div className='prod_right'>
                                <div className='prod_img'>
                                    <img src={RangeTopperImg} alt='Product' />
                                </div>
                                <div className='prod_prices'>
                                    <h4>Worcester Bosch Greenstar 8000 Style 35kW</h4>
                                    <div className='prod_price_box'>
                                        <span className='dark_line'>Your fixed price (inc. installation)</span>
                                        <div className='prod_price_discount'>
                                            <span>
                                                <span className='price_cut'>Was <span>£3,590</span></span>
                                                <span className='prod_real_price'>£3,390</span>
                                                <span className='prod_note'>Fitted price inc. VAT</span>
                                            </span>
                                            <span className='divider'>or</span>
                                            <span>
                                                <span className='prod_month_price'>£43.83</span>
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
                <Container fluid>
                    <Row style={{ alignItems: 'center' }}>
                        <Col sm={4} xs={12}>
                            <div className='prod_left'>
                                <h3>Hybrid Powerhouse</h3>
                                <p>Insane hot water delivery for larger homes</p>

                                <span><ShieldIcon /> 10 year warranty</span>
                                <span><span className='percent_badge'>%</span> 2 Years 0% APR</span>
                            </div>
                        </Col>
                        <Col sm={8} xs={12} style={{ borderLeft: '2px solid' }}>
                            <div className='prod_right'>
                                <div className='prod_img'>
                                    <img src={HybridImg} alt='Product' />
                                </div>
                                <div className='prod_prices'>
                                    <h4>Viessmann<br /> Vitodens 111-W 32kW</h4>
                                    <div className='prod_price_box'>
                                        <span className='dark_line'>Your fixed price (inc. installation)</span>
                                        <div className='prod_price_discount'>
                                            <span>
                                                <span className='price_cut'>Was <span>£4,645</span></span>
                                                <span className='prod_real_price'>£4,545</span>
                                                <span className='prod_note'>Fitted price inc. VAT</span>
                                            </span>
                                            <span className='divider'>or</span>
                                            <span>
                                                <span className='prod_month_price'>£58.76</span>
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
                <Container fluid>
                    <Row style={{ alignItems: 'center' }}>
                        <Col sm={4} xs={12}>
                            <div className='prod_left'>
                                <h3>German Efficiency</h3>
                                <p>Ultra-efficient and A-rated</p>

                                <span><ShieldIcon /> 10 year warranty</span>
                                <span><span className='percent_badge'>%</span> 2 Years 0% APR</span>
                            </div>
                        </Col>
                        <Col sm={8} xs={12} style={{ borderLeft: '2px solid' }}>
                            <div className='prod_right'>
                                <div className='prod_img'>
                                    <img src={GermanEfficientImg} alt='Product' />
                                </div>
                                <div className='prod_prices'>
                                    <h4>Viessmann<br /> Vitodens 050-W 30kW</h4>
                                    <div className='prod_price_box'>
                                        <span className='dark_line'>Your fixed price (inc. installation)</span>
                                        <div className='prod_price_discount'>
                                            <span>
                                                <span className='price_cut'>Was <span>£2,450</span></span>
                                                <span className='prod_real_price'>£2,310</span>
                                                <span className='prod_note'>Fitted price inc. VAT</span>
                                            </span>
                                            <span className='divider'>or</span>
                                            <span>
                                                <span className='prod_month_price'>£29.87</span>
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
                <Container fluid>
                    <Row style={{ alignItems: 'center' }}>
                        <Col sm={4} xs={12}>
                            <div className='prod_left'>
                                <h3>Energy Saver</h3>
                                <p>Ultra-efficient, A-rated and Google smart controlled</p>

                                <span><ShieldIcon /> 10 year warranty</span>
                                <span><span className='percent_badge'>%</span> 2 Years 0% APR</span>
                            </div>
                        </Col>
                        <Col sm={8} xs={12} style={{ borderLeft: '2px solid' }}>
                            <div className='prod_right'>
                                <div className='prod_img'>
                                    <img src={EnergySaverImg} alt='Product' />
                                </div>
                                <div className='prod_prices'>
                                    <h4>Viessmann<br /> Vitodens 050-W30kW & Nest Thermostat</h4>
                                    <div className='prod_price_box'>
                                        <span className='dark_line'>Your fixed price (inc. installation)</span>
                                        <div className='prod_price_discount'>
                                            <span>
                                                <span className='price_cut'>Was <span>£2,495</span></span>
                                                <span className='prod_real_price'>£2,390</span>
                                                <span className='prod_note'>Fitted price inc. VAT</span>
                                            </span>
                                            <span className='divider'>or</span>
                                            <span>
                                                <span className='prod_month_price'>£30.90</span>
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
                                <li>Postcode <span>{postcode || '-'}</span></li>
                                <li>Current Boiler
                                    <span>
                                        {
                                            current_boiler === 'combi_boiler' ? "Combi Boiler" :
                                                current_boiler === 'regular_boiler' ? "Regular Boiler" :
                                                    current_boiler === 'system_boiler' ? "System Boiler" :
                                                        current_boiler === 'back_boiler' ? "Back Boiler" :
                                                            "-"
                                        }
                                    </span></li>
                                <li>Replacement
                                    <span>
                                        {
                                            replace_boiler === 'combi_boiler_r' ? "Combi Boiler" :
                                                replace_boiler === 'regular_boiler_r' ? "Regular Boiler" :
                                                    replace_boiler === 'system_boiler_r' ? "System Boiler" :
                                                        "-"
                                        }
                                    </span>
                                </li>
                                <li>Want Boiler Moving?
                                    <span>
                                        {
                                            boiler_new_location === "no_new_loc" ? "No, I don't" :
                                                boiler_new_location === "yes_new_loc" ? "Yes, I do" :
                                                    '-'
                                        }
                                    </span>
                                </li>
                                <li>House Type
                                    <span>
                                        {
                                            property_type === "semi_detached" ? "Semi-Detached" :
                                                property_type === "detached" ? "Detached" :
                                                    property_type === "terraced" ? "Terraced" :
                                                        property_type === "bungalow" ? "Bungalow" :
                                                            property_type === "flat_apart" ? "Flat/Apartment" :
                                                                '-'
                                        }
                                    </span>
                                </li>
                                <li>Bedrooms
                                    <span>
                                        {
                                            how_many_bedrooms === "one_bed" ? "1" :
                                                how_many_bedrooms === "two_bed" ? "2" :
                                                    how_many_bedrooms === "three_bed" ? "3" :
                                                        how_many_bedrooms === "four_bed" ? "4" :
                                                            how_many_bedrooms === "five_plus_bed" ? "5+" :
                                                                '-'
                                        }
                                    </span>
                                </li>
                                <li>Bathtubs
                                    <span>
                                        {
                                            bathtubs === "no_bathtubs" ? "No Bathtubs" :
                                                bathtubs === "one_bathtubs" ? "1" :
                                                    bathtubs === "two_bathtubs" ? "2" :
                                                        bathtubs === "three_plus_bathtubs" ? "3+" :
                                                            '-'
                                        }
                                    </span>
                                </li>
                                <li>Showers
                                    <span>
                                        {
                                            shower_cubicles === "no_shower_cubicles" ? "No Shower Cubicles" :
                                                shower_cubicles === "one_shower_cubicle" ? "1" :
                                                    shower_cubicles === "two_plus_shower_cubicles" ? "2+" :
                                                        '-'
                                        }
                                    </span>
                                </li>
                                <li>Flue Exit <span>
                                    {
                                        flue_exit === "external_wall" ? "External Wall" :
                                            flue_exit === "roof" ? "Roof" :
                                                '-'
                                    }
                                </span>
                                </li>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
} 