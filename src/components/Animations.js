import { createContext, useState, useEffect } from 'react'

export const AnimationsContext = createContext()

const { Provider } = AnimationsContext

export const AnimationsProvider = ({ children }) => {

  const [effect, setEffect] = useState({
    aboutComponent: {
      animation: '',
      visibility: 'invisible'
    },
    gamerComponent: {
      gamerRow01: {
        animation: '',
        visibility: 'invisible'
      },
      gamerRow02: {
        animation: '',
        visibility: 'invisible'
      },
      gamerRow03: {
        animation: '',
        visibility: 'invisible'
      }
    }
  });

  var screenWidth = window.screen.availWidth;
  var scrollHeight = 0;
  var mobileAnimationsStart = 0;

  const handleScroll = () => {
    
    scrollHeight = document.documentElement.scrollTop;
    
    // VERIFY HOW PIXELS ANIMATIONS NEEDS TO START
    console.log(scrollHeight);

    if(screenWidth < 768) {
      mobileAnimationsStart = 500;
    }

    if (scrollHeight > 450 - mobileAnimationsStart) {
      setEffect(prevState => ({
        ...prevState, aboutComponent: { animation: 'fadeIn', visibility: 'visible' }
      }));
    }

    if (document.documentElement.scrollTop > 1050 - mobileAnimationsStart) {
      setEffect(prevState => ({
        ...prevState, gamerComponent: {
          gamerRow01: { animation: 'fadeIn', visibility: 'visible' },
          gamerRow02: { animation: '', visibility: 'invisible' },
          gamerRow03: { animation: '', visibility: 'invisible' }
        }
      }));
    }

    if (document.documentElement.scrollTop > 1550 - mobileAnimationsStart) {
      setEffect(prevState => ({
        ...prevState, gamerComponent: {
          gamerRow01: { animation: 'fadeIn', visibility: 'visible' },
          gamerRow02: { animation: 'fadeIn', visibility: 'visible' },
          gamerRow03: { animation: '', visibility: 'invisible' }
        }
      }));
    }

    if (document.documentElement.scrollTop > 1900 - mobileAnimationsStart) {
      setEffect(prevState => ({
        ...prevState, gamerComponent: {
          gamerRow01: { animation: 'fadeIn', visibility: 'visible' },
          gamerRow02: { animation: 'fadeIn', visibility: 'visible' },
          gamerRow03: { animation: 'fadeIn', visibility: 'visible' }
        }
      }));
    }
  }

  useEffect(() => {
    window.onscroll = () => handleScroll();
  });

  return (
    <Provider value={{ effect, handleScroll }}>
      {children}
    </Provider>
  )
}