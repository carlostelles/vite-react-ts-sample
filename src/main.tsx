import React, { ReactElement, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const ROOT = document.getElementById('root')!;

function unmountRender(element: ReactElement) {
  ReactDOM.createRoot(ROOT).render(element);
}

try {
  const HomeLazy = React.lazy(() => import('./pages/Home'));
  const AboutLazy = React.lazy(() => import('./pages/About'));

  unmountRender(
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter basename="">
          <Routes>
            <Route
              path="/"
              element={<HomeLazy />}
            />
            <Route
              path="/about"
              element={<AboutLazy />}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </React.StrictMode>
  )
} catch (error) {
  unmountRender(
    <React.StrictMode>
      Erro!
    </React.StrictMode>
  )
}

