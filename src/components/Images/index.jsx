import { useState } from 'react';
import Results from '../Results/Result';
import './styles.css';
import Loading from '../Loading';

const API_KEY = import.meta.env.VITE_ACCESS_KEY;
const defaultParams = `client_id=${API_KEY}`;

export default function GetImages() {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [Data, setData] = useState(null);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    setData(null);
    e.preventDefault();
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${word}&${defaultParams}&per_page=50`);

    if (!response.ok) {
      console.log("fetch error");
    }

    const data = await response.json();
    setImages(data.results);
    setData();
}

function searchWord(e) {
  setWord(e.target.value);
}
  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <label>
          <input id="search-bar"
            type='text'
            value={word}
            name='keywords'
            placeholder='eg.cat'
            onChange={searchWord}
            />
          </label>
        <input type='submit' id="submit-button" />
      </form>
    <div className='result-images'>
      {images.map((image) => (
        <Results key={image.id} {...image}/>
      ))}
    </div>
  </div>
  );
}
