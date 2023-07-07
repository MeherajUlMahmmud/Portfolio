import { useEffect, useState } from 'react';
import Parallax from './Parallax';
import Navbar from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {
        isLoading ? <Loader /> : <>
          <Navbar />
          <Parallax />
        </>
      }
    </div>
  );
}

export default App;
