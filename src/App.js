import './App.css';
import Calculator from './Components/Calculator/Calculator';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import {AllZones,typeOfPackage,typeOfSize,zoneOne,zoneTwo,zoneThree,zoneFour,zoneFive,priceWeightZoneOne,priceWeightZoneTwo,priceWeightZoneThree,priceWeightZoneFour,priceWeightZoneFive} from './data'

function App() {
  return (
    <div className="App">
      <Header/>
      <Calculator priceFive={priceWeightZoneFive} priceFour={priceWeightZoneFour} priceThree={priceWeightZoneThree} priceTwo={priceWeightZoneTwo} priceOne={priceWeightZoneOne} all={AllZones} top={typeOfPackage} tos={typeOfSize} one={zoneOne} two={zoneTwo} three={zoneThree} four={zoneFour} five={zoneFive} />
      <Footer/>
    </div>
  );
}

export default App;
