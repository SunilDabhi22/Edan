import '../index.css'
import RightArrowIcon from '../../../Assets/right-arrow.png';
import { Field } from 'formik';

export default function CalculateQuote(props: any) {

    return (
        <div className="quote-start-step">
            <h3>Lastly, what's your postcode?</h3>
            <p>We only need the first part right now, not the full postcode.</p>
            <Field
                name="postcode"
                render={({ field /* { name, value, onChange, onBlur } */ }: any) => (
                    <input {...field} type="text" onChange={(e) => {
                        props.setFieldValue('postcode', e.target.value)
                    }} className='postcode_input' placeholder="e.g SW5" />
                )}
            />
            <button type='submit' className='submit_btn'>
                Calculate my quotes <img src={RightArrowIcon} />
            </button>
        </div>
    )
}