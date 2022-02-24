import '../index.css'
import { Field } from 'formik';
import CrossIcon from '../../../Assets/cross.svg';
import TickIcon from '../../../Assets/tick.svg';

export default function BoilerFirst(props: any) {
    return (
        <>
            <h3>Great, do you want your boiler in a new location?</h3>
            <div className='quote-options'>
                <Field
                    name="boiler_new_location"
                    render={({ field }: any) => (
                        <>
                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="no_new_loc"
                                    value="no_new_loc"
                                    checked={field.value === 'no_new_loc'}
                                    name="boiler_new_location"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('boiler_new_location', e.target.value)
                                    }}
                                />
                                <label htmlFor="no_new_loc" className='quote-options-label quote-cc'>
                                    <img src={CrossIcon} alt='No' />
                                    <span>No, I don't</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="yes_new_loc"
                                    value="yes_new_loc"
                                    checked={field.value === 'yes_new_loc'}
                                    name="boiler_new_location"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('boiler_new_location', e.target.value)
                                    }}
                                />
                                <label htmlFor="yes_new_loc" className='quote-options-label quote-cc'>
                                    <img src={TickIcon} alt='Yes' />
                                    <span>Yes, I do</span>
                                </label>
                            </div>
                        </>
                    )}
                />
            </div>
        </>
    )
}