import Home from './pages/Home'
import Preloader from './components/Preloader'
import { useState } from 'react'
import { MotionConfig } from 'framer-motion'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MotionConfig reducedMotion="user">
      {isLoading && <Preloader onExitComplete={() => setIsLoading(false)} />}
      <main className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <div className='overflow-hidden'>
          <Home />
        </div>
      </main>
    </MotionConfig>
  )
}

export default App
