import '../index.css'
import RightArrowIcon from '../../../Assets/right-arrow.png';

export default function getStarted(props: any) {

    return (
        <div className="quote-start-step">
            <h3>Let's find you a boiler</h3>
            <p>Not just any boiler — the perfect boiler. One that's right for your home,<br /> at a fixed online price, with installation included.</p>
            <button type='button' onClick={() => props.handleStart()} className='submit_btn'>Get Started <img src={RightArrowIcon} /></button>
        </div>
    )
}