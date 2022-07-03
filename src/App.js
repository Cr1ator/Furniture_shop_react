import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
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
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders}/>
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id == item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
  // addToOrder(item) {
  //   this.setState({orders: [...this.state.orders, item]}, () => {
  //     console.log(this.state.orders)
  //   })
  // }
}

export default App;
