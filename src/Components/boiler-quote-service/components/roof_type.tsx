import '../index.css'
import { Field } from 'formik';
import PitchedImg from '../assets/pitched-exit.svg';
import FlatImg from '../assets/flat-exit.svg';

export default function RoofType(props: any) {
    return (
        <>
            <h3>What type of roof does your flue go through?</h3>
            <div className='quote-options'>
                <Field
                    name="roof_type"
                    render={({ field }: any) => (
                        <>
                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="pitched"
                                    value="pitched"
                                    checked={field.value === 'pitched'}
                                    name="roof_type"
                                    type="radio"
                                    onChange={(e) => props.handleChangeRadio(e)}
                                />
                                <label htmlFor="pitched" className='quote-options-label quote-cc'>
                                    <img src={PitchedImg} alt='Pitched' />
                                    <span>Pitched</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="flat"
                                    value="flat"
                                    checked={field.value === 'flat'}
                                    name="roof_type"
                                    type="radio"
                                    onChange={(e) => props.handleChangeRadio(e)}
                                />
                                <label htmlFor="flat" className='quote-options-label quote-cc'>
                                    <img src={FlatImg} alt='flat' />
                                    <span>Flat</span>
                                </label>
                            </div>
                        </>
                    )}
                />
            </div>
        </>
    )
}