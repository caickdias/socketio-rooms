import React, { useState, useEffect } from 'react'
import io from 'socket.io-client';
import { useLocation } from 'react-router-dom';

import '../../App.css';

const socket = io("http://localhost:8000", {
    transports: ['websocket', 'polling']
})

const Room = () => {
  const location = useLocation();
  const { code } = location.state;  

  const [roomInfo, setRoomInfo] = useState([]);
  const [messages, setMessages] = useState(['opa', 'eai', 'bom?', 'bom, e tu?']);

  useEffect(() => {
    
    socket.emit("joinRoom", code);          

    socket.on("roomInfo", info => {
      setRoomInfo(info);      
    });

  }, []);

  return (
    <div className='container' style={styles.container}>
    
      <div style={styles.title}>
        <h2>ROOM</h2>
      </div>

      <div style={styles.body}>
        <div style={styles.usersContainer}>
        {          
          roomInfo?.users?.map(user => <p key={user}>{user}</p>)
        }
        </div>

        <div style={styles.chatContainer}>
          <div style={styles.chatMessages}>
          {
            messages.map(message => <p>{message}</p>)
          }
          </div>

          <div style={styles.chatInput}>
            <input type="text" />
          </div>
        </div>
      </div>

    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,    
    flexDirection: 'column',    
    backgroundColor: '#3498db',
  },
  title: {
    display: 'flex',    
    height: 80,        
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  body: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  usersContainer: {
    height: '90%',
    width: 200,
    borderRadius: 10,
    backgroundColor: '#ecf0f1',  
  },
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '90%',
    width: 400,
    borderRadius: 10,
    backgroundColor: '#ecf0f1',  
  },
  chatMessages: {        
    height: '100%',
    borderRadius: 10,
  },
  chatInput: {
    padding: 5,    
    borderRadius: 10,
  }

}

export default Room