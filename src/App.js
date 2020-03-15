import React, { Component } from 'react';
import './App.css';
import  Car from './Car/Car';

class App extends Component {
  state = {
    cars: [
      {name: 'Ford', year: 2015},
      {name: 'Audi', year: 2007},
      {name: 'BMW', year: 2019}
    ],
    pageTitle: "Приветики",
    showCars: false,
    
  }
  changeTitleHandler = (pageTitle) => {
    this.setState({pageTitle})
  } 
  toogleCarsHandlers = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }


 
  render() {
    let cars = null;
    if(this.state.showCars ) {
        cars = this.state.cars.map((car,index)=> {
        return (
          <Car 
            key={index}
            name={car.name} 
            year={car.year} 
            onChangeTitle={()=>this.changeTitleHandler(car.name)}
          />
        )
      })
    }
    return (
      <div className="App" >
        <h1>{this.state.pageTitle}</h1>
       
        <button onClick={this.toogleCarsHandlers} >{ this.state.showCars ? "Скрыть" : "Показать" }</button>        
        {cars}
      </div>
    );
  }
}

export default App;
