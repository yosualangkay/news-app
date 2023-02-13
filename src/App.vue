<template>
  <nav class="navbar navbar-expand-lg shadow" style="background-color: #00425A;">
          <div class="container">
        
            <a href="" class="navbar-brand"><img src="./assets/yosh.png" alt="" style="width: 50%;"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav p-1">
                <li class="nav-item">
                <router-link  class="nav-link" aria-current="page" href="#" to="/beranda">Beranda</router-link>
                </li>
                <li class="nav-item">
                  <router-link  class="nav-link" aria-current="page" href="#" to="/berita">Berita</router-link>
                </li>
                <li class="nav-item">
                  <router-link  class="nav-link" aria-current="page" href="#" to="/ekonomi">Ekonomi</router-link>
                </li>
                <li class="nav-item">
                  <router-link  class="nav-link" aria-current="page" href="#" to="/hiburan">Hiburan</router-link>
                </li>
                <li class="nav-item">
                  <router-link  class="nav-link" aria-current="page" href="#" to="/olahraga">Olahraga</router-link>
                </li>
                
            </ul>
            
            </div>
              <!-- <form class="d-flex me-2" role="search" >
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-secondary" type="submit">Search</button>
            </form> -->

            <router-link  class="btn btn-primary" aria-current="page" href="#" to="/tambah">Tambah Berita</router-link>

        </div>
        </nav>
        <marquee direction="" style="background-color: #1F8A70;">
          <div>
            <p class="text-jalan m-2" style="color: yellow; font-weight: bold;">Berita terbaru setiap hari!</p>
          </div>
        </marquee>

  <router-view/>
  <Footer />
</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Beranda from './components/Beranda.vue';
import Tambah from './views/berita/Tambah.vue';

export default {
  name: 'App',
  components:{
    Header,
    Footer,
    Beranda,
    Tambah
  }
}
</script>

<style>
a.nav-link{
  font-size: 16px;
  margin-left: 2%;
  font-weight: bold;
  color: aliceblue;
}
a.navbar-brand{
  margin: 0%;
  margin-right: -10%;
}
button.masuk-btn{
  background-color: rgb(119, 119, 119);
  color: aliceblue;
}
</style>
