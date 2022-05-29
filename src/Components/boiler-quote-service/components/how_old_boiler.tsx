import '../index.css'
import { Field } from 'formik';
import CrossImg from '../../../Assets/cross.svg';
import firstImg from '../assets/age-33.svg';
import secondImg from '../assets/age-4.svg';
import thirdImg from '../assets/age-12.svg';
import fourthImg from '../assets/age-5.svg';
import fiveImg from '../assets/other.svg';

export default function HowOldExistingBoiler(props: any) {
    return (
        <>
            <h3>Roughly, how old is your existing boiler?</h3>
            <div className='quote-options'>
                <Field
                    name="how_old_boiler"
                    render={({ field }: any) => (
                        <>
                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="twenty_five_plus"
                                    value="twenty_five_plus"
                                    checked={field.value === 'twenty_five_plus'}
                                    name="how_old_boiler"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('how_old_boiler', e.target.value)
                                    }}
                                />
                                <label htmlFor="twenty_five_plus" className='quote-options-label quote-cc'>
                                    <img src={firstImg} alt='25+ years' />
                                    <span>25+ years</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="twenty_to_twenty_five_plus"
                                    value="twenty_to_twenty_five_plus"
                                    checked={field.value === 'twenty_to_twenty_five_plus'}
                                    name="how_old_boiler"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('how_old_boiler', e.target.value)
                                    }}
                                />
                                <label htmlFor="twenty_to_twenty_five_plus" className='quote-options-label quote-cc'>
                                    <img src={secondImg} alt='25+ years' />
                                    <span>20-25 years</span>
                                </label>
                            </div>


                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="ten_to_twenty_plus"
                                    value="ten_to_twenty_plus"
                                    checked={field.value === 'ten_to_twenty_plus'}
                                    name="how_old_boiler"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('how_old_boiler', e.target.value)
                                    }}
                                />
                                <label htmlFor="ten_to_twenty_plus" className='quote-options-label quote-cc'>
                                    <img src={thirdImg} alt='10-20 years' />
                                    <span>10-20 years</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="zero_to_ten_plus"
                                    value="zero_to_ten_plus"
                                    checked={field.value === 'zero_to_ten_plus'}
                                    name="how_old_boiler"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('how_old_boiler', e.target.value)
                                    }}
                                />
                                <label htmlFor="zero_to_ten_plus" className='quote-options-label quote-cc'>
                                    <img src={fourthImg} alt='0-10 years' />
                                    <span>0-10 years</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="unsure_years"
                                    value="unsure_years"
                                    checked={field.value === 'unsure_years'}
                                    name="how_old_boiler"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('how_old_boiler', e.target.value)
                                    }}
                                />
                                <label htmlFor="unsure_years" className='quote-options-label quote-cc'>
                                    <img src={fiveImg} alt='Unsure' />
                                    <span>Unsure</span>
                                </label>
                            </div>

                        </>
                    )}
                />
            </div>
        </>
    )
}