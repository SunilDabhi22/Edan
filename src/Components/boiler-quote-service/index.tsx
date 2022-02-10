import { useState } from 'react'
import './index.css'
import { Formik, Form } from 'formik';

import GetStarted from './components/getStarted';
import BoilerSection1 from './components/which_boiler';
import BoilerSection2 from './components/timeToTalk';
import RestartSection from './components/restart';
import BoilerType from './components/boiler_type';
import ReplaceBoiler from './components/replace_boiler';
import NewLocationBoiler from './components/new_boiler_location';
import WallMounted from './components/mounted_wall';
import WorkingBoiler from './components/current_boiler_work';
import PropertyType from './components/property_type';
import HowManyBedrooms from './components/how_many_bedroom';
import Radiators from './components/radiators';
import Bathtubs from './components/bathtubs';
import ShowerCubicles from './components/shower_cubicles';
import FlueExit from './components/flue_exit';
import RoofType from './components/roof_type';
import PostCodeScr from './components/postcodeScreen';
import NewBoilerPlace from './components/new_boiler_place';

export default function BoilerQuoteService(props: any) {

    const customProps = props;

    const allRadioValues = ['lpg', 'other_boiler', 'gas', 'combi_boiler', 'regular_boiler', 'system_boiler',
        'back_boiler', 'combi_boiler_r', 'regular_boiler_r', 'system_boiler_r', 'no_new_loc', 'yes_new_loc',
        'no_boiler_working', 'yes_boiler_working', 'wall_mounted', 'floor_mounted', 'semi_detached', 'detached',
        'terraced', 'bungalow', 'flat_apart', 'one_bed', 'two_bed', 'three_bed', 'four_bed', 'five_plus_bed',
        'two_bathtubs', 'three_plus_bathtubs', 'one_bathtubs', 'no_bathtubs', 'rad_0_5', 'rad_6_9', 'rad_10_13', 'red_14_16',
        'rad_17_plus', 'no_shower_cubicles', 'one_shower_cubicle', 'two_plus_shower_cubicles', 'external_wall', 'roof',
        'pitched', 'flat', 'same_room', 'same_floor', 'another_floor', 'other_place',
    ];

    const [isRadioVal, setRadioVal] = useState('');
    const [isStart, setIsStart]: any = useState('');
    const [calQuote, setCalQuote]: any = useState(false);

    const handleChangeRadio = (e: any) => {
        setRadioVal(e.target.value);
    }

    const handleStart = () => {
        setIsStart('start');
    }

    const handleRestart = () => {
        setRadioVal('');
        setIsStart('start');
    }

    return (
        <div className='boiler-quote-main'>
            <Formik
                initialValues={{

                }}
                onSubmit={async (values: any) => {
                    props.handleQuote(values, true);
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form autoComplete='off'>
                        {isStart === 'start' ? null :
                            <GetStarted handleStart={handleStart} />
                        }

                        {isStart === 'start' &&
                            !allRadioValues.includes(isRadioVal) &&
                            <BoilerSection1 setFieldValue={setFieldValue} {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['other_place', 'lpg'].includes(isRadioVal) &&
                            <BoilerSection2 {...props} handleRestart={handleRestart} />
                        }

                        {['other_boiler', 'regular_boiler_r', 'system_boiler_r'].includes(isRadioVal) &&
                            <RestartSection {...props} handleRestart={handleRestart} />
                        }

                        {isRadioVal === 'gas' &&
                            <BoilerType {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['combi_boiler', 'regular_boiler', 'system_boiler', 'back_boiler'].includes(isRadioVal) &&
                            <ReplaceBoiler {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['combi_boiler_r'].includes(isRadioVal) &&
                            <NewLocationBoiler {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['no_new_loc'].includes(isRadioVal) &&
                            <WallMounted {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['yes_new_loc'].includes(isRadioVal) &&
                            <NewBoilerPlace {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['wall_mounted', 'floor_mounted', 'same_room', 'same_floor', 'another_floor'].includes(isRadioVal) &&
                            <WorkingBoiler {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['yes_boiler_working', 'no_boiler_working'].includes(isRadioVal) &&
                            <PropertyType {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['semi_detached', 'detached', 'terraced', 'bungalow', 'flat_apart'].includes(isRadioVal) &&
                            <HowManyBedrooms {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['one_bed', 'two_bed', 'three_bed', 'four_bed', 'five_plus_bed'].includes(isRadioVal) &&
                            <Radiators {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['rad_0_5', 'rad_6_9', 'rad_10_13', 'red_14_16', 'rad_17_plus'].includes(isRadioVal) &&
                            <Bathtubs {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['no_bathtubs', 'one_bathtubs', 'two_bathtubs', 'three_plus_bathtubs'].includes(isRadioVal) &&
                            <ShowerCubicles {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['no_shower_cubicles', 'two_plus_shower_cubicles', 'one_shower_cubicle'].includes(isRadioVal) &&
                            <FlueExit {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['roof'].includes(isRadioVal) &&
                            <RoofType {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['pitched', 'flat', 'external_wall'].includes(isRadioVal) &&
                            // !calQuote &&
                            <PostCodeScr {...props} />
                        }

                        {/* {calQuote &&
                            <QuoteResult />
                        } */}

                        {/* <button type='submit'>Submit</button> */}
                    </Form>
                )}
            </Formik>

        </div>
    )
}
