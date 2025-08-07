import { miniApp, viewport } from '@telegram-apps/sdk';
import { useEffect } from 'react';

function App() {
    const telegram = async () => {
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

          viewport.safeAreaInsetTop();
          viewport.safeAreaInsetBottom();
          viewport.safeAreaInsetLeft();
          viewport.safeAreaInsetRight();

          viewport.contentSafeAreaInsetTop();
          viewport.contentSafeAreaInsetBottom();
          viewport.contentSafeAreaInsetLeft();
          viewport.contentSafeAreaInsetRight();

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
    }

    useEffect(() => {
      telegram();
    }, [])

  return (
    <>
      <div id='block'>
        Click on the Vite and React logos to learn more
      </div>
    </>
  )
}

export default App
