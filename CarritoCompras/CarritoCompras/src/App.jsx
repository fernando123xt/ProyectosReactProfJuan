import Header from "./Components/Header"
import Guitar from "./Components/Guitar"
import { useState,useEffect } from "react"
import { db } from "./data/bd"

function App() {
  const [data,setData] = useState(db);
  const [car,setCar] = useState([]);

  function addToCar(item){
    const itemExists = (car.findIndex(element => element.id === item.id))
    if(itemExists>=0){//existe element
      console.log("ya existe");
      const copytemp = [...car];
      copytemp[itemExists].cantidad++;
      setCar(copytemp);

    }
    else{
      item.cantidad = 1;
      setCar(prevCar => [...prevCar,item])

    }
  }
  return (
    <>
    <Header/>
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
