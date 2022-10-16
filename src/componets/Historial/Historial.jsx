import React from 'react'

const Historial = () => {
   return (
    <div>
        <h3 class="text-primary">Personas</h3>
        { productos.length > 0 ? (
            <div class="table-responsive">
                <table class="table table-dark">
                    <tr class="text-warning">
                        <th class="font-weight-bold">Nombre</th>
                        <th class="font-weight-bold">Precio</th>
                        <th class="font-weight-bold">imagen</th>
                    </tr>
                    {productos.map(producto => (
                        <tr>
                            <td>{producto.title}</td>
                            <td>{producto.price}</td>
                            <td><img src={producto.imagen} width="100" height="100" /> </td>
                        </tr>
                    ))}
                </table>
            </div>
        ) : (
            <h3 class="alert alert-danger">no se encontraron datos</h3>
        )}
    </div>
  )
}


export default Historial