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
            <h3>Sorry, we can't help.</h3>
            <p>We aren't able to help with that type of install right now.</p>

            <button type='button' className='refresh_btn_dark' onClick={props.handleRestart}><RefreshIcon /> Restart</button>
        </>
    )
}