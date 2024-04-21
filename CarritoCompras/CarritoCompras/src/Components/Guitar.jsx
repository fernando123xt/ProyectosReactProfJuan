/* eslint-disable react/prop-types */
const Guitar = ({objeto,addToCar}) => {
  // const handleClick=(objeto)=>{
  //   setCar([...car,objeto]);
  // }
  return (
    <>
      <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src={`/img/${objeto.image}.jpg`} alt="imagen guitarra" />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{objeto.name}</h3>
                    <p> {objeto.description}</p>
                    <p className="fw-black text-primary fs-3">${objeto.price}</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100"
                        onClick={() => addToCar(objeto)}
                    >Agregar al Carrito</button>
                </div>
            </div>
    </>
  )
}
export default Guitar
