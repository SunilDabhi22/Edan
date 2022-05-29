import '../index.css'
import { Field } from 'formik';
import CombiBoiler from '../assets/combi-boiler.svg';
import RegularBoiler from '../assets/regular-boiler.svg';
import SystemBoiler from '../assets/system-boiler.svg';
import BackBoiler from '../assets/back-boiler.svg';

export default function BoilerFirstForBackBoiler(props: any) {
    return (
        <>
            <h3>What type of boiler do you want to replace it with?</h3>
            <div className='quote-options'>
                <Field
                    name="replace_boiler"
                    render={({ field }: any) => (
                        <>
                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="combi_boiler_r_back"
                                    value="combi_boiler_r_back"
                                    checked={field.value === 'combi_boiler_r_back'}
                                    name="replace_boiler"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('replace_boiler', e.target.value)
                                    }}
                                />
                                <label htmlFor="combi_boiler_r_back" className='quote-options-label quote-cc'>
                                    <img src={CombiBoiler} alt='Combi Boiler' />
                                    <span>Combi Boiler</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="regular_boiler_r_back"
                                    value="regular_boiler_r_back"
                                    checked={field.value === 'regular_boiler_r_back'}
                                    name="replace_boiler"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('replace_boiler', e.target.value)
                                    }}
                                />
                                <label htmlFor="regular_boiler_r_back" className='quote-options-label quote-cc'>
                                    <img src={RegularBoiler} alt='Regular Boiler' />
                                    <span>Regular Boiler</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="system_boiler_r_back"
                                    value="system_boiler_r_back"
                                    checked={field.value === 'system_boiler_r_back'}
                                    name="replace_boiler"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('replace_boiler', e.target.value)
                                    }}
                                />
                                <label htmlFor="system_boiler_r_back" className='quote-options-label quote-cc'>
                                    <img src={SystemBoiler} alt='system boiler' />
                                    <span>System Boiler</span>
                                </label>
                            </div>
                        </>
                    )}
                />
            </div>
        </>
    )
}