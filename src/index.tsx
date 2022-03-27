import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
}  from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="" element={<Home />} />
          {/* <Route path="cybersecurity" element={<Cybersecurity />} />
          <Route path="blockchain" element={<BlockchainPage />} />
          <Route path="resume" element={<Resume />} />
          <Route path="blog" element={<Blog />}>
            <Route path=":articleId" element={<Article />} />
          </Route> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

