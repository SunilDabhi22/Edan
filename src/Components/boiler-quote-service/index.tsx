import { useState } from 'react'
import './index.css'
import { Formik, Form, Field, FormikConfig, FormikValues } from 'formik';
import React from 'react'
import { GasIcon } from '../../SharedComponents/sharedIcons'
import RightArrowIcon from '../../Assets/right-arrow.png';
import ChatSupportIcon from '../../Assets/chat-support.png';
import PhoneIcon from '../../Assets/phone.png';
import CrossIcon from '../../Assets/cross.svg';
import TickIcon from '../../Assets/tick.svg';
import LPGImg from './assets/lpg.svg';
import OtherImg from './assets/other.svg';
import CombiBoiler from './assets/combi-boiler.svg';
import RegularBoiler from './assets/regular-boiler.svg';
import SystemBoiler from './assets/system-boiler.svg';
import BackBoiler from './assets/back-boiler.svg';
import WallMounted from './assets/wall-mounted.svg';
import FloorMounted from './assets/floor-mounted.svg';
import SameRoom from './assets/same-room.svg';
import SameFloor from './assets/same-floor.svg';
import OtherFloor from './assets/other-floor.svg';
import OtherRoom from './assets/other-room.svg';

export default function BoilerQuoteService(props: any) {

    const [isRadioVal, setRadioVal] = useState('');

    const handleChangeRadio = (e: any) => {
        setRadioVal(e.target.value);
    }

    const handleChangeRadioSec = (e: any) => {
        setRadioVal(e.target.value);
    }


    return (
        <div className='boiler-quote-main'>
            <Formik
                initialValues={{
                    fuel_power: ''
                }}
                onSubmit={(values: any) => {
                    console.log('values', values);
                }}
            >
                <form>

                </form>
            </Formik>

        </div>
    )
}
