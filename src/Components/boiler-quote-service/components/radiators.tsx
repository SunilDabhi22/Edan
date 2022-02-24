import '../index.css'
import { Field } from 'formik';
import RadiatorsImg from '../assets/radiator.svg';

export default function Radiators(props: any) {
    return (
        <>
            <h3>How many radiators does it have?</h3>
            <div className='quote-options'>
                <Field
                    name="radiators"
                    render={({ field }: any) => (
                        <>
                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="rad_0_5"
                                    value="rad_0_5"
                                    checked={field.value === 'rad_0_5'}
                                    name="radiators"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('radiators', e.target.value)
                                    }}
                                />
                                <label htmlFor="rad_0_5" className='quote-options-label quote-cc'>
                                    <img src={RadiatorsImg} alt='Radiators' />
                                    <span>0-5</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="rad_6_9"
                                    value="rad_6_9"
                                    checked={field.value === 'rad_6_9'}
                                    name="radiators"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('radiators', e.target.value)
                                    }}
                                />
                                <label htmlFor="rad_6_9" className='quote-options-label quote-cc'>
                                    <img src={RadiatorsImg} alt='Radiators' />
                                    <span>6-9</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="rad_10_13"
                                    value="rad_10_13"
                                    checked={field.value === 'rad_10_13'}
                                    name="radiators"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('radiators', e.target.value)
                                    }}
                                />
                                <label htmlFor="rad_10_13" className='quote-options-label quote-cc'>
                                    <img src={RadiatorsImg} alt='Radiators' />
                                    <span>10-13</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="red_14_16"
                                    value="red_14_16"
                                    checked={field.value === 'red_14_16'}
                                    name="radiators"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('radiators', e.target.value)
                                    }}
                                />
                                <label htmlFor="red_14_16" className='quote-options-label quote-cc'>
                                    <img src={RadiatorsImg} alt='Radiators' />
                                    <span>14-16</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="rad_17_plus"
                                    value="rad_17_plus"
                                    checked={field.value === 'rad_17_plus'}
                                    name="radiators"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('radiators', e.target.value)
                                    }}
                                />
                                <label htmlFor="rad_17_plus" className='quote-options-label quote-cc'>
                                    <img src={RadiatorsImg} alt='Radiators' />
                                    <span>17+</span>
                                </label>
                            </div>
                        </>
                    )}
                />
            </div>
        </>
    )
}