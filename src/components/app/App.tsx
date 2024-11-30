import Header from '../header/Header';
import MainScreen from '../mainScreen/MainScreen';
import ImageScreen from '../imageScreen/ImageScreen';
import TabsScreen from '../tabsScreen/TabsScreen';
import FlipCardsScreen from '../flipCardsScreen/FlipCardsScreen';
import AccordionScreen from '../accordionScreen/AccordionScreen';

function App() {
  return (
    <div className="App">
      <Header />
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
