import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { BrowserRouter } from "react-router-dom";
import { Suspense } from 'react';
import Loading from './pages/loading/Loading.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </BrowserRouter>,
)
