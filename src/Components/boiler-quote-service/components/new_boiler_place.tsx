import '../index.css'
import { Field } from 'formik';
import SameRoomImg from '../assets/same-room.svg';
import OnSameFloor from '../assets/same-floor.svg';
import OnAnotherFloor from '../assets/other-floor.svg';
import OtherRoom from '../assets/other-room.svg';

export default function NewBoilerPlace(props: any) {
    return (
        <>
            <h3>Where do you want your new boiler to be?</h3>
            <div className='quote-options'>
                <Field
                    name="new_boiler_place"
                    render={({ field }: any) => (
                        <>
                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="same_room"
                                    value="same_room"
                                    checked={field.value === 'same_room'}
                                    name="new_boiler_place"
                                    type="radio"
                                    onChange={(e) => props.handleChangeRadio(e)}
                                />
                                <label htmlFor="same_room" className='quote-options-label quote-cc'>
                                    <img src={SameRoomImg} alt='Within same room' />
                                    <span>Within same room</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="same_floor"
                                    value="same_floor"
                                    checked={field.value === 'same_floor'}
                                    name="new_boiler_place"
                                    type="radio"
                                    onChange={(e) => props.handleChangeRadio(e)}
                                />
                                <label htmlFor="same_floor" className='quote-options-label quote-cc'>
                                    <img src={OnSameFloor} alt='On same floor' />
                                    <span>On same floor</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="another_floor"
                                    value="another_floor"
                                    checked={field.value === 'another_floor'}
                                    name="new_boiler_place"
                                    type="radio"
                                    onChange={(e) => props.handleChangeRadio(e)}
                                />
                                <label htmlFor="another_floor" className='quote-options-label quote-cc'>
                                    <img src={OnAnotherFloor} alt='On another floor/loft' />
                                    <span>On another floor/loft</span>
                                </label>
                            </div>

                            <div className="radio-item">
                                <input
                                    {...field}
                                    id="other_place"
                                    value="other_place"
                                    checked={field.value === 'other_place'}
                                    name="new_boiler_place"
                                    type="radio"
                                    onChange={(e) => props.handleChangeRadio(e)}
                                />
                                <label htmlFor="other_place" className='quote-options-label quote-cc'>
                                    <img src={OtherRoom} alt='Other' />
                                    <span>Other</span>
                                </label>
                            </div>
                        </>
                    )}
                />
            </div>
        </>
    )
}