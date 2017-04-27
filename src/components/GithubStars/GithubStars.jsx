import React, {Component} from 'react';
import './GithubStars.css';

const DATA = [
  { id: "1", project: "Twitch api" },
  { id: "2", project: "Testing fetch api" },
  { id: "3", project: "Big massive thingy" },
];

class GithubStars extends Component {
  render() {
    return(
      <div className="GithubStars">
        <ul>
          {DATA.map((item, index) =>
            <li key={index}>{item.project}<p><small>2 days ago</small></p></li>
          )}
        </ul>
      </div>
    );
  }
}

export default GithubStars;
