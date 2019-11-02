<template>
  <div id="app">          
      <themed-nav>
      <li><a class="size">Dependency scanner</a></li>
      <li><router-link to='/' exact>Scan</router-link></li>
      <li><router-link to='/profile' exact>Profile</router-link></li>     
    </themed-nav>
    <router-view />      
  </div>
</template>

<style>
#app{
  margin-bottom: 20px
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;  
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 14px;
  text-decoration: none;
}

li a:hover {
  background-color: #418E98;
}
.size{
  font-size: 20px;
}
</style>

