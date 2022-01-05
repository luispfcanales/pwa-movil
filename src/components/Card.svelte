<script>
  import Fa from 'svelte-fa'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'
  let loading = true;

</script>

<div class={"content-card"}>
  <div class={"content-header"}>
    <div class={"header"}>
      <div class={"rounded-profile"} class:loading></div>
    </div>
    <div class={"content-favorites"}>
      <Fa 
        icon={faBookmark}
        color={"gray"}
        size={"2x"}
      />
    </div>
  </div>
  <div class={"content-body"} class:loading></div>
</div>

<style>
  .content-card{
    width:calc(50vw - 1.4rem);
    height:12rem;
    margin:.4rem auto;
    box-shadow: 0 1px 2px 2px rgba(0,0,0,.3);
    border-radius:.3rem;
    display:flex;
    flex-direction:column;
  }
  .content-header{
    width:100%;
    height:25%;
    display:flex;
  }
  .content-body{
    width:100%;
    height:55%;
    background-color:gray;
  }
  .header{
    width:75%;
    display:flex;
    align-items:center;
  }
  .rounded-profile{
    background-color:gray;
    width:40px;
    height:40px;
    border-radius:50%;
    margin-left:3px;
  }
  .loading{
    animation-name:changeColor;
    animation-duration:3s;
    animation-iteration-count:infinite;
  }

  @keyframes changeColor {
    0% { background-color:gray;}
    25% { background-color:#949494;}
    50% {background-color:#8b8b8b;}
    75% { background-color:#949494;}
    100% {background-color:gray;}
  }
</style>
