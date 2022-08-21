import { createContext, useState, useEffect } from 'react'

export const AnimationsContext = createContext()

const { Provider } = AnimationsContext

export const AnimationsProvider = ({ children }) => {

  const [location, setLocation] = useState({
    location: 'home'
  });

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

  // REMOVE .active WHEN CLICK LINKS NAVBAR
  const handleClick = (e) => {
    e.stopImmediatePropagation();
  }

  var screenWidth = window.screen.availWidth;
  var scrollHeight = 0;
  var mobileAnimationsStart = 0;

  // VERIFY WHEN SCREEN SCROLL DOWN AND CONTROL EFFECT
  // ADJUSTING EFFECTS ON SMARTPHONES (mobileAnimationsStart)
  const handleScroll = () => {

    scrollHeight = document.documentElement.scrollTop;

    // VERIFY HOW PIXELS ANIMATIONS NEEDS TO START
    //console.log(scrollHeight);

    if (screenWidth < 768) {
      mobileAnimationsStart = 1500;
    }

    setLocation({
      location: 'home'
    })

    if (scrollHeight > 400 - mobileAnimationsStart) {

      setLocation({
        location: 'sobre'
      })

      setEffect(prevState => ({
        ...prevState, aboutComponent: { animation: 'fadeIn', visibility: 'visible' }
      }));
    }

    if (document.documentElement.scrollTop > 1500 - mobileAnimationsStart) {

      setLocation({
        location: 'gamer'
      })

      setEffect(prevState => ({
        ...prevState, gamerComponent: {
          gamerRow01: { animation: 'fadeIn', visibility: 'visible' },
          gamerRow02: { animation: '', visibility: 'invisible' },
          gamerRow03: { animation: '', visibility: 'invisible' }
        }
      }));
    }

    if (document.documentElement.scrollTop > 1550 - mobileAnimationsStart) {

      setLocation({
        location: 'gamer'
      })

      setEffect(prevState => ({
        ...prevState, gamerComponent: {
          gamerRow01: { animation: 'fadeIn', visibility: 'visible' },
          gamerRow02: { animation: 'fadeIn', visibility: 'visible' },
          gamerRow03: { animation: '', visibility: 'invisible' }
        }
      }));
    }

    if (document.documentElement.scrollTop > 2100 - mobileAnimationsStart) {

      setLocation({
        location: 'gamer'
      })

      setEffect(prevState => ({
        ...prevState, gamerComponent: {
          gamerRow01: { animation: 'fadeIn', visibility: 'visible' },
          gamerRow02: { animation: 'fadeIn', visibility: 'visible' },
          gamerRow03: { animation: 'fadeIn', visibility: 'visible' }
        }
      }));
    }


    if (document.documentElement.scrollTop > 4000 - mobileAnimationsStart) {

      setLocation({
        location: 'servicos'
      })
    }

    if (document.documentElement.scrollTop > 5800 - mobileAnimationsStart) {
      setLocation({
        location: 'contato'
      })
    }
  }

  useEffect(() => {
    window.onscroll = () => handleScroll();
  });

  return (
    <Provider value={{ effect, location, handleScroll, handleClick }}>
      {children}
    </Provider>
  )
}