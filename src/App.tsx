import { useEffect } from 'react';

function App() {
  
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    if (tg) {
      tg.ready();
      tg.requestFullscreen();
      tg.isFullscreen(true);
    }
  }, [tg]);

  return (
    <>
      <div style={{backgroundColor: 'blue', width: '100%', height: '100%'}}>    
        Click on the Vite and React logos to learn more
      </div>
    </>
  )
}

export default App
