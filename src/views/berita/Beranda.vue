<template>
    <div class="container mt-3 mb-5">
        <h3>Populer</h3>

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner" >
        <div class="carousel-item " v-for="(berita, index) in berita.data" :key="index">
            <router-link :to="{name: 'berita.detail', params:{id:berita.id}}">
            <div class="card text-bg-dark">
                <img :src=" berita.image " class="img-slide card-img" alt="...">
                <div class="card-img-overlay">
                    <h5 class="card-title">{{ berita.judul_berita }}</h5>
                    <p class="card-isi-berita card-text">{{ berita.isi_berita }}</p>
                    <p class="card-text"><small>{{ berita.time }}</small></p>
                </div>
                </div>
            </router-link>
        </div>
        <div class="carousel-item">
            <div class="card text-bg-dark">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUR9UmHyffhcdwmnXUvhQOy_0yxmJCIA5QAA&usqp=CAU" class="card-img" alt="...">
                <div class="card-img-overlay">
                    <h5 class="card-title">cscsc</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small>Last updated 3 mins ago</small></p>
                </div>
                </div>
        </div>
        
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
        
    <h4>Terbaru</h4>
        <div class="row">

            <div class="col-8">
                <li class="" v-for="(berita, index) in berita.data" :key="index">
            <div class="card w-100">
                <div class="card-body p-0" >

                    <div class="row" >
                        <div class="col-4"><img class="img-list w-100 rounded"  :src="berita.image" alt="gambar"></div>
                        <div class="col-8">
                            <p class="ktg">{{ berita.kategori }}</p><router-link 
                            :to="{name: 'berita.detail', params:{id:berita.id}}" class="h5">{{ berita.judul_berita }}</router-link>
                            <p class="isi-berita">{{ berita.isi_berita }}</p>
                            <p>Posted on: {{ berita.time }}</p>

                            
                        </div>
                            
                    </div>
                    
                </div>
                
            </div>
            <hr>
        </li>
            </div>

            <div class="col-2">
                <div class="card " style="width: 200%;">
                <div class="card-header">
                    Kategori Berita
                </div>
                <ul class="list-group list-group-flush">
                    <router-link class="list-group-item" to="/olahraga">Olahraga</router-link>
                    <router-link class="list-group-item" to="/hiburan">Hiburan</router-link>
                    <router-link class="list-group-item" to="/ekonomi">Ekonomi</router-link>
                    
                </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import {useRouter, useRoute} from 'vue-router'
import axios from 'axios';
import $ from 'jquery';

export default {
    setup() {        

        let berita = ref([]);
        
        const validation = ref([]);

        onMounted(() => {
            var multipleCardCarousel = document.querySelector(
                    "#carouselExampleControls"
                    );
                    if (window.matchMedia("(min-width: 768px)").matches) {
                    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
                        interval: false,
                    });
                    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
                    var cardWidth = $(".carousel-item").width();
                    var scrollPosition = 0;
                    $("#carouselExampleControls .carousel-control-next").on("click", function () {
                        if (scrollPosition < carouselWidth  ) {
                        scrollPosition += cardWidth;
                        $("#carouselExampleControls .carousel-inner").animate(
                            { scrollLeft: scrollPosition },
                            600
                        );
                        }
                    });
                    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
                        if (scrollPosition > 0) {
                        scrollPosition -= cardWidth;
                        $("#carouselExampleControls .carousel-inner").animate(
                            { scrollLeft: scrollPosition },
                            600
                        );
                        }
                    });
                    } else {
                    $(multipleCardCarousel).addClass("slide");
                    }
            //get data from api
            axios.get('http://127.0.0.1:8000/api/berita')
            .then((result) => {
                berita.value = result.data
            }).catch((err) => {
                console.log(err.reponse)
            });
        });

        

        return {
            berita,
            validation,
            
        }
    }
}

</script>

<style>
li{
    list-style-type: none;
    margin: 0%;
}
.card{
    border-style: none;
    margin: 0%;
}
.card-isi-berita{
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
a.h5{
    text-transform: capitalize;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;

}

a.h5:hover{
    color: #00425A;
}
.ktg {
    color:brown;
    text-transform: capitalize;
    font-weight:500;
    font-size: 14px;
    margin-bottom: 0;
}
.isi-berita{
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
}
.img-slide{
    opacity: 0.5;
}
.carousel-inner {
  padding: 1em;
}
.card {
  margin: 0 0.5em;
  box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
  border: none;
}
.carousel-control-prev,
.carousel-control-next {
  background-color: #e1e1e1;
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}
@media (min-width: 768px) {
  .carousel-item {
    margin-right: 0;
    flex: 0 0 33.333333%;
    display: block;
  }
  .carousel-inner {
    display: flex;
  }
}
.card .img-wrapper {
    max-width: 100%;
    height: 13em;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card img {
    max-height: 100%;
}
@media (max-width: 767px) {
  .card .img-wrapper {
    height: 17em;
  }
}

</style>
