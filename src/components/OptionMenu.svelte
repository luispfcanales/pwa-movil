<script>
  import NavStore from "../store/Repository.js";
  export let buttonId=0;
  export let press=false;
  export let size="100%";
  
  const btnPress =()=> {
    NavStore.update(currentData => {
      currentData[0]=false
      currentData[1]=false
      currentData[2]=false
      currentData[3]=false
      currentData[buttonId]=true
      return currentData
    })
  }
</script>

<div on:click={btnPress} class:press style={`width: ${size}`}>
  <slot></slot>
</div>

<style>
div{
  height:90px;
  display:flex;
  align-items:center;
  justify-content:center;
}
.press{
  background-color:darkslateblue;
}
</style>
