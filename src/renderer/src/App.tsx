import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './pages/home';
import Work from './pages/work';
import Header from './components/headerControls';
import { ThemeProvider } from './components/themeProvider';


const Layout = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {!isOnline ? (
        <div className="flex-1 flex items-center justify-center bg-red-600 text-white text-center flex-col p-4">
          <h1 className="text-3xl font-bold mb-2">You're Offline</h1>
          <p className="text-lg">Please check your internet connection.</p>
        </div>
      ) : (
        <>
          <nav className="pt-10 px-4">
            <Link to="/" className="mr-4 text-blue-600 hover:underline">Home</Link>
            <Link to="/work" className="text-blue-600 hover:underline">Work</Link>
          </nav>
          <main className="p-4 flex-1">
            <Outlet />
          </main>
        </>
      )}
    </div>
  );
};



function App(): React.JSX.Element {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="work" element={<Work />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
