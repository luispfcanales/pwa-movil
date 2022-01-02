<script>
import Fa from 'svelte-fa'
import { faHome,faSearch,faBookmark,faUser } from '@fortawesome/free-solid-svg-icons'
import NavStore from "./store/Repository.js";
import OptionMenu from "./components/OptionMenu.svelte"
//card
import Card from "./components/Card.svelte"
//background-color:#595b83;
</script>

<main>
  <div class="content-render">
    <div class="render">
      {#if $NavStore[0]}
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
      {:else if $NavStore[1]}
        <h1>Bookmark</h1>
      {:else if $NavStore[2]}
        <h1>Search</h1>
      {:else if $NavStore[3]}
        <h1>Profile</h1>
      {/if}
    </div>
  </div>
  <div class="content-menu">
    <div class="content-nav">
      <OptionMenu buttonId={0} press={$NavStore[0]}>
        <Fa icon={faHome} size={"3x"} color={"white"}/>
      </OptionMenu>
      <OptionMenu buttonId={1} press={$NavStore[1]}>
        <Fa icon={faBookmark} size={"3x"} color={"white"}/>
      </OptionMenu>
      <OptionMenu buttonId={2} press={$NavStore[2]}>
        <Fa icon={faSearch} size={"3x"} color={"white"}/>
      </OptionMenu>
      <OptionMenu buttonId={3} press={$NavStore[3]}>
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
