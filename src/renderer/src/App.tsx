import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './pages/home';
import Work from './pages/work';
import Header from './components/headerControls';
import { ThemeProvider } from './components/themeProvider';

const Layout: React.FC = () => (
  <div>
    <Header />
    <nav className='pt-10'>
      <Link to="/">Home</Link> | <Link to="/work">Work</Link>
    </nav>
    <Outlet />
  </div>
);



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
