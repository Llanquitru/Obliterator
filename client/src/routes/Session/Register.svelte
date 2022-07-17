<script>
    let ph_username = "escriba su nombre de usuario"
    let ph_email = "ingrese su email"
    let ph_password = "ingrese su password"
    let ph_password2 = "repita su password"

    let blankEntries = false
    let passwordsMatch = true

    let toggleEntries = () => {
        blankEntries = !blankEntries
    }
    let toggleMatch = () => {
        passwordsMatch = !passwordsMatch
    }

    let register = () => {
        if(!passwordsMatch) toggleMatch()
        let userName = document.getElementById('username').value 
        let userEmail = document.getElementById('email').value
        let password1 = document.getElementById('password').value
        let password2 = document.getElementById('password2').value
        let isArtist = document.getElementById('isArtist').checked
        if (userName == '' || userEmail == '' || password1 == '' || password2 == '') {
            toggleEntries()
        }else{
            if(blankEntries) toggleEntries()
            if(password1 != password2){
                toggleMatch()
            }
        }
    }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head>

<form>
    <!-- Email input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="form2Example1">Nombre de Usuario</label>
      <input type="text" id="form2Example1" class="form-control" />
     
    </div>
    <div class="form-outline mb-4">
        <label class="form-label" for="form2Example2">Correo</label>
        <input type="email" id="form2Example2" class="form-control" />
       
      </div>
  
    <!-- Password input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="form2Example2">Contraseña</label>
      <input type="password" id="form2Example2" class="form-control" />
     
    </div>
    
    <div class="form-outline mb-4">
        <label class="form-label" for="form2Example2">Repetir contraseña</label>
        <input type="password" id="form2Example2" class="form-control" />
       
      </div>
   
    <button type="submit" class="btn btn-primary">Registrarse</button>
   
  </form>






<!-- <div class="Register">
    <p>Nombre de usuario</p>
    <input type="text" id="username" placeholder={ph_username}>
    <p>Correo electronico</p>
    <input type="text" id="email" placeholder={ph_email}>
    <p>Password</p>
    <input type="password" id="password" placeholder={ph_password}>
    <p>Repita su password</p>
    <input type="password" id="password2" placeholder={ph_password2}>
    {#if !passwordsMatch}
        <p>Las passwors no coindciden</p>
    {/if}
    <p>Es usted artista?</p>
    <input type="checkbox" id="isArtist">
    <button on:click={register}>Registrarse</button>
    {#if blankEntries}
        <p>Existen campos en blanco</p>
    {/if}
</div> -->
