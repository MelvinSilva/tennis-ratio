import React, { useState } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { GiTennisBall } from 'react-icons/gi';
import { MdOutlineSportsTennis } from 'react-icons/md'

const PlayerForm = ({ player, calculateRatio, calculateRatio2, onUpdate }) => {
    const [servicesPlayed, setServicesPlayed] = useState(player.servicesPlayed);
    const [servicesWon, setServicesWon] = useState(player.servicesWon);
    const [doubleFaute, setDoubleFaute] = useState(player.servicesWon);

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "servicesPlayed") {
            setServicesPlayed(value);
        } else if (name === "servicesWon") {
            setServicesWon(value);
        } else if (name === "doubleFaute") {
            setDoubleFaute(value)
        }
    }
    function incrementServicesPlayed() {
        setServicesPlayed(servicesPlayed + 1);
    }
    function decrementServicesPlayed() {
        setServicesPlayed(servicesPlayed - 1);
    }
    function incrementServicesWon() {
        setServicesWon(servicesWon + 1);
    }
    function decrementServicesWon() {
        setServicesWon(servicesWon - 1);
    }
    function incrementDoubleFaute() {
        setDoubleFaute(doubleFaute + 1);
    }
    function decrementDoubleFaute() {
        setDoubleFaute(doubleFaute - 1);
    }

    return (
        <div className='card-player'>
            <div className='info-player'>
                <Form className="form-player" onSubmit={onUpdate}>
                    <div className='card-head'>{player.name}</div>
                    <FormGroup>
                        <p className='title'>Nombre <MdOutlineSportsTennis /> :</p>
                        <input
                            name="servicesPlayed"
                            value={servicesPlayed}
                            onChange={handleChange}
                            className="input-score"
                        />
                        <div className='btn-increment-decrement'>
                            <button onClick={incrementServicesPlayed}> + </button>
                            <button onClick={decrementServicesPlayed}> - </button>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <p className='title'>Premiere <GiTennisBall /> :</p>
                        <input
                            name="servicesWon"
                            value={servicesWon}
                            onChange={handleChange}
                            className="input-score"
                        />
                        <div className='btn-increment-decrement'>
                            <button onClick={incrementServicesWon}>+</button>
                            <button onClick={decrementServicesWon}>-</button>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <p className='title'>Double ❌ :</p>
                        <input
                            name="doubleFaute"
                            value={doubleFaute}
                            onChange={handleChange}
                            className="input-score"
                        />
                        <div className='btn-increment-decrement'>
                            <button onClick={incrementDoubleFaute}> + </button>
                            <button onClick={decrementDoubleFaute}> - </button>
                        </div>
                        {calculateRatio(servicesPlayed, servicesWon) === "NaN" ? <p className='ratioo'>Ratio premiere : <span>0.0%</span></p> :
                            <p className='ratioo'>Ratio premiere : <span>{calculateRatio(servicesPlayed, servicesWon)}%</span></p>}
                        {calculateRatio(servicesPlayed, servicesWon) === "NaN" ? <p className='ratioo'>Ratio double : <span>0.0%</span></p> :
                            <p className='ratioo'>Ratio double : <span>{calculateRatio2(servicesPlayed, doubleFaute)}%</span></p>}

                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}
export default PlayerForm;