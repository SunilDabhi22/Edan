import '../index.css'
import { Field } from 'formik';
import ExternalWall from '../assets/horizontal-flue.svg';
import Roof from '../assets/vertical-flue.svg';

export default function FlueExit(props: any) {
    return (
        <>
            <h3>Where does your boiler's flue exit your home?</h3>
            <div className='quote-options'>
                <Field
                    name="flue_exit"
                    render={({ field }: any) => (
                        <>
                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="external_wall"
                                    value="external_wall"
                                    checked={field.value === 'external_wall'}
                                    name="flue_exit"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('flue_exit', e.target.value)
                                    }}
                                />
                                <label htmlFor="external_wall" className='quote-options-label quote-cc'>
                                    <img src={ExternalWall} alt='External Wall' />
                                    <span>External Wall</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="roof"
                                    value="roof"
                                    checked={field.value === 'roof'}
                                    name="flue_exit"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('flue_exit', e.target.value)
                                    }}
                                />
                                <label htmlFor="roof" className='quote-options-label quote-cc'>
                                    <img src={Roof} alt='Roof' />
                                    <span>Roof</span>
                                </label>
                            </div>
                        </>
                    )}
                />
            </div>
        </>
    )
}