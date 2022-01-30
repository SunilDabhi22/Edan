import { useState } from 'react'
import './index.css'
import { Formik, Form, Field, FormikConfig, FormikValues } from 'formik';
import React from 'react'
import { GasIcon } from '../../SharedComponents/sharedIcons'

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
                        <p>Not just any boiler — the perfect boiler. One that's right for your home, at a fixed online price, with installation included.</p>
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
                {isRadioVal === 'gas' &&
                    <FormikStep validationSchema={{}}>
                        <h3>Which fuel powers your boiler?</h3>
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
                        <p>Based on what you've said, we'll need to check some details through before being able to quote.</p>
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
                    {step > 0 ? <button type='button' onClick={() => setStep(s => s - 1)}>Back</button> : null}
                    {step === 0 ?
                        <button type='submit'>{isLastStep() ? 'Submit' : 'Get Started'}</button>
                        :
                        <button type='submit'>{isLastStep() ? 'Submit' : 'Next'}</button>
                    }
                </Form>
            )}
        </Formik>
    )
}