import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const fetchPostData = () => {
    // fetch(`http://localhost/yoursitename/wp-json/wp/v2/movies?per_page=100`)
    fetch('https://porto.services/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(myJSON => {
        return console.log(myJSON)
      })
  }

  const data = () => {
    fetch('https://porto.services/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(posts => console.log(posts[0].title.rendered))
  }

  return (
    <div className='App'>
      {data()}
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
