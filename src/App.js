import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1, 
          title: 'Стул синий', 
          img: 'chair.jpg', 
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2, 
          title: 'Стол', 
          img: 'table.jpg', 
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 
          category: 'tables', 
          price: '149.00'
        },
        {
          id: 3, 
          title: 'Диван', 
          img: 'sofa.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 
          category: 'sofa', 
          price: '549.99'
        },
        {
          id: 4, 
          title: 'Стул синий', 
          img: 'chair.jpg',  
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 5, 
          title: 'Стол', 
          img: 'table.jpg', 
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 
          category: 'tables', 
          price: '149.00'
        },
        {
          id: 6, 
          title: 'Диван', 
          img: 'sofa.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 
          category: 'sofa', 
          price: '549.99'
        }
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items}/>
        <Footer />
      </div>
    );
  }
}

export default App;
