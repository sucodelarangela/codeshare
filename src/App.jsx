import { GlobalStyles } from 'styles/globalStyles';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from 'hooks/useAuth';

import { Header } from 'components/Header';
import { Editor } from 'pages/Editor';
import { Community } from 'pages/Community';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from 'context/AuthContext.jsx';
import { HljsProvider } from 'context/HljsContext';
import { Dashboard } from 'pages/Dashboard';
import { EditPost } from 'pages/EditPost';
import useFetch from 'hooks/useFetch';
import { SearchProvider } from 'context/SearchContext';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import Page404 from 'pages/Page404';

function App() {
  const [user, setUser] = useState(undefined);
  let userId;
  const { auth } = useAuth();
  const { data: authors } = useFetch('/authors');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (user) {
    authors.forEach(author => {
      if (author.name === user.displayName) {
        userId = author._id;
      }
    });
  }

  return (
    <AuthProvider value={{ user, userId }}>
      <HljsProvider>
        <SearchProvider>
          <Router>
            <GlobalStyles />
            <Header />
            <Routes>
              <Route path='/' element={<Community />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
              <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
              <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/' />} />
              <Route path='/edit/:postid' element={user ? <EditPost /> : <Navigate to='/' />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </Router>
        </SearchProvider>
      </HljsProvider>
    </AuthProvider>
  );
}

export default App;
