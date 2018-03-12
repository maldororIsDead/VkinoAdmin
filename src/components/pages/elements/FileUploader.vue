<template>
        <div class="form-group">
            <div v-if="!image">
                <img class="no-image" src="src/assets/no-image-icon.png" alt="no-image">
            </div>
            <div v-else>
                <img :src="image"/>
            </div>
            <div>
                <label :for="'file' + randInteger" class="btn btn-primary">Добавить фото</label>
                <input type="file" :id="'file' + randInteger" style="visibility:hidden;"
                       @change="onFileChange">
                <button class="btn btn-default" @click="removeImage">Удалить</button>
            </div>
        </div>
</template>

<script>
    export default {
        name: "file-uploader",
        data() {
            return {
                image: '',
                localImg: ''
            }
        },
        computed: {
            randInteger() {
                return Math.round(Math.random());
            }
        },
        methods: {
            onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                let image = new Image();
                let reader = new FileReader();

                reader.onload = (e) => {
                    this.image = e.target.result;
                //    this.localImg = this.image;
                   // console.log(this.localImg);
                 //   this.$emit('update', this.localImg);
                };
                reader.readAsDataURL(file);
            },
            removeImage: function (e) {
                this.image = '';
            }
        }
    }
</script>

<style scoped>
    .form-group img {
        width: 30%;
        margin: auto;
        display: block;
        margin-bottom: 10px;
    }

    .movies-btn_group {
        display: flex;
    }
</style>