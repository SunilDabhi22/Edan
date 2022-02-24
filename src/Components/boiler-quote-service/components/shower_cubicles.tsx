import '../index.css'
import { Field } from 'formik';
import ShowerOne from '../assets/shower-1.svg';
import ShowerTwo from '../assets/shower-2.svg';
import CrossImg from '../../../Assets/cross.svg';

export default function ShowerCubicles(props: any) {
    return (
        <>
            <h3>How many separate shower cubicles does it have?</h3>
            <div className='quote-options'>
                <Field
                    name="shower_cubicles"
                    render={({ field }: any) => (
                        <>
                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="no_shower_cubicles"
                                    value="no_shower_cubicles"
                                    checked={field.value === 'no_shower_cubicles'}
                                    name="shower_cubicles"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('shower_cubicles', e.target.value)
                                    }}
                                />
                                <label htmlFor="no_shower_cubicles" className='quote-options-label quote-cc'>
                                    <img src={CrossImg} alt='No Shower Cubicles' />
                                    <span>No Shower Cubicles</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="one_shower_cubicle"
                                    value="one_shower_cubicle"
                                    checked={field.value === 'one_shower_cubicle'}
                                    name="shower_cubicles"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('shower_cubicles', e.target.value)
                                    }}
                                />
                                <label htmlFor="one_shower_cubicle" className='quote-options-label quote-cc'>
                                    <img src={ShowerOne} alt='One Shower Cubicle' />
                                    <span>One Shower Cubicle</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="two_plus_shower_cubicles"
                                    value="two_plus_shower_cubicles"
                                    checked={field.value === 'two_plus_shower_cubicles'}
                                    name="shower_cubicles"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('shower_cubicles', e.target.value)
                                    }}
                                />
                                <label htmlFor="two_plus_shower_cubicles" className='quote-options-label quote-cc'>
                                    <img src={ShowerTwo} alt='Two+ Shower Cubicles' />
                                    <span>Two+ Shower Cubicles</span>
                                </label>
                            </div>
                        </>
                    )}
                />
            </div>
        </>
    )
}