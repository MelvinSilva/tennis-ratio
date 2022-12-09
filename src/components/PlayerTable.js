import { Table } from 'react-bootstrap';
import React from 'react';
import '../index.css';
import { GiTennisBall } from 'react-icons/gi';
import { MdOutlineSportsTennis } from 'react-icons/md'

function PlayerTable({ players, calculateRatio }) {

    const sortedPlayers = [...players].sort((a, b) => {
        // calcule le ratio pour chaque joueur
        const aRatio = calculateRatio(a.servicesPlayed, a.servicesWon);
        const bRatio = calculateRatio(b.servicesPlayed, b.servicesWon);
      
        // si le ratio de A est supérieur au ratio de B, A doit être classé avant B (décroissant)
        if (aRatio > bRatio) return -1;
      
        // si le ratio de A est inférieur au ratio de B, A doit être classé après B (décroissant)
        if (aRatio < bRatio) return 1;
      
        // si les ratios sont égaux, les joueurs peuvent être classés dans n'importe quel ordre
        return 0;
      });


    return (
    <div>
        <h3>Classement des joueurs</h3>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Total <MdOutlineSportsTennis /></th>
                    <th>Premiere <GiTennisBall /></th>
                    <th>Ratio</th>
                </tr>
            </thead>
            <tbody>
                {sortedPlayers.map((player, index) => (
                    <tr key={player.name}>
                        <td>{index + 1}</td>
                        <td>{player.name}</td>
                        <td>{player.servicesPlayed}</td>
                        <td>{player.servicesWon}</td>
                        {calculateRatio(player.servicesPlayed, player.servicesWon) === "NaN" ? <td>0.00%</td> :
                        <td>{calculateRatio(player.servicesPlayed, player.servicesWon)}%</td>}
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
    );
}
export default PlayerTable;
