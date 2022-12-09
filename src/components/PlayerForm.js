import React, { useState } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { GiTennisBall } from 'react-icons/gi';
import { MdOutlineSportsTennis } from 'react-icons/md'

const PlayerForm = ({ player, calculateRatio, onUpdate }) => {
    const [servicesPlayed, setServicesPlayed] = useState(player.servicesPlayed);
    const [servicesWon, setServicesWon] = useState(player.servicesWon);

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "servicesPlayed") {
            setServicesPlayed(value);
        } else if (name === "servicesWon") {
            setServicesWon(value);
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

    return (
            <div className='card-player'>
                <div className='info-player'>
                    <Form className="form-player" onSubmit={onUpdate}>
                        <div className='card-head'>{player.name}</div>
                        <FormGroup className="mb-3">
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
                        <FormGroup className="mb-3">
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
                        {calculateRatio(servicesPlayed, servicesWon) === "NaN" ? <p>Ratio : <span>0.00%</span></p> :
                        <p>Ratio : <span>{calculateRatio(servicesPlayed, servicesWon)}%</span></p>}
                        {/*<button className="title-add-result" type="submit">Ajouter les résultats dans le tableau</button>*/}
                    </Form>
                </div>
            </div>
    );
}
export default PlayerForm;