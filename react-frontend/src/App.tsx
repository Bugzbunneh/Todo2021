import { StoreProvider } from 'Stores/Provider';
import { AuthProvider } from 'Api/Auth';
import { Header } from 'Shared/Header';
import { AppRoutes } from 'Shared/Routes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <StoreProvider>
      <AuthProvider>
        <BrowserRouter>
          <div className="App">
            <Header />
            <AppRoutes />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </StoreProvider>
  );
}

export default App;
