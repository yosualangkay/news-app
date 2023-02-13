<template>
    <div class="container my-5">

        <h1>Olahraga</h1>

        <li class="" v-for="(berita, index) in berita.data" :key="index">
            <div class="card w-100">
                <div class="card-body" >

                    <div class="row" >
                        <div class="col-2"><img class="w-100" :src="berita.image" alt="gambar"></div>
                        <div class="col-8">
                            <p class="ktg">{{ berita.kategori }}</p>
                            <router-link 
                            :to="{name: 'berita.detail', params:{id:berita.id}}" class="h5">{{ berita.judul_berita }}</router-link>
                            <p>{{ berita.time }}</p>
                            
                            
                        </div>
                            
                    </div>
                    
                </div>
                
            </div>
            <hr>
        </li>
        
    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import {useRouter, useRoute} from 'vue-router'
import axios from 'axios';

export default {
    setup() {        

        let berita = ref([]);
        
        const validation = ref([]);

        onMounted(() => {
            //get data from api
            axios.get('http://127.0.0.1:8000/api/olahraga')
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
}
.card{
    border-style: none;
}
a.h5{
    color:brown;
}
.ktg {
    text-transform: capitalize;
    font-weight: bold;
}
</style>