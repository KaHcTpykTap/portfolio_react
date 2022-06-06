import React, { useState } from 'react'
import { TestContainer } from './styles/TestComponent';

const TestComponent = () => {

    const [x, setX] = useState(1000);
    const [y, setY] = useState(1000);
    const [z, setZ] = useState(1000);

    return (
        <TestContainer x={x} y={y} z={z}>
            <div className='x-row'>
                <button onClick={() => {
                    setX(state => state - 2);
                    setY(state => state + 1);
                    setZ(state => state + 1);
                }}>-</button>

                <div className='x-cont'>x = {x}</div>

                <button onClick={() => {
                    setX(state => state + 2);
                    setY(state => state - 1);
                    setZ(state => state - 1);
                }}>+</button>
            </div>

            <div className='y-row'>
                <button onClick={() => {
                    setY(state => state - 2);
                    setX(state => state + 1);
                    setZ(state => state + 1);
                }}>-</button>

                <div className='y-cont'>y = {y}</div>

                <button onClick={() => {
                    setY(state => state + 2);
                    setX(state => state - 1);
                    setZ(state => state - 1);
                }}>+</button>
            </div>

            <div className='z-row'>
                <button onClick={() => {
                    z > 1 || x / z >= 1 || x / z < 2 || y / z >= 1000 || y / z < 2000 ? (setZ(state => state - 2) ||
                        setY(state => state + 1) ||
                        setX(state => state + 1)) : alert('hello');
                }}>-</button>

                <div className='z-cont'>z = {z}</div>

                <button onClick={() => {
                    setZ(state => state + 2);
                    setY(state => state - 1);
                    setX(state => state - 1);
                }}>+</button>



            </div>




        </TestContainer>
    )
}

export default TestComponent