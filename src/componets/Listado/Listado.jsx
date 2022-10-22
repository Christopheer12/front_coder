import React from 'react'

const Listado = ({items}) => {
    console.log(items)
   return (



    <>
        <div>
        
                <h3 class="text-primary">Listado de productos</h3>
                { items && items.length > 0 ? (
                    <div class="table-responsive">
                        <table class="table table-dark">
                          <thead>
                          <tr class="text-warning">
                               
                                <th class="font-weight-bold">Id</th>
                                <th class="font-weight-bold">Nombre</th>
                                <th class="font-weight-bold">Imagen</th>
                                <th class="font-weight-bold">Lanzamiento</th>
                                <th class="font-weight-bold">Plataforma</th>
                                <th class="font-weight-bold">Orden cronologico</th>
                                <th class="font-weight-bold">Precio</th>
                                
                            </tr>
                          </thead>
                          <tbody>
                          {items.map(producto => (
                                <tr key={producto.id}>
                                    <td>{producto?.id}</td>
                                    <td>{producto?.nombreProducto}</td>
                                    <td><img src={producto?.imagen} width="100" height="100" alt='imagen' /> </td>
                                    <td>{producto?.lanzamiento}</td>
                                    <td>{producto?.plataformas}</td>
                                    <td>{producto?.ordenConologico}</td>
                                    <td>{producto?.precio}</td>
                                    
                                </tr>
                            ))}
                          </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 class="alert alert-danger">no se encontraron datos</h3>
                )}  
            </div>
    </>
   )}


export default Listado