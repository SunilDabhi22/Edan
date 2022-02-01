import { useState } from 'react'
import './index.css'
import { Formik, Form, Field, FormikConfig, FormikValues } from 'formik';
import React from 'react'
import { GasIcon } from '../../SharedComponents/sharedIcons'
import RightArrowIcon from '../../Assets/right-arrow.png';
import CrossIcon from '../../Assets/cross.svg';
import TickIcon from '../../Assets/tick.svg';
import WallMounted from './assets/wall-mounted.svg';
import FloorMounted from './assets/floor-mounted.svg';
import SameRoom from './assets/same-room.svg';
import SameFloor from './assets/same-floor.svg';
import OtherFloor from './assets/other-floor.svg';
import OtherRoom from './assets/other-room.svg';

import GetStarted from './components/getStarted';
import BoilerSection1 from './components/which_boiler';
import BoilerSection2 from './components/timeToTalk';
import RestartSection from './components/restart';
import BoilerType from './components/boiler_type';

export default function BoilerQuoteService(props: any) {

    const customProps = props;

    const [isRadioVal, setRadioVal] = useState('');
    const [isStart, setIsStart]: any = useState('');

    const handleChangeRadio = (e: any) => {
        console.log(e, "eeee")
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
                    boiler_type:''
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

                        {isStart === 'start' && isRadioVal !== 'lpg' && isRadioVal !== 'other_boiler' &&
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
                        {/* <button type='submit'>Submit</button> */}
                    </Form>
                )}
            </Formik>

        </div>
    )
}
