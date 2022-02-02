import '../index.css'
import RightArrowIcon from '../../../Assets/right-arrow.png';
import { Field } from 'formik';

export default function getStarted(props: any) {

    return (
        <div className="quote-start-step">
            <h3>Lastly, what's your postcode?</h3>
            <p>We only need the first part right now, not the full postcode.</p>
            <Field
                name="postcode"
                render={({ field /* { name, value, onChange, onBlur } */ }: any) => (
                    <input {...field} type="text" className='postcode_input' placeholder="e.g SW5" />
                )}
            />
            <button type='button' className='submit_btn'>
                Next <img src={RightArrowIcon} />
            </button>
        </div>
    )
}