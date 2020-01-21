import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './component/Home';
import Digimon from './component/Digimon';

class App extends React.Component {
  state = {
    digimon: []
};


componentDidMount() {
  fetch("https://digimon-api.herokuapp.com/api/digimon")
    .then(response => response.json())
    .then(data => this.setState({ digimon: data }));
}


render() {
  return (
    <Router>
      <div>
        <Switch>
          <Route 
            exact 
            path="/"
            component = {Home}
          />
          <Route
            exact
            path="/digimons"
            render={() => (
              <div>
                <Digimon
                  digimon = {this.state.digimon}
                />
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}
}

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       searchTerms: "",
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {

//     // Jika this.setState di bawah itu di comment, nilai text box tidak akan berubah
//     // Karena, di React input tidak dapat merubah valuenya secara langsung.

//     this.setState({
//       searchTerms: e.target.value,
//     });
//   }

//   render() {
//     const { products } = this.props;
//     const searchTerms = this.state.searchTerms.trim().toLowerCase();
//     let filteredProducts = products;

//     // Pencarian dengan menggunakan filter

//     if (searchTerms.length > 0) {
//       filteredProducts = products.filter((product) => {
//         return product.name.toLowerCase().indexOf(searchTerms) !== -1;
//       });
//     }

//     return (
//       <form id="app">
//         <div className="search">
//           <input
//             type="text"
//             placeholder="Masukkan kata kunci pencarian"
//             onChange={this.handleChange}
//           />
//         </div>

//         <ul>
//           {filteredProducts.map((product, index) => {
//             return (
//               <li key={index}>
//                 <p>{product.name}</p>
//               </li>
//             )
//           })}
//         </ul>
//       </form>
//     );
//   }
// }

export default App;