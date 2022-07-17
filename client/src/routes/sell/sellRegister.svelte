<script>
 import axios from 'axios'

let ph_model_name = "Nombre del Modelo"
let ph_price = "Ingrese el precio"
let ph_img= "Ingrese la imagen"
let ph_archivo= "ingrese los archivos"


</script>


<!-- <svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head> -->

<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre Modelo</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Precio</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  
  <div class="mb-3">
    <label for="formFile" class="form-label">Imagen</label>
    <input class="form-control" type="file" id="Imagen">
  </div>
  <div class="mb-3">
    <label for="formFile" class="form-label">Archivo</label>
    <input class="form-control" type="file" id="archivo">
  </div>
 
  <button type="submit" class="btn btn-danger">Vender</button>
</form>
