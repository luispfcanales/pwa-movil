<script>
  import Fa from 'svelte-fa'
  import { faHome } from '@fortawesome/free-solid-svg-icons'
  export let color="white";
  export let size="100%"
</script>

<div style={`width: ${size}`}>
    <Fa 
      icon={faHome} 
      size="3x"
      color={color}
    />
</div>

<style>
div{
  height:90px;
  display:flex;
  align-items:center;
  justify-content:center;
  border:1px solid skyblue;
}
</style>
