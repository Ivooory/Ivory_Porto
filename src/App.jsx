import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MoreAbout from './MoreAbout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-about" element={<MoreAbout />} />
      </Routes>
    </BrowserRouter>
  );
}