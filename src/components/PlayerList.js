/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
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
    };
    setPlayers([...players, newPlayer]);
    event.target.reset();
  }

  function calculateRatio(played, won) {
    return (won / played * 100).toFixed(2);
  }

  function handleUpdate(playerIndex, event) {
    event.preventDefault();

    // Mettre à jour les données du joueur
    const updatedPlayer = {
      ...players[playerIndex],
      servicesPlayed: event.target.servicesPlayed.value,
      servicesWon: event.target.servicesWon.value,
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
          <h3>AJOUTER UN JOUEUR</h3>
          <input className="enter-name" type="text" placeholder="Entrez le nom du joueur" name="playerName" />
        </FormGroup>
        <button className="add-player" type="submit">Ajouter le joueur</button>
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
              onUpdate={event => handleUpdate(index, event)}
            />
          ))}
          </div>
          <div className='table-player'>
          <PlayerTable players={players} calculateRatio={calculateRatio}/>
          </div>
        </>
      )}
    </>
  );
}
export default PlayerList;