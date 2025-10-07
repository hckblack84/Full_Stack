import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/styles/MainLayout.css';

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <Outlet />
      </main>
      <footer className="">
        <p>© 2024 My Company</p>
      </footer>
    </>
  );
}

export default MainLayout;