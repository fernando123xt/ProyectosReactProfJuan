/* eslint-disable react/prop-types */
import { useMemo } from "react";
const Header = ({car,removeFromCart,addCar,subtract,clearCart}) => {
    const isEmpty = useMemo(() => car.length===0,[car])
    const carTotal = useMemo(() => car.reduce((total,value)=> total+(value.cantidad*value.price),0),[car])
    //console.log("total: ",carTotal) //pork aparece en consola texto
    return (
        <>
            <header className="py-5 header">
        <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    <a href="index.html">
                        <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                    </a>
                </div>
                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        className="carrito"
                    >
                        <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                            {isEmpty ? (
                                <p className="text-center">El carrito esta vacio</p>
                            ) : (

                            <>
                            <table className="w-100 table">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {car.map(value =>(
                                    <tr key={value.id}>
                                        <td>
                                            <img className="img-fluid" src={`img/${value.image}.jpg`} alt="imagen guitarra" />
                                        </td>
                                        <td>{value.name}</td>
                                        <td className="fw-bold">
                                            {value.price}
                                        </td>
                                        <td className="flex align-items-start gap-4">
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                                onClick={()=> subtract(value.id)}
                                            >
                                                -
                                            </button>
                                                {value.cantidad}
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                                onClick={()=>addCar(value.id)}
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                type="button"
                                                onClick={()=>removeFromCart(value.id)}
                                            >
                                            </button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="text-end">Total pagar: <span className="fw-bold">{carTotal}</span></p>
                            </>
                        )}
                            <button 
                                className="btn btn-dark w-100 mt-3 p-2"
                                onClick={clearCart}
                            >Vaciar Carrito
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>

        </>
    )
}

export default Header
