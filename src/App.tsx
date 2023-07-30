import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import SearchResult from './pages/SearchResult';

const App: React.FC= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Search/>} />
        <Route path="results" element={<SearchResult/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;