import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostList from './containers/PostList/PostList';
import PostDetail from './containers/PostDetail/PostDetail';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/detail/:pid" element={<PostDetail />} />
    </Routes>
  </BrowserRouter>,
);