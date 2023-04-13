import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [scrollTop, setScrollTop] = useState(0);
  const [windowHeight, setWindowHeight] = useState(1);
  const [docHeight, setDocHeight] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setScrollTop(scrollTop);
      setWindowHeight(windowHeight);
      setDocHeight(docHeight);
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('load', onScroll);
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="app" style={{
        "--scrollTop": scrollTop,
        "--windowHeight": windowHeight,
        "--docHeight": docHeight,
      }}>
      <div className='cover'>
        <div className='outer'>
          <div className='inner'>
            <div className='full-convert-wrapper-shadow'>
              <div className='full-convert-wrapper'>
                <div className='convert-wrapper back-wrapper'>
                  <div className='convert back'></div>
                </div>
                <div className='convert-wrapper left-wrapper'>
                  <div className='convert left'></div>
                </div>
                <div className='convert-wrapper right-wrapper'>
                  <div className='convert right'></div>
                </div>
                <div className='convert-wrapper bottom-wrapper'>
                  <div className='convert bottom'></div>
                </div>
                <div className='convert-wrapper top-wrapper'>
                  <div className='convert top'></div>
                </div>
                <div className='image-inside'>
                  <img src='/image.jpg'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
