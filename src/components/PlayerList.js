/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import PlayerForm from './PlayerForm';
import PlayerTable from './PlayerTable';
import '../index.css';

function PlayerList() {
  const [players, setPlayers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    // Ajouter le joueur au tableau
    const newPlayer = {
      name: event.target.playerName.value,
      servicesPlayed: 0,
      servicesWon: 0,
      doubleFaute: 0
    };
    setPlayers([...players, newPlayer]);
    event.target.reset();
  }

  function calculateRatio(played, won) {
    return (won / played * 100).toFixed(2);
  }

  function calculateRatio2(played, doubleFaute) {
    return (doubleFaute / played * 100).toFixed(2);
  }

  function handleUpdate(playerIndex, event) {
    event.preventDefault();

    // Mettre à jour les données du joueur
    const updatedPlayer = {
      ...players[playerIndex],
      servicesPlayed: event.target.servicesPlayed.value,
      servicesWon: event.target.servicesWon.value,
      doubleFaute: event.target.doubleFaute.value,
    };
    setPlayers([
      ...players.slice(0, playerIndex),
      updatedPlayer,
      ...players.slice(playerIndex + 1),
    ]);

  }


  return (
    <>
      <Form className="add-player" onSubmit={handleSubmit}>
        <FormGroup>
          <input className="enter-name" type="text" placeholder="Entrez le nom du joueur" name="playerName" required />
        </FormGroup>
        <button className="add-player" type="submit">Ajouter</button>
      </Form>

      {players.length > 0 && (
        <>
          {/* Afficher les joueurs */}
          <h3>Liste des joueurs</h3>
          <div className='d-flex justify-content-center flex-wrap'>
          {players.map((player, index) => (
            <PlayerForm
              key={player.name}
              player={player}
              calculateRatio={calculateRatio}
              calculateRatio2={calculateRatio2}
              onUpdate={event => handleUpdate(index, event)}
            />
          ))}
          </div>
          <div className='table-player'>
          <PlayerTable players={players} calculateRatio={calculateRatio} calculateRatio2={calculateRatio2}/>
          </div>
        </>
      )}
    </>
  );
}
export default PlayerList;