<script>
import Fa from 'svelte-fa'
import { faHome,faSearch,faBookmark,faUser } from '@fortawesome/free-solid-svg-icons'
//store
import { NavStore,UserStore } from "./store/Repository.js";
import OptionMenu from "./components/OptionMenu.svelte"
//views render
import Profile from "./views/Profile.svelte";
import Login from "./views/Login.svelte";
//card
import Card from "./components/Card.svelte"
import Loader from "./shared/Loader.svelte";
//background-color:#595b83;

let UserLogin;
let Routing;

UserStore.subscribe(value =>{ UserLogin = value; });
NavStore.subscribe(value =>{ Routing = value; });

</script>

<main>
  <div class="content-render">
    <div class="render">
      {#if Routing[0]}
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      {:else if Routing[1]}
        <h1>Bookmark</h1>
      {:else if Routing[2]}
        <h1>Search</h1>
      {:else if Routing[3]}
        {#if !UserLogin  }
          <Login/>
        {:else}
          <Profile/>
        {/if}
      {/if}
    </div>
    <Loader/>
  </div>
  <div class="content-menu">
    <div class="content-nav">
      <OptionMenu buttonId={0} press={Routing[0]}>
        <Fa icon={faHome} size={"3x"} color={"white"}/>
      </OptionMenu>
      <OptionMenu buttonId={1} press={Routing[1]}>
        <Fa icon={faBookmark} size={"3x"} color={"white"}/>
      </OptionMenu>
      <OptionMenu buttonId={2} press={Routing[2]}>
        <Fa icon={faSearch} size={"3x"} color={"white"}/>
      </OptionMenu>
      <OptionMenu buttonId={3} press={Routing[3]}>
        <Fa icon={faUser} size={"3x"} color={"white"}/>
      </OptionMenu>
    </div>
  </div>

</main>

<style>
        :global(body){
          margin:0;
          padding:0;
        }
	main {
                width:100%;
                background-color:#f6f6f6;
                position:relative;
	}
        .content-render {
          width:100%;
          height:calc(100vh - 90px);
          margin-bottom:300px;
          overflow-y:auto;
        }
        .render{
          display:flex;
          flex-wrap:wrap;
          position:relative;
        }
        .content-menu{
          position:fixed;
          width:100%;
          bottom:0px;
        }
        .content-nav{
          background-color:#406882;
          width:100%;
          display:flex;
          justify-content:space-around;
        }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
