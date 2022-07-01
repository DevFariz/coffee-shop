import { Component } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./index.css";
import MainPage from "./pages/Main/Main";
import Our from "./pages/Our/Our";

import CoffeeImg from "./images/coffee-item-img.jpg"
import Pleasure from "./pages/Pleasure/Pleasure";

class App extends Component {

    state = {
        data: [
            {id: 1, name: 'AROMISTICO Coffee 1 kg', image: CoffeeImg, location: 'Brazil', price: '6.99'},
            {id: 2, name: 'AMERICANO  Coffee 1 kg', image: CoffeeImg, location: 'Turkey', price: '3.59'},
            {id: 3, name: 'CAFFÈ LATTE Coffee 1 kg', image: CoffeeImg, location: 'Germany', price: '8.59'},
            {id: 4, name: 'CAPPUCCINO Coffee 1 kg', image: CoffeeImg, location: 'USA', price: '33.33'},
            {id: 5, name: 'DOPPIO Coffee 1 kg', image: CoffeeImg, location: 'USA', price: '299'},
            {id: 6, name: 'COLD BREW Coffee 1 kg', image: CoffeeImg, location: 'Spain', price: '6.45'},
        ]
    }

  render() {
    return (
      <>
        <Header />
        {/* <MainPage /> */}
        <Our data={this.state.data}/>
        {/* <Pleasure /> */}
        <Footer />
      </>
    );
  }
}

export default App;
