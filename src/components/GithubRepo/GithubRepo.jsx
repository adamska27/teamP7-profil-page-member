import React, {Component} from 'react';
import './GithubRepo.css';
import FontAwesome from 'react-fontawesome';

const DATA = [
  { id: "1", project: "Js excercices" },
  { id: "2", project: "Panier Gertrude" },
  { id: "3", project: "Js-express-test" },
];

class GithubRepo extends Component {
  render() {
    return(
      <div className="GithubRepo">
        <ul>
          {DATA.map((item, index) =>
            <li key={index}>{item.project}

              <p className="tag"><small>JavaScript</small></p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default GithubRepo;
