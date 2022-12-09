import React from 'react';
import PlayerList from './components/PlayerList';

const App = () => {
    return (
        <div>
            <h1 className='title-app'>🎾 TENNIS SERVICES RATIO 🎾</h1>
            <p className='description'>Cette application permet de calculer le pourcentage de première balle réussie et de double faute effectué par rapport aux nombres total de services joués.<br/> Un tableau comparatif est ensuite généré pour classer les joueurs avec le ratio le plus élevé dans l'ordre décroissant.</p>
            <PlayerList />
        </div>
    );
};

export default App;