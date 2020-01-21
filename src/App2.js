import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerms: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {

    // Jika this.setState di bawah itu di comment, nilai text box tidak akan berubah
    // Karena, di React input tidak dapat merubah valuenya secara langsung.

    this.setState({
      searchTerms: e.target.value,
    });
  }

  render() {
    const { products } = this.props;
    const searchTerms = this.state.searchTerms.trim().toLowerCase();
    let filteredProducts = products;

    // Pencarian dengan menggunakan filter

    if (searchTerms.length > 0) {
      filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().indexOf(searchTerms) !== -1;
      });
    }

    return (
      <form id="app">
        <div className="search">
          <input
            type="text"
            placeholder="Masukkan kata kunci pencarian"
            onChange={this.handleChange}
          />
        </div>

        <ul>
          {filteredProducts.map((product, index) => {
            return (
              <li key={index}>
                <p>{product.name}</p>
              </li>
            )
          })}
        </ul>
      </form>
    );
  }
}