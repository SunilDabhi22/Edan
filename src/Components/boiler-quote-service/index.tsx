import { useState } from 'react'
import './index.css'
import { Formik, Form, Field, FormikConfig, FormikValues } from 'formik';
import React from 'react'
import { GasIcon } from '../../SharedComponents/sharedIcons'
import RightArrowIcon from '../../Assets/right-arrow.png';
import ChatSupportIcon from '../../Assets/chat-support.png';
import PhoneIcon from '../../Assets/phone.png';
import CrossIcon from '../../Assets/cross.svg';
import TickIcon from '../../Assets/tick.svg';

export default function BoilerQuoteService(props: any) {

    const [isRadioVal, setRadioVal] = useState('');

    const handleChangeRadio = (e: any) => {
        setRadioVal(e.target.value);
    }

    const handleChangeRadioSec = (e: any) => {
        setRadioVal(e.target.value);
    }


    return (
        <div className='boiler-quote-main'>
            <FormikStepper
                initialValues={{
                    fuel_power: ''
                }}
                onSubmit={async (values) => {
                    console.log('values', values);
                }}
            >
                <FormikStep validationSchema={{}}>
                    <div className="quote-start-step">
                        <h3>Let's find you a boiler</h3>
                        <p>Not just any boiler — the perfect boiler. One that's right for<br /> your home, at a fixed online price, with installation included.</p>
                    </div>
                </FormikStep>
                <FormikStep validationSchema={{}}>
                    <h3>Which fuel powers your boiler?</h3>
                    <div className='quote-options'>
                        <Field name='Mains Gas'
                            render={({ field }: any) => (
                                <>
                                    <div className="radio-item">
                                        <input
                                            {...field}
                                            id="gas"
                                            value="gas"
                                            name="fuel_power"
                                            type="radio"
                                            onChange={(e) => handleChangeRadio(e)}

                                        />
                                        <label className='quote-options-label quote-cc' htmlFor="gas">
                                            <GasIcon />
                                            <span>Mains Gas</span>
                                        </label>
                                    </div>

                                    <div className="radio-item">
                                        <input
                                            {...field}
                                            id="lpg"
                                            value="lpg"
                                            name="fuel_power"
                                            onChange={(e) => handleChangeRadio(e)}
                                            type="radio"
                                        />
                                        <label className='quote-options-label quote-cc' htmlFor="lpg">
                                            <GasIcon />
                                            <span>LPG</span>
                                        </label>
                                    </div>

                                    <div className="radio-item">
                                        <input
                                            {...field}
                                            id="other"
                                            value="other"
                                            onChange={(e) => handleChangeRadio(e)}
                                            name="fuel_power"
                                            type="radio"
                                        />
                                        <label className='quote-options-label quote-cc' htmlFor="other">
                                            <GasIcon />
                                            <span>Other</span>
                                        </label>
                                    </div>
                                </>
                            )}
                        />
                    </div>
                </FormikStep>
                {isRadioVal !== 'lpg' &&
                    <FormikStep validationSchema={{}}>
                        <h3>What type of boiler do you currently have?</h3>
                        <div className='quote-options'>
                            <Field name='current_boiler'
                                render={({ field }: any) => (
                                    <>
                                        <div className="radio-item">
                                            <input
                                                {...field}
                                                id="combi"
                                                value="combi"
                                                name="current_boiler"
                                                type="radio"
                                                onChange={(e) => handleChangeRadioSec(e)}

                                            />
                                            <label className='quote-options-label quote-cc' htmlFor="combi">
                                                <GasIcon />
                                                <span>Combi Boiler</span>
                                            </label>
                                        </div>

                                        <div className="radio-item">
                                            <input
                                                {...field}
                                                id="regular"
                                                value="regular"
                                                name="current_boiler"
                                                type="radio"
                                                onChange={(e) => handleChangeRadioSec(e)}
                                            />
                                            <label className='quote-options-label quote-cc' htmlFor="regular">
                                                <GasIcon />
                                                <span>Regular Boiler</span>
                                            </label>
                                        </div>

                                        <div className="radio-item">
                                            <input
                                                {...field}
                                                id="system"
                                                value="system"
                                                name="current_boiler"
                                                type="radio"
                                                onChange={(e) => handleChangeRadioSec(e)}
                                            />
                                            <label className='quote-options-label quote-cc' htmlFor="system">
                                                <GasIcon />
                                                <span>System Boiler</span>
                                            </label>
                                        </div>

                                        <div className="radio-item">
                                            <input
                                                {...field}
                                                id="back_boiler"
                                                value="back_boiler"
                                                name="current_boiler"
                                                type="radio"
                                                onChange={(e) => handleChangeRadioSec(e)}
                                            />
                                            <label className='quote-options-label quote-cc' htmlFor="back_boiler">
                                                <GasIcon />
                                                <span>Back Boiler</span>
                                            </label>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                    </FormikStep>
                }
                {isRadioVal === 'lpg' &&
                    <FormikStep validationSchema={{}}>
                        <h3>Time to talk?</h3>
                        <p>Based on what you've said, we'll need to check<br /> some details through before being able to quote.</p>
                        <div className='contact-details'>
                            <div className='phone-info'>
                                <img src={PhoneIcon} />
                                <div>
                                    <span>Phone us</span>
                                    <span><a href='tel:1231231231'>1234 123 1234</a></span>
                                </div>
                            </div>
                            <div className='chat-support'>
                                <img src={ChatSupportIcon} />
                                <div>
                                    <span>Live Chat</span>
                                    <span><a href='#!'>Start Chat</a></span>
                                </div>
                            </div>
                        </div>
                        <div className='contact-other-info'>
                            <p>Mon-Fri 8am-7pm, Sat 8am-4pm</p>
                        </div>
                    </FormikStep>
                }

                {isRadioVal !== 'lpg' &&
                    <FormikStep validationSchema={{}}>
                        <h3>What type of boiler do you want to replace it with?</h3>
                        <div className='quote-options'>
                            <Field name='current_boiler'
                                render={({ field }: any) => (
                                    <>
                                        <div className="radio-item">
                                            <input
                                                {...field}
                                                id="combi"
                                                value="combi"
                                                name="current_boiler"
                                                type="radio"
                                                onChange={(e) => handleChangeRadioSec(e)}

                                            />
                                            <label className='quote-options-label quote-cc' htmlFor="combi">
                                                <GasIcon />
                                                <span>Combi Boiler</span>
                                            </label>
                                        </div>

                                        <div className="radio-item">
                                            <input
                                                {...field}
                                                id="regular"
                                                value="regular"
                                                name="current_boiler"
                                                type="radio"
                                                onChange={(e) => handleChangeRadioSec(e)}
                                            />
                                            <label className='quote-options-label quote-cc' htmlFor="regular">
                                                <GasIcon />
                                                <span>Regular Boiler</span>
                                            </label>
                                        </div>

                                        <div className="radio-item">
                                            <input
                                                {...field}
                                                id="system"
                                                value="system"
                                                name="current_boiler"
                                                type="radio"
                                                onChange={(e) => handleChangeRadioSec(e)}
                                            />
                                            <label className='quote-options-label quote-cc' htmlFor="system">
                                                <GasIcon />
                                                <span>System Boiler</span>
                                            </label>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                    </FormikStep>
                }

                {isRadioVal !== 'lpg' &&
                    <FormikStep validationSchema={{}}>
                        <h3>Great, do you want your boiler in a new location?</h3>
                        <div className='quote-options'>
                            <Field name='current_boiler'
                                render={({ field }: any) => (
                                    <>
                                        <div className="radio-item">
                                            <input
                                                {...field}
                                                id="combi"
                                                value="combi"
                                                name="current_boiler"
                                                type="radio"
                                                onChange={(e) => handleChangeRadioSec(e)}

                                            />
                                            <label className='quote-options-label quote-cc' htmlFor="combi">
                                                <img src={CrossIcon} />
                                                <span>No, I don't</span>
                                            </label>
                                        </div>

                                        <div className="radio-item">
                                            <input
                                                {...field}
                                                id="regular"
                                                value="regular"
                                                name="current_boiler"
                                                type="radio"
                                                onChange={(e) => handleChangeRadioSec(e)}
                                            />
                                            <label className='quote-options-label quote-cc' htmlFor="regular">
                                                <img src={TickIcon} />
                                                <span>Yes, I do</span>
                                            </label>
                                        </div>
                                    </>
                                )}
                            />
                        </div>
                    </FormikStep>
                }

            </FormikStepper>
        </div>
    )
}


export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {

}

export function FormikStep({ children }: FormikStepProps) {
    return <>{children}</>
}

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {

    const childrenArray = React.Children.toArray(children);

    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step] as React.ElementType<FormikStepProps>[];

    function isLastStep() {
        return step === childrenArray.length - 1;
    }

    return (
        <Formik
            {...props}
            onSubmit={async (values, helpers) => {
                if (isLastStep()) {
                    await props.onSubmit(values, helpers);
                } else {
                    setStep(s => s + 1)
                }
            }}
        >
            {({ values, setFieldValue }) => (
                <Form autoComplete='off'>
                    {currentChild}
                    {step > 0 ? <button className='back_btn' type='button' onClick={() => setStep(s => s - 1)}>Back</button> : null}
                    {step === 0 ?
                        <button className='submit_btn' type='submit'>
                            {isLastStep() ? 'Submit' : 'Get Started'} <img src={RightArrowIcon} />
                        </button>
                        :
                        <button className='submit_btn' type='submit'>
                            {isLastStep() ? 'Submit' : 'Next'}
                        </button>
                    }
                </Form>
            )}
        </Formik>
    )
}