import { useState, useEffect } from 'react';
import Header from '../header/Header';
import MainScreen from '../mainScreen/MainScreen';
import ImageScreen from '../imageScreen/ImageScreen';
import TabsScreen from '../tabsScreen/TabsScreen';
import FlipCardsScreen from '../flipCardsScreen/FlipCardsScreen';
import AccordionScreen from '../accordionScreen/AccordionScreen';

function App() {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header isScroll={!!scrollTop}/>
      <MainScreen />
      <ImageScreen />
      <TabsScreen />
      <FlipCardsScreen />
      <AccordionScreen />
      <footer>
        © 2024  CLOUD CASTLE
      </ footer>
    </div>
  );
}

export default App;
