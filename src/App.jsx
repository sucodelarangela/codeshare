import { Header } from 'components/Header';
import { Home } from 'pages/Home';
import { GlobalStyles } from 'styles/globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Community } from 'pages/Community';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/community' element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
