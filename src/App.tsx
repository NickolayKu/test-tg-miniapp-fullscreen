import { miniApp, viewport } from '@telegram-apps/sdk';

async function App() {
  
  if (miniApp.mountSync.isAvailable()) {
    miniApp.mountSync();
    miniApp.isMounted(); // true
  }

  if (viewport.mount.isAvailable()) {
    try {
      const promise = viewport.mount();
      viewport.isMounting(); // true
      await promise;
      viewport.isMounting(); // false
      viewport.isMounted(); // true
    } catch (err) {
      viewport.mountError(); // equals "err"
      viewport.isMounting(); // false
      viewport.isMounted(); // false
    }
  }

  if (viewport.requestFullscreen.isAvailable()) {
    await viewport.requestFullscreen();
    viewport.isFullscreen(); // true
  }

  return (
    <>
      <div style={{backgroundColor: 'blue', width: '100%', height: '100%'}}>    
        Click on the Vite and React logos to learn more
      </div>
    </>
  )
}

export default App
