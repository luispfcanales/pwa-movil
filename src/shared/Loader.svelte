<script>
  import { LoadingAnimation } from "../store/Repository.js"
  import Fa from 'svelte-fa'
  import { faCog } from '@fortawesome/free-solid-svg-icons'
  let loading;
  LoadingAnimation.subscribe(value=>{loading=value;});
</script>
{#if loading}
<div >
  <Fa icon={faCog} size={"6x"} color={"white"} spin/>
</div>
{/if}

<style>
div{
  width:100vw;
  height:calc(100vh - 90px);
  background-color:rgba(0,0,0,.4);
  position:absolute;
  top:0;
  display:flex;
  justify-content:center;
  align-items:center;
}
</style>


