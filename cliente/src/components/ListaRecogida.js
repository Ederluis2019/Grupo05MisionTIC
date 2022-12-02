import React from 'react'

const ListaRecogida = () => {
  return (
      <div>
      <h2 className='tit-lis'>Listado de servicios programados</h2>
      <table class="table">
  <thead class="thead-dark">
  <tr>
      <th scope="col">#Servicio</th>
      <th scope="col">Fecha</th>
      <th scope="col">Ciudad Entrega</th>
      <th scope="col">Dirección Entrega</th>
      <th scope="col">Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
            <td>@mdo</td>
            <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
            <td>@fat</td>
            <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
    </tr>
  </tbody>
</table>

<table class="table">
  <thead class="thead-light">
   
  </thead>
  <tbody>
    
   
   
  </tbody>
</table>
    </div>
  )
}

export default ListaRecogida