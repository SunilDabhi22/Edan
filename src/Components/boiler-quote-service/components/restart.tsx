import '../index.css'
import { RefreshIcon } from '../../../SharedComponents/sharedIcons'

export default function ContactInfo(props: any) {
    return (
        <>
            <h3>Sorry, we can't help.</h3>
            <p>We aren't able to help with that type of install right now.</p>

            <button type='button' className='refresh_btn_dark' onClick={props.handleRestart}><RefreshIcon /> Restart</button>
        </>
    )
}