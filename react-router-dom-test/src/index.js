import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Link, NavLink, useParams } from 'react-router-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

var contents = [
  {id:1, title:'HTML', desc:'HTML is...'},
  {id:2, title:'JS', desc:'JS is...'},
  {id:3, title:'React', desc:'React is...'},
]

function Topic() {
  // hooks 를 이용하여 get parameter 접근
  var params = useParams();
  var topic_id = Number(params.topic_id);
  var selected_topic = contents.filter(content => content.id === topic_id);
  var target_topic = { title: 'None', desc: 'Not Found'};
  if (selected_topic.length > 0) {
    target_topic = selected_topic[0];
  }
  return (
    <div>
        <h3>{target_topic.title}</h3>
        {target_topic.desc}
    </div>
  )
}

function Topics() {
  // return (
  //   <div>
  //     <h3>Topics</h3>
  //     Topics...
  //   </div>
  // )
  var list = [];
  contents.forEach(content => {
    list.push(
      <li key={content.id}>
        <NavLink to={`/topics/${content.id}`}>{content.title}</NavLink>
      </li>
    );
  });
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {list}
      </ul>
      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>React Router DOM example</h1>
      {/* <ul>
        <li><Link exact to="/">Home (Link)</Link></li>
        <li><Link to="/topics">Topics (Link)</Link></li>
        <li><Link to="/contact">Contact (Link)</Link></li>
      </ul> */}
      <ul>
        <li><NavLink exact to="/">Home (NavLink)</NavLink></li>
        <li><NavLink to="/topics">Home (NavLink)</NavLink></li>
        <li><NavLink to="/contact">Home (NavLink)</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route path="/">Not Found</Route>
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
