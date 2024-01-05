import './App.css';
import CursorPosition from './components/CursorPosition';
import Crud from './components/Crud';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>List</h1>

      <ul className="list-disc list-inside text-slate-900 text-left">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/crud">CRUD</a>
        </li>
        <li>
          <a href="/cursor-position">Cursor Position</a>
        </li>
        <li>
          <a href="/custom-input">Custom Input</a>
        </li>
      </ul>

      <div className="border-dashed border-2 border-indigo-600">
        <h2>여기는 컴포넌트 영역</h2>
        <Routes>
          <Route path="/crud" element={<Crud />} />
          <Route path="/cursor-position" element={<CursorPosition />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
