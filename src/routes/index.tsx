import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ScrollToTop from '../components/ScrollToTop';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import HostDetail from '../pages/HostDetail';
import Detail from '../pages/Detail';
import TripHistory from '../pages/TripHistory';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/host/:homestay_id"
          element={<HostDetail />}
        />
        <Route
          path="/detail/:homestay_id"
          element={<Detail />}
        />
        <Route
          path="/trip"
          element={<TripHistory />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
