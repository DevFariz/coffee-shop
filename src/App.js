import { Component } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./index.css";
import MainPage from "./pages/Main/Main";
import Our from "./pages/Our/Our";

import CoffeeImg from "./images/coffee-item-img.jpg";
import Pleasure from "./pages/Pleasure/Pleasure";

class App extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "AROMISTICO Coffee 1 kg",
        image: CoffeeImg,
        location: "Brazil",
        price: "6.99",
      },
      {
        id: 2,
        name: "AMERICANO  Coffee 1 kg",
        image: CoffeeImg,
        location: "Kenya",
        price: "3.59",
      },
      {
        id: 3,
        name: "CAFFÈ LATTE Coffee 1 kg",
        image: CoffeeImg,
        location: "Brazil",
        price: "8.59",
      },
      {
        id: 4,
        name: "CAPPUCCINO Coffee 1 kg",
        image: CoffeeImg,
        location: "Columbia",
        price: "33.33",
      },
      {
        id: 5,
        name: "DOPPIO Coffee 1 kg",
        image: CoffeeImg,
        location: "Columbia",
        price: "299",
      },
      {
        id: 6,
        name: "COLD BREW Coffee 1 kg",
        image: CoffeeImg,
        location: "Columbia",
        price: "6.45",
      },
    ],
    text: "",
    filter: "all",
  };

  onUpdateSearch = (text) => {
    this.setState({
      text,
    });
  };

  searchItem = (items, text) => {
    if (text.length === 0) {
      return items;
    }

    return items.filter(
      (item) => item.name.toLowerCase().indexOf(text.toLowerCase()) === 0
    );
  };

  onFilterTab = (filter) => {
   this.setState({
    filter,
   })
  };

  tabFilter(items, filter) {
     // switch (filter) {
    //   case "brazil":
    //     return items.filter((item) => item.location.toLowerCase() === filter);
    //   case "kenya":
    //     return items.filter((item) => item.location.toLowerCase() === filter);
    //   case "columbia":
    //     return items.filter((item) => item.location.toLowerCase() === filter);
    // }
    if(filter === "all"){
      return items
    } else{
      return items.filter((item) => item.location.toLowerCase() === filter);
    }
  }

  render() {
    const { data, text, filter } = this.state;
    const visibleData = this.tabFilter(this.searchItem(data, text), filter);

    return (
      <>
        <Header />
        {/* <MainPage /> */}
        <Our data={visibleData} onUpdateSearch={this.onUpdateSearch} onFilterTab={this.onFilterTab}/>
        {/* <Pleasure /> */}
        <Footer />
      </>
    );
  }
}

export default App;
