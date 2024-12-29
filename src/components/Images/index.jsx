import { useState } from 'react';
import Results from '../Results/Result';
import { getResponseApi } from '../../utils/api';
import './styles.css';

const API_KEY = import.meta.env.VITE_ACCESS_KEY;
const defaultParams = `client_id=${API_KEY}`;

export default function GetImages() {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const receivedImages = await getResponseApi(word);
      
      setImages(receivedImages);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }
  
  function searchWord(e) {
    setWord(e.target.value);
  }

  return (
    <div>
      {isLoading && ( <div>Loading..</div>)}
      <form onSubmit={(e) => {handleSubmit(e)}}>
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
      {!isLoading && images.map((image) => (
        <Results key={image.id} {...image}/>
      ))}
    </div>
    {error && (<span>{error}</span>)}
  </div>
  );
}
