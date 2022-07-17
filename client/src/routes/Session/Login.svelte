<script>
    import axios from 'axios'

    let ph_username = "Nombre de usuario"
    let ph_password = "Password"

    let userName404 = false
    let blankEntries = false
    let passwordsMatch = true 

    let toggle404 = () =>{
      userName404 = !userName404
    }
    let toggleBlank = () =>{
      blankEntries = !blankEntries
    }
    let toggleMatch = () =>{
      passwordsMatch = !passwordsMatch
    }

    let goHome = () => {
      let presentDir = window.location.href
      let homeDir = presentDir.replace("Session/Login", "")
      window.location.href = `${homeDir}Dashboard/Home` 
    }

    let logIn = async () => {
        if (blankEntries) toggleBlank()
        if (userName404) toggle404()
        if (!passwordsMatch) toggleMatch()
        let userName = document.querySelector('#username').value
        let password = document.querySelector('#password').value 
        let endPoint = `http://localhost:3003/api/Accounts/${userName}`
        if( userName == "" || password == ""){
          toggleBlank()
          document.querySelector('#username').innerHTML = ""
          document.querySelector('#password').innerHTML = ""
        }else{
          if (blankEntries)toggleBlank()
          try{
            const response = await axios.get(endPoint)
            let resPassword = response.data.account_password
            if (password != resPassword){
              passwordsMatch = false 
            }else{
              goHome()
            } 
          }catch(err){
            let status = err.response.status
            if(status == 404){
                userName404 = true 
              }
          }  
        }
        
    }
</script>
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head>

<div class="Login container m-auto">
    <div class="backgroun">
        <div class="container__inputs">
            <input type="text" placeholder={ph_username} id="username">
            {#if userName404}
                <p>Nombre de usuario no encontrado<p>
            {/if}
            <input type="password" placeholder={ph_password} id="password">
            {#if !passwordsMatch}
                <p>Las passwords no coinciden<p>
            {/if}
            {#if blankEntries}
                <p>No pueden hacer campos en blanco<p>
            {/if}
        </div>
        <div class="container__buttons">
            <button on:click={logIn}>Log In</button>
        </div>
    </div>
</div>
