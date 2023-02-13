<template>
    <div class="container mt-3 mb-5">
      
            <img :src="berita.image" alt="image" class="img-fluid" style="width: 100%;">
            
    

            <h2 class="text-start">{{ berita.judul_berita }}</h2>   
            <p class="text-start">{{ berita.time }}</p>     
                
             <h5 class="text-start">{{ berita.isi_berita }}</h5>

    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import {useRouter, useRoute} from 'vue-router'
import axios from 'axios';

    export default {
        setup(){
            //data binding
        let berita = reactive({
            isi_berita: '',
            time: '',
            judul_berita: '',
            image: ''
        });

        const validation = ref([]);

        const router = useRouter();
        const route = useRoute();

        onMounted(() => {
        axios.get(`http://127.0.0.1:8000/api/berita/${route.params.id}`)
        .then((result) => {
            berita.judul_berita = result.data.data.judul_berita
            berita.time = result.data.data.time
            berita.isi_berita = result.data.data.isi_berita
            berita.image = result.data.data.image
            
        }).catch((err) => {
            console.log(err.response.data)
        });
    }); 

        return {
            berita,
            validation,
            router,
            
            
        }
    }
}
</script>