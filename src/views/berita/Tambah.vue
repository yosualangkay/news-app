<template>
    <div class="container my-5">
       <div class="row justify-content-center">
           <div class="col-8">
               
               <div class="card rounded shadow">
                   <div class="card-header">
                       Tambah Berita
                   </div>

                   <div class="card-body">
                        <form @submit.prevent="tambah()">
                            <div class="mb-3">
                                <label for="" class="form-label">Judul Berita</label>
                            <input type="text" class="form-control" v-model="berita.judul_berita">
                            <div class="text-danger" v-if="validation.judul_berita">
                                {{validation.judul_berita[0]}}
                            </div>
                            </div>

                            <div class="mb-3">
                                <label for="" class="form-label">Isi Berita</label>
                            <input type="text" class="form-control" v-model="berita.isi_berita">
                            <div class="text-danger" v-if="validation.isi_berita">
                                {{validation.isi_berita[0]}}
                            </div>
                            </div>


                            <div class="mb-3">
                                <label for="" class="form-label">Kategori</label>
                            <select name="" id="" class="form-select" v-model="berita.kategori">
                                <option value="hiburan">Hiburan</option>
                                <option value="olahraga">Olahraga</option>
                                <option value="ekonomi">Ekonomi</option>
                            </select>
                            <div class="text-danger" v-if="berita.kategori">
                                {{validation.kategori}}
                            </div>
                            </div>

                            <div class="mb-3">
                                <label for="" class="form-label">Link Gambar Berita</label>
                            <input type="text" class="form-control" v-model="berita.image">
                            <div class="text-danger" v-if="validation.isi_berita">
                                {{validation.image[0]}}
                            </div>
                            </div>

                            <EditorContent :editor="editor" />

                            <!-- <div class="mb-3">
                            <label for="formFile" class="form-label">Gambar</label>
                            <input disabled name="image" id="images" class="form-control" type="file" @change="onImageChange">
                            </div> -->

                            <button class="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>

                   
               </div>
           </div>
       </div>
   </div>
</template>

<script>
import { reactive, ref } from 'vue'
import {useRouter} from 'vue-router'
import axios from 'axios';
import { useEditor, EditorContent} from '@tiptap/vue-3'
import StaterKit from '@tiptap/starter-kit';


export default {
   setup(){
       //data binding
       const berita = reactive({
           judul_berita: '',
           isi_berita: '',
           kategori: '',
           image: ''
       });

       const editor = useEditor({
        content:"<p>Text Area</p>",
        extensions: [StaterKit]
       });

       const validation = ref([])

       const router = useRouter();

       function tambah() {
           axios.post(
               'http://127.0.0.1:8000/api/berita',
               berita
           )
           .then(() => {
               router.push({
                   name: 'berita.beranda'
               })
           }).catch((err) => {
               validation.value = err.response.data
           });
       }

       return {
            berita,
            validation,
            router,
            tambah,
            editor
       }
   }
}
</script>