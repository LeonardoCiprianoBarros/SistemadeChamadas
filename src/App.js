
import {BrowserRouter} from 'react-router-dom';
import RoutesApp from './Routes/'

import AuthProvider from './context/auth'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
