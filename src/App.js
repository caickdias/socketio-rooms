import React from 'react';

import './App.css';

function App() {

  return (
    <div className="container" style={styles.container}>
        <div style={styles.appTitleCard}>
            <h1>ROOMS</h1>
        </div>

        <div style={styles.lineDivider}></div>

        <div style={styles.roomsContainer}>

        </div>
    </div>
  );
}

const styles = {
    container: {
        display: 'flex',        
        flexDirection: 'column',
        backgroundColor: '#ecf0f1',        
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
    } 
}

export default App;