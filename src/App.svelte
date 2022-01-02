<script>
import OptionMenuHome from "./components/OptionMenuHome.svelte"
import OptionMenuFavorites from "./components/OptionMenuFavorites.svelte"
import OptionMenuSearch from "./components/OptionMenuSearch.svelte"
import OptionMenuProfile from "./components/OptionMenuProfile.svelte"

//card
import Card from "./components/Card.svelte"
//background-color:#595b83;
</script>

<main>
  <div class="content-render">
    <div class="render">
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
    </div>
  </div>
  <div class="content-menu">
    <div class="content-nav">
      <OptionMenuHome />
      <OptionMenuFavorites />
      <OptionMenuSearch />
      <OptionMenuProfile/>
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
