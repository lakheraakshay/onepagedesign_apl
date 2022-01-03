import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Main/Body/Body';
import Tokenomics from './Components/Tokenomics/Tokenomics';
import Staking from './Components/Staking/Staking';
import Roadmap from './Components/Roadmap/Roadmap';
import Nft from './Components/Nft/Nft';
import Team from './Components/Team/Team';
import HowToBuy from './Components/HowtoBuy/HowToBuy';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App text-center" style={{backgroundColor: "#0e1019"}}>
      <Header />
      <Body />
      <Tokenomics />
      <Staking />
      <Roadmap />
      <Nft />
      <Team />
      <HowToBuy />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
