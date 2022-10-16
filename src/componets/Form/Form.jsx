import React from "react";

const Form = () => {
  return (
    <>
      <h3 className="text-primary">Ingrese Datos</h3>
      <br />

      <form action="/" method="post">
        <div className="form-group">
          <label for="nombreProducto" className="font-weight-bold">
            Entrega:
          </label>
          <input type="text" name="nombreProducto" className="form-control" />
        </div>
      
        <div className="form-group">
          <label for="imagen" className="font-weight-bold">
            Url Foto
          </label>
          <input type="text" name="imagen" className="form-control" />
        </div>

        <div className="form-group">
          <label for="lanzamiento" className="font-weight-bold">
          Lanzamiento
          </label>
          <input type="number" name="lanzamiento" className="form-control" />
        </div>

        <div className="form-group">
          <label for="plataformas" className="font-weight-bold">
          Plataformas
          </label>
          <input type="number" name="plataformas" className="form-control" />
        </div>

        <div className="form-group">
          <label for="ordenConologico" className="font-weight-bold">
          Orden Cronologico
          </label>
          <input type="number" name="ordenConologico" className="form-control" />
        </div>

        <div className="form-group">
          <label for="precio" className="font-weight-bold">
          Precio
          </label>
          <input type="number" name="precio" className="form-control" />
        </div>
      
        <input
          type="submit"
          value="Enviar"
          className="btn btn-success mt-3 mb-5"
        />
      </form>
    </>
  );
};

export default Form;
