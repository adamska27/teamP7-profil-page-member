import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavbarInstance from '../components/HeaderPublic/Navbar.jsx';
import GridInstance from '../components/footerPublic/grid.jsx';


class ListeUsers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
    componentDidMount() {
      fetch(`${window.location.origin}/users`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          data: json
        })
        console.log("data",this.state.data);
      });
    }

  render() {
    return (
      <div>
        <NavbarInstance />
        <ul>
          {this.state.data.map( (item) =>
            <Link to={`${item.id}`}><li>{item.nom} </li></Link>
          )}
        </ul>
      </div>
    );
  }

}

export default ListeUsers;
