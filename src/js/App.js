
import React from 'react';
import { Button } from '@mui/material';


export default function App() {

  return (
    <>
      <h1>I am App Component!!!</h1>
      <p><Button variant="contained" onClick={() => {
        electron.notificationApi.sendNotification('My custom notification!');
      }}>Notify</Button></p>
    </>
  )
}
