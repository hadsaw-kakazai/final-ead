import logo from './logo.svg';
import './App.css';
import AddRecepie from './components/AddRecepie';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ViewReceipe from './components/ViewReceipe'
import NoPage from './components/NoPage'
import Nav from './Nav';

function App() {
  return (
    
    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<AddRecepie />} />
          <Route path="ViewReceipe" element={<ViewReceipe />} />
          
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
     
 
    </>
  );
}

export default App;
