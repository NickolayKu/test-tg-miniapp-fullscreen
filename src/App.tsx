import { useEffect } from 'react';
import { init, requestFullscreen } from '@telegram-apps/sdk';

function App() {
  
  init();

  requestFullscreen(); 

  return (
    <>
      <div style={{backgroundColor: 'blue', width: '100%', height: '100%'}}>    
        Click on the Vite and React logos to learn more
      </div>
    </>
  )
}

export default App
