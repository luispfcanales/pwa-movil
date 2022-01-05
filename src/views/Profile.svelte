<script>
  import Fa from 'svelte-fa'
  import { faInfo,faDoorClosed,faSmileBeam } from '@fortawesome/free-solid-svg-icons'
  import { UserStore } from "../store/Repository.js";
  import Btn from "../shared/Btn.svelte";
  let loadImage=false;

  const Logout =()=>{
    UserStore.set(null)
  }
</script>
<div class="Profile-content">
  <div class="content-profile">
    <div class="profile-image">
      {#if loadImage}
        <div class="imageLoading"></div>
      {:else}
        <p class="image-content">
          <img src={"./images/logo-login.jpg"} alt={"profileImage"}/>
        </p>
      {/if}
    </div>
    <div class="profile-data">
      <div class="content-data-profile">
        <h2>
          Bienvenido!
          <Fa icon={faSmileBeam} color={"orange"}/>
        </h2>
        <h3>Luis Angel, Canales</h3>
      </div>
      <div class="content-button-profile">
        <Btn text={"Info"} primary={true}>
          <Fa icon={faInfo}/>
        </Btn>
        <Btn text={"exit"} on:click={Logout}>
          <Fa icon={faDoorClosed}/>
        </Btn>
      </div>
    </div>
  </div>
</div>

<style>
.Profile-content{
  background-color:#f7f7f7;
  width:100%;
  height:calc(100vh - 90px);
  overflow-x:hidden;
  overflow-y:auto;
  display:flex;
  flex-direction:column;
}
.content-profile{
  width:100%;
  height:8rem;
  box-sizing:border-box;
  display:flex;
}
.profile-image{
  width:35%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
.imageLoading {
  box-sizing:border-box;
  width:100px;
  height:100px;
  background-color:gray;
  border-radius:50%;
  margin-top:.8rem;
}
p{
font-weight:bold;
}
.image-content{
  margin:0;
  padding:0;
  text-align:center;
  padding-top:1rem;
  box-sizing:border-box;
}
img{
  margin:0;
  padding:0;
  width:100px;
  height:100px;
  border-radius:50%;
  border:3px solid skyblue;
}

.profile-data{
  width:75%;
}
.content-data-profile{
  width:100%;
  height:70%;
  padding-left:.4rem;
  padding-top:.4rem;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
}
.content-button-profile{
  width:100%;
  height:30%;
  display:flex;
  align-items: center;
  justify-content: space-around;
}
h3{
font-size:1.3rem;
font-family:'Nunito';
color:skyblue;
text-shadow:1px 1px 1px black,1px 2px 2px black;
font-size:1.4rem;
}
h2{
font-family:'Nunito';
font-size:1.6rem;
}
</style>

