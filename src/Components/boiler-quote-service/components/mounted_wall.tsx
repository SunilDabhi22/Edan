import '../index.css'
import { Field } from 'formik';
import WallMounted from '../assets/wall-mounted.svg';
import FloorMounted from '../assets/floor-mounted.svg';

export default function MountedWall(props: any) {
    return (
        <>
            <h3>Is your boiler mounted on the wall, or the floor?</h3>
            <div className='quote-options'>
                <Field
                    name="boiler_mounted"
                    render={({ field }: any) => (
                        <>
                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="wall_mounted"
                                    value="wall_mounted"
                                    checked={field.value === 'wall_mounted'}
                                    name="boiler_mounted"
                                    type="radio"
                                    onChange={(e) => props.handleChangeRadio(e)}
                                />
                                <label htmlFor="wall_mounted" className='quote-options-label quote-cc'>
                                    <img src={WallMounted} alt='No' />
                                    <span>Wall Mounted</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="floor_mounted"
                                    value="floor_mounted"
                                    checked={field.value === 'floor_mounted'}
                                    name="boiler_mounted"
                                    type="radio"
                                    onChange={(e) => props.handleChangeRadio(e)}
                                />
                                <label htmlFor="floor_mounted" className='quote-options-label quote-cc'>
                                    <img src={FloorMounted} alt='Yes' />
                                    <span>Floor Mounted</span>
                                </label>
                            </div>
                        </>
                    )}
                />
            </div>
        </>
    )
}