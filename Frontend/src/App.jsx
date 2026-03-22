import Home from './pages/Home'
import Preloader from './components/Preloader'
import { useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onExitComplete={() => setIsLoading(false)} />}
      <main className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <div className='overflow-hidden select-none'>
          <Home />
        </div>
      </main>
    </>
  )
}

export default App
