import { Outlet } from 'react-router-dom'; 
import Header from './components/Header.jsx'; 

export default function App() {
  return (
    <>
      <Header /> 
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

