import { lazy, Suspense } from 'react';
import Home from './pages/Home/Home';

const About = lazy(() => import('./pages/About/About'));
const Sponsor = lazy(() => import('./pages/Sponsor/Sponsor'));
const FAQ = lazy(() => import('./pages/FAQ/FAQ'));
const Footer = lazy(() => import('./pages/Footer/Footer'));

function App() {
  return (
    <>
      <Home />
      <Suspense fallback={null}>
        <About />
        <Sponsor />
        <FAQ />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
