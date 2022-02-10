import '../index.css'
import RightArrowIcon from '../../../Assets/right-arrow.png';
import { Formik, Form, Field, FormikConfig, FormikValues } from 'formik';
import { GasIcon } from '../../../SharedComponents/sharedIcons'
import LPGImg from '../assets/lpg.svg';
import OtherImg from '../assets/other.svg';

export default function BoilerFirst(props: any) {
    return (
        <>
            <h3>Which fuel powers your boiler?</h3>
            <div className='quote-options'>
                <Field
                    name="fuel_power"
                    render={({ field }: any) => (
                        <>
                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="gas"
                                    value="gas"
                                    checked={field.value === 'gas'}
                                    name="fuel_power"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('fuel_power', e.target.value)
                                    }}
                                />
                                <label htmlFor="gas" className='quote-options-label quote-cc'>
                                    <GasIcon />
                                    <span>Mains Gas</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="lpg"
                                    value="lpg"
                                    checked={field.value === 'lpg'}
                                    name="fuel_power"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('fuel_power', e.target.value)
                                    }}
                                />
                                <label htmlFor="lpg" className='quote-options-label quote-cc'>
                                    <img src={LPGImg} alt='LPG' />
                                    <span>LPG</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="other_boiler"
                                    value="other_boiler"
                                    checked={field.value === 'other_boiler'}
                                    name="fuel_power"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('fuel_power', e.target.value)
                                    }}
                                />
                                <label htmlFor="other_boiler" className='quote-options-label quote-cc'>
                                    <img src={OtherImg} alt='other' />
                                    <span>Other</span>
                                </label>
                            </div>
                        </>
                    )}
                />
            </div>
        </>
    )
}