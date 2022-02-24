import '../index.css'
import { Field } from 'formik';
import OneBedroom from '../assets/bedroom-1.svg';
import TwoBedroom from '../assets/bedroom-2.svg';
import ThreeBedroom from '../assets/bedroom-3.svg';
import FourBedroom from '../assets/bedroom-4.svg';
import FivePlusBedroom from '../assets/bedroom-5.svg';

export default function Bedrooms(props: any) {
    return (
        <>
            <h3>How many bedrooms does it have?</h3>
            <div className='quote-options'>
                <Field
                    name="how_many_bedrooms"
                    render={({ field }: any) => (
                        <>
                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="one_bed"
                                    value="one_bed"
                                    checked={field.value === 'one_bed'}
                                    name="how_many_bedrooms"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('how_many_bedrooms', e.target.value)
                                    }}
                                />
                                <label htmlFor="one_bed" className='quote-options-label quote-cc'>
                                    <img src={OneBedroom} alt='One Bed' />
                                    <span>One</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="two_bed"
                                    value="two_bed"
                                    checked={field.value === 'two_bed'}
                                    name="how_many_bedrooms"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('how_many_bedrooms', e.target.value)
                                    }}
                                />
                                <label htmlFor="two_bed" className='quote-options-label quote-cc'>
                                    <img src={TwoBedroom} alt='Two Bed' />
                                    <span>Two</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="three_bed"
                                    value="three_bed"
                                    checked={field.value === 'three_bed'}
                                    name="how_many_bedrooms"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('how_many_bedrooms', e.target.value)
                                    }}
                                />
                                <label htmlFor="three_bed" className='quote-options-label quote-cc'>
                                    <img src={ThreeBedroom} alt='Three Bed' />
                                    <span>Three</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="four_bed"
                                    value="four_bed"
                                    checked={field.value === 'four_bed'}
                                    name="how_many_bedrooms"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('how_many_bedrooms', e.target.value)
                                    }}
                                />
                                <label htmlFor="four_bed" className='quote-options-label quote-cc'>
                                    <img src={FourBedroom} alt='Four Bed' />
                                    <span>Four</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="five_plus_bed"
                                    value="five_plus_bed"
                                    checked={field.value === 'five_plus_bed'}
                                    name="how_many_bedrooms"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('how_many_bedrooms', e.target.value)
                                    }}
                                />
                                <label htmlFor="five_plus_bed" className='quote-options-label quote-cc'>
                                    <img src={FivePlusBedroom} alt='five_plus_bed' />
                                    <span>Five+</span>
                                </label>
                            </div>
                        </>
                    )}
                />
            </div>
        </>
    )
}