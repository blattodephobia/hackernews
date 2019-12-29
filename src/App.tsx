import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostDTO from './PostDTO';
import { render } from '@testing-library/react';

const App: React.FC = () => {
  let data: PostDTO[] = 
  [
    new PostDTO(1, new URL("https://www.typescriptlang.org/docs/handbook/decorators.html"), 23, "MrRobot", new Date(2019, 1, 2), 7),
    new PostDTO(2, new URL("https://www.dev2qa.com/how-to-install-node-js-in-windows/"), 23, "CaptainLevi", new Date(2019, 11, 5), 7),
    new PostDTO(3, new URL("https://displaysolutions.samsung.com/monitor/detail/1112/C24FG73"), 7, "MrRobot", new Date(2019, 10, 12), 7),
    new PostDTO(4, new URL("https://www.hackerrank.com/domains/data-structures"), 84, "SomeBODY", new Date(2019, 11, 10), 7),
  ];
  const renderItems = data.map(dto => 
          <li>
            {dto.Url.href}
  <a href={"post?id=" + dto.PostID}>More...</a>
          </li>);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
        {renderItems}
        </ul>
      </header>
    </div>
  );
}

export default App;
