import React from "react";
import Loguearse from "./Loguearse";

const AgregarCliente = () => {
  return (
    <div >
      <form>
<h2 className="tit-lis">Registrar Cliente</h2>
<div class="form-group"> {/* <!-- Full Name --> */}
    <label for="full_name_id" class="control-label">Nombre</label>
    <input type="text" class="form-control" id="full_name_id" name="full_name" placeholder="Name"/>
</div>    

<div class="form-group"> {/* <!-- Street 1 --> */}
    <label for="street1_id" class="control-label">Email</label>
    <input type="text" class="form-control" id="street1_id" name="street1" placeholder="email"/>
</div>                    
                        
<div class="form-group"> {/* <!-- Street 2 --> */}
    <label for="street2_id" class="control-label">Contraseña</label>
    <input type="text" class="form-control" id="street2_id" name="street2" placeholder="Password"/>
</div>    

<div class="form-group"> {/* <!-- City--> */}
    <label for="city_id" class="control-label">Telefono</label>
    <input type="text" class="form-control" id="city_id" name="phone" placeholder="phone"/>
</div>                                    
                        
<div class="form-group"> {/* <!-- Zip Code--> */}
    <label for="zip_id" class="control-label">Direccion</label>
    <input type="text" class="form-control" id="zip_id" name="zip" placeholder="#####"/>
</div>        

<div class="form-group"> {/* <!-- Submit Button --> */}
    <button type="submit" class="btn btn-primary">Enviar</button>
</div>     

</form>
      
    </div>
  );
};

export default AgregarCliente;
