import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { WalletProvider, SuietWallet, SuiWallet} from '@suiet/wallet-kit';

function App() {
  return (
    <div className="App">
      <WalletProvider defaultWallets={[SuietWallet, SuiWallet]}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </WalletProvider>
    </div>
  );
}

export default App;