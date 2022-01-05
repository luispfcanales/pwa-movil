<script>
  import { UserStore,LoadingAnimation } from "../store/Repository.js"
  let login = true;
  let username = "";
  let password = "";
  let error=false;
  let errorMessage="Usuario o contraseña incorrecta!";
  const loginUser =()=> {
    LoadingAnimation.update(()=>true)
    //simule http endpoint
    setTimeout(()=>{
      if(username === "luis" && password === "canales"){
        LoadingAnimation.update(()=>false)
        error=false
        UserStore.set(
          {
            Username: username,
            Password: password,
          }
        )
        return
      }
      LoadingAnimation.update(()=>false)
      error=true
    },1400)
  }
</script>

<div class:login>
  <div class="content-logo">
    <p>
      <img src={"./images/logo-login.jpg"} alt="logo"/>
    </p>
  </div>
  <form >
    <div class="content">
      <p class="textForm">Username:</p>
      <input 
        type="text"
        bind:value={username}
      />
    </div>
    <div class="content">
      <p class="textForm">Password:</p>
      <input 
        type="password" 
        bind:value={password}
      />
    </div>
    {#if error}
      <div class="content">
        <h3>{errorMessage}</h3>
      </div>
    {/if}
    <div class="content">
      <button class:error
        on:click|preventDefault={loginUser}
      >
        <p>acceder</p>
      </button>
    </div>
  </form>
</div>

<style>
.login{
  background-color:#183c49;
  width:100%;
  height:calc(100vh - 90px);
  overflow-x:hidden;
  display:flex;
  flex-direction:column;
  justify-content:center;
}
.content-logo{
  width:100%;
}
p{text-align:center;}
img{
  width:200px;
  border-radius:50%;
}
.content{
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
}
.textForm{
  color:white;
  font-size:1.2rem;
  font-weight:bold;
  margin-bottom:.3rem;
}
input{
  width:260px;
  border-radius:12px;
  border:2px solid skyblue;
  background-color: #285d70;
  color:white;
}
input:focus{
  border:2px solid #4aff89;
  outline:none;
}
button{
  margin-top:2.3rem;
  min-width:260px;
  border-radius:10px;
  height:3rem;
  font-weight:bold;
  border:3px solid white;
  color:white;
  font-size:1.2rem;
  background-color:#1d9bf0;
  transition-duration:.3s;
}
button:active{
  color:#4db8ff;
  background-color:white;
  border:3px solid #4db8ff;
  outline:none;
}
button:focus{
  border:3px solid #4aff89;
  color:#4aff89;
}
.error{
  margin-top:1rem;
}
h3{
  margin-top:1rem;
  color:red;
  text-shadow:0px 1px 1px #f53d3d,
              0px 0px 12px #f53d3d,
              0px 0px 24px #f53d3d,
              0px 0px 30px #f53d3d;
  font-family:'Nunito';
  font-size:1.3rem;
}
</style>
