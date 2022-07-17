<script>
    let goTo = page => {
        let currentLocation = window.location
        let nextLocation = `${currentLocation}Session/${page}`
        window.location.href = nextLocation
    }
</script>

<div class="index">
    <div class="container">
        <div class="container__img text-orange-900" >Obliterator logo</div>
        <div class="container__buttons">
            <button on:click={()=>goTo("Login")}>Log In</button>
            <button on:click={()=>goTo("Register")}>Register</button>
        </div>
    </div>
</div>
