import { Table } from 'react-bootstrap';
import React from 'react';
import '../index.css';
import { GiTennisBall } from 'react-icons/gi';
import { MdOutlineSportsTennis } from 'react-icons/md'

function PlayerTable({ players, calculateRatio }) {

    const sortedPlayers = players.sort((a, b) => {
        const ratioA = calculateRatio(a.servicesPlayed, a.servicesWon);
        const ratioB = calculateRatio(b.servicesPlayed, b.servicesWon);
        return ratioB - ratioA;
    });

    return (<div>
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
                        <td>{calculateRatio(player.servicesPlayed, player.servicesWon)}%</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
    );
}
export default PlayerTable;
