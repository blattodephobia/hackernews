import React from 'react';
import './App.css';
import PostDTO, { PostDTO2 } from './PostDTO';
import { TableRow } from './TableRow';

const data: PostDTO2[] = [
  { postID: 1, url: new URL("https://www.typescriptlang.org/docs/handbook/decorators.html"), points: 12, author: 'MrRobot', commentsCount: 3, datePosted: new Date(2019, 1, 2) }
]

const App: React.FC = () => {
  // let data1: PostDTO[] =
  //   [
  //     new PostDTO(1, new URL("https://www.typescriptlang.org/docs/handbook/decorators.html"), 23, "MrRobot", new Date(2019, 1, 2), 7),
  //     new PostDTO(2, new URL("https://www.dev2qa.com/how-to-install-node-js-in-windows/"), 23, "CaptainLevi", new Date(2019, 11, 5), 7),
  //     new PostDTO(3, new URL("https://displaysolutions.samsung.com/monitor/detail/1112/C24FG73"), 7, "MrRobot", new Date(2019, 10, 12), 7),
  //     new PostDTO(4, new URL("https://www.hackerrank.com/domains/data-structures"), 84, "SomeBODY", new Date(2019, 11, 10), 7),
  //   ];

  const renderItems = data.map((dto, index) => <TableRow dto={dto} index={index} key={dto.postID}/>  );

  return (
    <div className="App">
      <header className="App-header">
        <table id="hnmain" style={{ backgroundColor: "#f6f6ef" }}>
          <tbody>
            <tr>
              <td style={{ width: "18px", paddingRight: "4px" }}>
                <a href="https://news.ycombinator.com">
                  <img src="y18.gif"
                    width="18"
                    height="18"
                    style={{ border: "1px white solid" }} />
                </a>
              </td>

              <td style={{ lineHeight: "12pt", height: "10px" }}>
                <span className="pagetop">
                  <b className="hnname"><a href="news">Hacker News</a></b>
                  <a href="newest">new</a> |&nbsp;
                  <a href="front">past</a> |&nbsp;
                  <a href="newcomments">comments</a> |&nbsp;
                  <a href="ask">ask</a> |&nbsp;
                  <a href="show">show</a> |&nbsp;
                  <a href="jobs">jobs</a> |&nbsp;
                  <a href="submit">submit</a>
                </span>
              </td>

              <td style={{ textAlign: "right", paddingRight: "4px" }}>
                <span className="pagetop"><a href="login?goto=news">login</a></span>
              </td>
            </tr>

            <tr id="pagespace" style={{ height: "16px" }}></tr>

            <tr>
              <td>
                <table className="itemlist">
                  <tbody>
                    {renderItems}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
