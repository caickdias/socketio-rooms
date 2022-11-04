import React from 'react'

import { Link } from 'react-router-dom';

const CardRoom = ({ name, code, currentUsers, maxCap, onClick }) => {
  return (
    <div style={styles.container}>
      <p>Room {name}</p>
      
      <div style={styles.bottom}>
        <p>{currentUsers}/{maxCap}</p>
        <Link
          to='room'
          state={{ code: code }}
        >
          Join
        </Link>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '20%',
    height: '20%',
    borderRadius: 10,
    backgroundColor: '#3498db',
    color: 'white',
    margin: 5,
  },
  bottom: { 
    display: 'flex', 
    width: '100%',
    flexDirection: 'row', 
    justifyContent: 'space-around' ,
  }
}

export default CardRoom