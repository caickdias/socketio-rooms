import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import './App.css';

import CardRoom from './components/CardRoom';

const socket = io("http://localhost:8000", {
    transports: ['websocket', 'polling']
})

function App() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        socket.on("rooms", rooms => {
            setRooms(rooms);
        })
    }, [rooms]);

    return (
        <div className="container" style={styles.container}>
            <div style={styles.appTitleCard}>
                <h1>ROOMS</h1>
            </div>

            <div style={styles.lineDivider}></div>

            <div style={styles.roomsContainer}>
            {
                rooms?.map((room, index) => (
                    <CardRoom
                        key={room.id} 
                        name={room.id} 
                        code={room.id}
                        maxCap={room.maxCapacity} 
                        currentUsers={room.users.length} 
                    />
                ))
            }                
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',        
        flexDirection: 'column',
        backgroundColor: '#ecf0f1',        
        paddingLeft: 20,
        paddingRight: 20,
    },
    appTitleCard: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#3498db',           
        height: 69,
        width: '100%',
        borderRadius: 10,
    },
    lineDivider: {
        width: '100%',
        height: 1,
        backgroundColor: 'gray',
    },
    roomsContainer: {
        display: 'flex',
        flex: 1,        
        padding: 10,
    } 
}

export default App;