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
  const renderItems = data.map((dto, index) => 
    <>
      <tr className="athing"
          id={dto.PostID.toString()}>
        <td align="right"
            valign="top"
            className="title">
          <span className="rank">{index + 1}.</span>
        </td>

        <td valign="top"
            className="votelinks">
          <div className="center">
            <a data-postId={dto.PostID.toString()}>
              <div className="votearrow"
                  title="upvote"/>
            </a>
          </div>
        </td>

        <td className="title">
          <a href={dto.Url.toString()}>{dto.Url.toString()}&nbsp;</a>
          <span className="sitebit comhead">(<a href={"http://" + dto.Url.host}>{dto.Url.host}</a>)</span>
        </td>
      </tr>
      
      <tr>
        <td colSpan={2}></td>

        <td className="subText">
          <span className="score">{dto.Points}&nbsp;</span>
          by&nbsp;
          <a href={"user?id=" + dto.Author}
             className="hnuser">
            {dto.Author}&nbsp;
          </a>

          <span className="age">
            <a href={dto.Url.toString()}>{new Date().getDate() - dto.DatePosted.getDate()} minutes ago&nbsp;</a>
          </span>

          <span>
            |&nbsp;
            <a>hide</a>
            |&nbsp;
            <a>{dto.CommentsCount} comments&nbsp;</a>
          </span>
        </td>
      </tr>

      <tr className="spacer" style={{height: "5px" }}></tr>
    </>
    );

  return (
    <div className="App">
      <header className="App-header">
        <table id="hnmain" style={{backgroundColor: "#f6f6ef"}}>
          <tbody>
            <tr>
              <td style={{ width: "18px", paddingRight: "4px"}}>
                <a href="https://news.ycombinator.com">
                  <img src="y18.gif"
                       width="18"
                       height="18"
                       style={{ border: "1px white solid;"}}/>
                </a>
              </td>
              
              <td style={{ lineHeight: "12pt", height: "10px"}}>
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
              
              <td style={{ textAlign: "right", paddingRight: "4px"}}>
                <span className="pagetop"><a href="login?goto=news">login</a></span>
              </td>
            </tr>

            <tr id="pagespace" style={{height: "16px"}}></tr>
            
            <tr>
              <td>
                <table className="itemlist">
                  {renderItems}
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
