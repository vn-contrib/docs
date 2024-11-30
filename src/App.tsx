import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLoading from './components/PageLoading';
import Layout from './routes/Layout';
import Home from './routes/Home';

const New = lazy(() => import('@/routes/New'));

export default function App() {
  return (
    <Routes>
      <Route path="/" Component={Layout}>
        <Route index Component={Home} />
        <Route
          path="new"
          element={
            <Suspense fallback={<PageLoading />}>
              <New />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
