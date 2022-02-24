import '../index.css'
import { Field } from 'formik';
import CrossImg from '../../../Assets/cross.svg';
import OneBathtub from '../assets/bath-1.svg';
import TwoBathtubs from '../assets/bath-2.svg';
import ThreeBathtubs from '../assets/bath-3.svg';

export default function Bathtubs(props: any) {
    return (
        <>
            <h3>How many bathtubs does it have?</h3>
            <div className='quote-options'>
                <Field
                    name="bathtubs"
                    render={({ field }: any) => (
                        <>
                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="no_bathtubs"
                                    value="no_bathtubs"
                                    checked={field.value === 'no_bathtubs'}
                                    name="bathtubs"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('bathtubs', e.target.value)
                                    }}
                                />
                                <label htmlFor="no_bathtubs" className='quote-options-label quote-cc'>
                                    <img src={CrossImg} alt='No Bathtubs' />
                                    <span>No Bathtubs</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="one_bathtubs"
                                    value="one_bathtubs"
                                    checked={field.value === 'one_bathtubs'}
                                    name="bathtubs"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('bathtubs', e.target.value)
                                    }}
                                />
                                <label htmlFor="one_bathtubs" className='quote-options-label quote-cc'>
                                    <img src={OneBathtub} alt='One Bathtubs' />
                                    <span>One Bathtub</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="two_bathtubs"
                                    value="two_bathtubs"
                                    checked={field.value === 'two_bathtubs'}
                                    name="bathtubs"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('bathtubs', e.target.value)
                                    }}
                                />
                                <label htmlFor="two_bathtubs" className='quote-options-label quote-cc'>
                                    <img src={TwoBathtubs} alt='Two Bathtubs' />
                                    <span>Two Bathtubs</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="three_plus_bathtubs"
                                    value="three_plus_bathtubs"
                                    checked={field.value === 'three_plus_bathtubs'}
                                    name="bathtubs"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('bathtubs', e.target.value)
                                    }}
                                />
                                <label htmlFor="three_plus_bathtubs" className='quote-options-label quote-cc'>
                                    <img src={ThreeBathtubs} alt='Three Bathtubs' />
                                    <span>Three+ Bathtubs</span>
                                </label>
                            </div>
                        </>
                    )}
                />
            </div>
        </>
    )
}