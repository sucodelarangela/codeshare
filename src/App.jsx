import { GlobalStyles } from 'styles/globalStyles';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from 'hooks/useAuth';

import { Header } from 'components/Header';
import { Home } from 'pages/Home';
import { Community } from 'pages/Community';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from 'context/AuthContext.jsx';
import { HljsProvider } from 'context/HljsContext';
import { Dashboard } from 'pages/Dashboard';

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuth();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <AuthProvider value={{ user }}>
      <HljsProvider>
        <Router>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/community' element={<Community />} />
            <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/' />} />
          </Routes>
        </Router>
      </HljsProvider>
    </AuthProvider>
  );
}

export default App;
