<script>
    import gsap from 'gsap'
    import { onMount } from 'svelte'
    onMount(()=>{
        gsap.to('.container__form',{
            opacity: 1,
            duration: 1.5
        })
        gsap.from('.container__form',{
            x: -200,
            duration: 1.5
        })
    })

    let goHome = () => {
        let currentLocation = window.location.href
        
        }

    let blankEntries = false
    let toggleBlank = () => blankEntries = !blankEntries

    let login = () => {
        if (blankEntries) toggleBlank()
        let username = document.querySelector('#username').value
        let paswword = document.querySelector('#password').value
        let usernameBlank = username == ''
        let passwordBlank = paswword == ''
        if ( usernameBlank || passwordBlank){
            toggleBlank()
        } else {
            goHome()
        }
    }
</script>

<div class="Login flex flex-row min-h-screen justify-center items-center bg-primary">
    <div class="w-full max-w-xs bg-secondary opacity-0 container__form">
        <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input class="appearance-none w-full py-2 px-3 text-primary leading-tight bg-secondary placeholder-secondary focus:placeholder-primary focus:outline-0" id="username" type="text" placeholder="Username">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="appearance-none w-full py-2 px-3 text-primary leading-tight bg-secondary placeholder-secondary focus:placeholder-primary focus:outline-0" id="password" type="password" placeholder="******************">
            {#if blankEntries}
                <p class="text-red-500 text-xs italic">No pueden hacer campos en blanco</p>
            {/if}
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 underline m-auto hover:bg-blue-700 text-white font-bold py-0  rounded focus:outline-none focus:shadow-outline" type="button" on:click={() => login()}>
              Sign In
            </button>
          </div>
        </form>
        <p class="text-center text-accent bg-primary text-xs pt-5">
          &copy;2022 Obliterator. All rights reserved.
        </p>
    </div>
</div>