import React from 'react';
import Nav from '../../components/Nav';
import PathfindingVisualizer from '../../components/Pathfinding';

export default function Landing() {
    return (
        <div className="hero">
            <Nav />
            <PathfindingVisualizer />
        </div>
    )
}
