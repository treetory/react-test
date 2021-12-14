import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DonutStatistics from './pages/DonutStatistics';

/**
 * 
 * BrowserRouter ->
 * http://localhost:3000/donutStatistics/2403?type=aaa
 * 
 * HashRouter -> 반드시 hash (#) 가 URL 에 붙어 있어야 함
 * http://localhost:3000/hash/#/hashDonutStatistics/2403?type=aaa
 * 
 * V6 부터는
 * 반드시
 *  - Routes 의 child 로 Route 를 지정해야 하며
 *  - Route 내부에서 exact 를 쓸 수 없으며
 *  - Route path 에서 유사 패턴을 인지하게 하고 싶으면 /path/* 식으로 사용해야하며
 *  - component 가 아닌 element 를 써야 한다.
 * 
 */
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/donutStatistics/:sampleId" element={<DonutStatistics />}/>
      </Routes>
    </BrowserRouter>
    <HashRouter>
      <Routes>
        <Route path="/hashDonutStatistics/:sampleId" element={<DonutStatistics />}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
