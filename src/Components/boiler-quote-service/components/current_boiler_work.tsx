import '../index.css'
import { Field } from 'formik';
import CrossIcon from '../../../Assets/cross.svg';
import TickIcon from '../../../Assets/tick.svg';

export default function CurrentBoilerWorking(props: any) {
    return (
        <>
            <h3>Is your current boiler working?</h3>
            <div className='quote-options'>
                <Field
                    name="current_boiler_working"
                    render={({ field }: any) => (
                        <>
                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="yes_boiler_working"
                                    value="yes_boiler_working"
                                    checked={field.value === 'yes_boiler_working'}
                                    name="current_boiler_working"
                                    type="radio"
                                    onChange={(e) => props.handleChangeRadio(e)}
                                />
                                <label htmlFor="yes_boiler_working" className='quote-options-label quote-cc'>
                                    <img src={TickIcon} alt='Yes' />
                                    <span>Yes, I do</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="no_boiler_working"
                                    value="no_boiler_working"
                                    checked={field.value === 'no_boiler_working'}
                                    name="current_boiler_working"
                                    type="radio"
                                    onChange={(e) => props.handleChangeRadio(e)}
                                />
                                <label htmlFor="no_boiler_working" className='quote-options-label quote-cc'>
                                    <img src={CrossIcon} alt='No' />
                                    <span>No, I don't</span>
                                </label>
                            </div>


                        </>
                    )}
                />
            </div>
        </>
    )
}