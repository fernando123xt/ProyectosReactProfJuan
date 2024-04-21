/* eslint-disable no-unused-vars */
import Header from "./Components/Header"
import Guitar from "./Components/Guitar"
import { useState,useEffect } from "react"
import { db } from "./data/bd"

function App() {
  const initialCart = () =>{
    const localStorageCart = localStorage.getItem('myDate');
    // if(localStorageCart){
    //   return JSON.parse(localStorageCart);
    // }
    // return [];
    return localStorageCart ? JSON.parse(localStorageCart) : [] 
  }
  const [data] = useState(db);
  const [car,setCar] = useState(initialCart);

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  useEffect (()=>{
    localStorage.setItem('myDate',JSON.stringify(car))
  },[car])

  function addToCar(item){
    const itemExists = (car.findIndex(element => element.id === item.id))
    if(itemExists>=0){//existe element
      // console.log("ya existe");
      if(car[itemExists].cantidad >= MAX_ITEMS) return
      const copytemp = [...car];
      copytemp[itemExists].cantidad++;
      setCar(copytemp);

    }
    else{
      item.cantidad = 1;
      setCar(prevCar => [...prevCar,item])

    }
  }
  const removeFromCart = (id) =>{
    // const tempCar = car.filter((value)=> {
    //   return value.id != id;
    // });
    // setCar(tempCar);
    setCar(car.filter((value) => value.id !==id));
  }
  const addCar = (id) =>{
    const temCar = car.map((value)=>{
      if(value.id === id && value.cantidad<MAX_ITEMS){
        return{
          ...value,
          cantidad: value.cantidad+1
        }
      }
      return value;
    })
    setCar(temCar);
  }
  const clearCart = () =>{
    setCar([]);
  }
  const subtract = (id) =>{
    const temCar = car.map((value) => {
      if(value.id === id && value.cantidad>MIN_ITEMS){
        return {
          ...value,
          cantidad: value.cantidad-1
        }
      }
      return value;
    })
    setCar(temCar);
  }
  return (
    <>
    <Header
      car={car}
      removeFromCart = {removeFromCart}
      addCar={addCar}
      subtract={subtract}
      clearCart={clearCart}
    />
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            data.map((guitar)=>(
              <Guitar key={guitar.id}
                objeto={guitar}
                addToCar = {addToCar}
              />
            ))
          }
        </div>


    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer> 
    </>
  )
}

export default App
