import '../index.css'
import RightArrowIcon from '../../../Assets/right-arrow.png';
import { Formik, Form, Field, FormikConfig, FormikValues } from 'formik';
import { GasIcon, RefreshIcon } from '../../../SharedComponents/sharedIcons'
import LPGImg from '../assets/lpg.svg';
import OtherImg from '../assets/other.svg';
import PhoneIcon from '../../../Assets/phone.png';
import ChatSupportIcon from '../../../Assets/chat-support.png';

export default function ContactInfo(props: any) {
    return (
        <>
            <h3>Time to talk?</h3>
            <p>Based on what you've said, we'll need to check<br /> some details through before being able to quote.</p>
            <div className='contact-details'>
                <div className='phone-info'>
                    <img src={PhoneIcon} />
                    <div>
                        <span>Phone us</span>
                        <span><a href='tel:1231231231'>1234 123 1234</a></span>
                    </div>
                </div>
                <div className='chat-support'>
                    <img src={ChatSupportIcon} />
                    <div>
                        <span>Live Chat</span>
                        <span><a href='#!'>Start Chat</a></span>
                    </div>
                </div>
            </div>
            <div className='contact-other-info'>
                <p>Mon-Fri 8am-7pm, Sat 8am-4pm</p>
            </div>

            <button type='button' className='refresh_btn' onClick={props.handleRestart}><RefreshIcon /> Restart</button>
        </>
    )
}