import '../index.css'
import { Field } from 'formik';
import CombiBoiler from '../assets/combi-boiler.svg';
import RegularBoiler from '../assets/regular-boiler.svg';
import SystemBoiler from '../assets/system-boiler.svg';
import BackBoiler from '../assets/back-boiler.svg';

export default function BoilerFirst(props: any) {
    return (
        <>
            <h3>What type of boiler do you currently have?</h3>
            <div className='quote-options'>
                <Field
                    name="boiler_type"
                    render={({ field }: any) => (
                        <>
                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="combi_boiler"
                                    value="combi_boiler"
                                    checked={field.value === 'combi_boiler'}
                                    name="boiler_type"
                                    type="radio"
                                    onChange={(e) => props.handleChangeRadio(e)}
                                />
                                <label htmlFor="combi_boiler" className='quote-options-label quote-cc'>
                                    <img src={CombiBoiler} alt='Combi Boiler' />
                                    <span>Combi Boiler</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="regular_boiler"
                                    value="regular_boiler"
                                    checked={field.value === 'regular_boiler'}
                                    name="boiler_type"
                                    type="radio"
                                    onChange={(e) => props.handleChangeRadio(e)}
                                />
                                <label htmlFor="regular_boiler" className='quote-options-label quote-cc'>
                                    <img src={RegularBoiler} alt='Regular Boiler' />
                                    <span>Regular Boiler</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="system_boiler"
                                    value="system_boiler"
                                    checked={field.value === 'system_boiler'}
                                    name="boiler_type"
                                    type="radio"
                                    onChange={(e) => props.handleChangeRadio(e)}
                                />
                                <label htmlFor="system_boiler" className='quote-options-label quote-cc'>
                                    <img src={SystemBoiler} alt='system boiler' />
                                    <span>System Boiler</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="back_boiler"
                                    value="back_boiler"
                                    checked={field.value === 'back_boiler'}
                                    name="boiler_type"
                                    type="radio"
                                    onChange={(e) => props.handleChangeRadio(e)}
                                />
                                <label htmlFor="back_boiler" className='quote-options-label quote-cc'>
                                    <img src={BackBoiler} alt='other' />
                                    <span>Back Boiler</span>
                                </label>
                            </div>
                        </>
                    )}
                />
            </div>
        </>
    )
}