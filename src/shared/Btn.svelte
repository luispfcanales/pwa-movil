<script>
export let text="text";
export let primary=false;
</script>

<button class:primary on:click>
  <slot/>
  {text.toUpperCase()}
</button>

<style>
button{
  box-sizing:border-box;
  width:100px;
  height:1.9rem;
  padding:0;
  margin:0;
  color:white;
  background-color:#ed0028;
  font-weight:bold;
  font-size:1.2rem;
  border:2px solid black;
  border-radius:12px;
  text-align:center;
}
.primary{
  background-color:#808080;
}
</style>
