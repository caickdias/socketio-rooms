import React from 'react'

const CardRoom = ({ name, code, currentUsers, maxCap }) => {
  return (
    <div style={styles.container}>
      <p>Room {name}</p>
      <div style={styles.bottom}>
        <p>{currentUsers}/{maxCap}</p>
        <p>Join</p>
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