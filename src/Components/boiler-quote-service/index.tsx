import { useState } from 'react'
import './index.css'
import { Formik, Form, Field, FormikConfig, FormikValues } from 'formik';
import React from 'react'
import { GasIcon } from '../../SharedComponents/sharedIcons'
import RightArrowIcon from '../../Assets/right-arrow.png';
import SameRoom from './assets/same-room.svg';
import SameFloor from './assets/same-floor.svg';
import OtherFloor from './assets/other-floor.svg';
import OtherRoom from './assets/other-room.svg';

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

export default function BoilerQuoteService(props: any) {

    const customProps = props;

    const allRadioValues = ['lpg', 'other_boiler', 'gas', 'combi_boiler', 'regular_boiler', 'system_boiler',
        'back_boiler', 'combi_boiler_r', 'regular_boiler_r', 'system_boiler_r', 'no_new_loc', 'yes_new_loc',
        'no_boiler_working', 'yes_boiler_working', 'wall_mounted', 'floor_mounted', 'semi_detached', 'detached',
        'terraced', 'bungalow', 'flat_apart', 'one_bed', 'two_bed', 'three_bed', 'four_bed', 'five_plus_bed',
        'two_bathtubs', 'three_plus_bathtubs', 'one_bathtubs', 'no_bathtubs', 'rad_0_5', 'rad_6_9', 'rad_10_13', 'red_14_16', 'rad_17_plus',
    ];

    const [isRadioVal, setRadioVal] = useState('');
    const [isStart, setIsStart]: any = useState('');

    const handleChangeRadio = (e: any) => {
        setRadioVal(e.target.value);
    }

    const handleStart = () => {
        setIsStart('start');
    }

    const handleRestart = () => {
        setRadioVal('');
        setIsStart('');
    }

    return (
        <div className='boiler-quote-main'>
            <Formik
                initialValues={{
                    fuel_power: '',
                    boiler_type: ''
                }}
                onSubmit={async (values: any) => {
                    console.log('values', values);
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form autoComplete='off'>
                        {isStart === 'start' ? null :
                            <GetStarted handleStart={handleStart} />
                        }

                        {isStart === 'start' &&
                            !allRadioValues.includes(isRadioVal) &&
                            <BoilerSection1 {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {isRadioVal === 'lpg' &&
                            <BoilerSection2 {...props} handleRestart={handleRestart} />
                        }

                        {isRadioVal === 'other_boiler' &&
                            <RestartSection {...props} handleRestart={handleRestart} />
                        }

                        {isRadioVal === 'gas' &&
                            <BoilerType {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['combi_boiler', 'regular_boiler', 'system_boiler', 'back_boiler'].includes(isRadioVal) &&
                            <ReplaceBoiler {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['combi_boiler_r', 'regular_boiler_r', 'system_boiler_r'].includes(isRadioVal) &&
                            <NewLocationBoiler {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['no_new_loc'].includes(isRadioVal) &&
                            <WallMounted {...props} handleChangeRadio={handleChangeRadio} />
                        }

                        {['wall_mounted', 'floor_mounted'].includes(isRadioVal) &&
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

                        {/* <button type='submit'>Submit</button> */}
                    </Form>
                )}
            </Formik>

        </div>
    )
}
