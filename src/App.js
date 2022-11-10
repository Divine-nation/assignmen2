import './components/Main.css'
import './components/Home.css'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { lazy, Suspense } from 'react';
import NoMatch from './components/utitlities/NoMatch';
import NewProduct from './components/productfiles/NewProduct';
import PopularProduct from './components/productfiles/PopularProduct';
import { AppProvider } from './components/utitlities/auth';
import RequiredAuth from './components/RequiredAuth';

const Product = lazy(() => import('./components/productfiles/Product'))
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Service = lazy(() => import('./pages/Service'))
const LoginDemo = lazy(() => import('./components/LoginDemo'))

function App() {
  return (
    <div className="App">
      <AppProvider>
      <Router>
        <Navbar />
      <Suspense fallback={<h3>Loading..</h3> } >
      <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/LoginDemo' element={<LoginDemo />} />
          <Route path='*' element={<NoMatch />} />
          <Route path='/product' element={<RequiredAuth><Product /> </RequiredAuth>} > 
              <Route path='newProduct' element={<NewProduct />} />
              <Route path='newProduct/:id' element={<NewProduct />} />
              <Route path='popularProduct' element={<PopularProduct />} />
          </Route>

        </Routes> 
      </Suspense>
      </Router>
      </AppProvider>
      
    </div>
  );
}

export default App;
