<script>
  let login = true;
  let username = "";
  let password = "";
  const loginUser =()=> {
    console.log(username,"...",password)
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
    <div class="content">
      <button 
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
  border:2px solid cyan;
  outline:none;
}
button{
  margin-top:2rem;
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
</style>
