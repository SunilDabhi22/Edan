import '../index.css'
import { Field } from 'formik';
import SemiDetached from '../assets/semi-detached.svg';
import Detached from '../assets/detached.svg';
import Terraced from '../assets/mid-terrace.svg';
import Bungalow from '../assets/bungalow.svg';
import FlatApartment from '../assets/flat.svg';

export default function BoilerFirst(props: any) {
    return (
        <>
            <h3>What type of property do you have?</h3>
            <div className='quote-options'>
                <Field
                    name="property_type"
                    render={({ field }: any) => (
                        <>
                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="semi_detached"
                                    value="semi_detached"
                                    checked={field.value === 'semi_detached'}
                                    name="property_type"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('property_type', e.target.value)
                                    }}
                                />
                                <label htmlFor="semi_detached" className='quote-options-label quote-cc'>
                                    <img src={SemiDetached} alt='Semi Detached' />
                                    <span>Semi-Detached</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="detached"
                                    value="detached"
                                    checked={field.value === 'detached'}
                                    name="property_type"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('property_type', e.target.value)
                                    }}
                                />
                                <label htmlFor="detached" className='quote-options-label quote-cc'>
                                    <img src={Detached} alt='Detached' />
                                    <span>Detached</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="terraced"
                                    value="terraced"
                                    checked={field.value === 'terraced'}
                                    name="property_type"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('property_type', e.target.value)
                                    }}
                                />
                                <label htmlFor="terraced" className='quote-options-label quote-cc'>
                                    <img src={Terraced} alt='terraced' />
                                    <span>Terraced</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="bungalow"
                                    value="bungalow"
                                    checked={field.value === 'bungalow'}
                                    name="property_type"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('property_type', e.target.value)
                                    }}
                                />
                                <label htmlFor="bungalow" className='quote-options-label quote-cc'>
                                    <img src={Bungalow} alt='bungalow' />
                                    <span>Bungalow</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="flat_apart"
                                    value="flat_apart"
                                    checked={field.value === 'flat_apart'}
                                    name="property_type"
                                    type="radio"
                                    onChange={(e) => {
                                        props.handleChangeRadio(e)
                                        props.setFieldValue('property_type', e.target.value)
                                    }}
                                />
                                <label htmlFor="flat_apart" className='quote-options-label quote-cc'>
                                    <img src={FlatApartment} alt='flat_apart' />
                                    <span>Flat/Apartment</span>
                                </label>
                            </div>
                        </>
                    )}
                />
            </div>
        </>
    )
}