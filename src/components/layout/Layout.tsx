import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div data-fc-id="Layout-root" className="min-h-screen bg-zinc-950 flex flex-col noise">
      <Header />
      <main data-fc-id="Layout-main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
