import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&${defaultParams}&per_page=50`);
// await fech(`https://api.unsplash.com/search/photos?query=${word}&${defaultParams}&per_page=50`);