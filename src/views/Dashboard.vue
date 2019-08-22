<template>
    <div>
        <base-header type="gradient-dark" class="pb-5 pb-5 pt-0 pt-md-4">
            <!-- Card stats -->
        </base-header>
        <div v-if="isLoaded == false" style="display: flex; align-items: center; justify-content: center;height: 100vh;">
            <moon-loader loading="loading" :color="loader.color" :size="loader.size"></moon-loader>
        </div>
        <!--Charts-->
        <div v-if="isLoaded" class="container-fluid mt--0 pb-5 pt-1 pt-md-2">
            <!--Tables-->
            <card shadow type="secondary" :key="item.id" v-for="item in questions">
                 <div v-if = "item.type=='select'">
                    <small>{{item.data.question}}</small>
                    <base-radio v-for="(qitem, index) in item.data.articles" :key="item.id + '-' + index" :name="item.id + '-' + index" 
                    class="mb-3" v-model="item.answer">{{qitem}}</base-radio>
                </div>
                <div v-if = "item.type=='check'">
                    <small>{{item.data.question}}</small>
                    <base-checkbox v-for="(qitem, index) in item.data.articles" :key="item.id + '-' + index" name="item.id + '-' + index" 
                    class="mb-3"  v-model="item.answer[index]">{{qitem}}</base-checkbox>
                </div>
                <div v-if = "item.type=='text'">
                    <small>{{item.data.question}}</small>
                    <base-input class="mb-3" v-model="item.answer"></base-input>
                </div>
                <div v-if = "item.type=='table'">
                    <small>{{item.data.question}}</small>
                    <vue-good-table :columns="item.data.table.columns" :rows="item.data.table.rows" />
                </div>
                <div v-if = "item.type=='file'">
                    <small>{{item.data.question}}</small>
                    <base-radio v-for="(qitem, index) in item.data.articles" :key="item.id + '-' + index" :name="item.id + '-' + index" 
                    class="mb-3" v-model="item.answer">{{qitem}}</base-radio>
                     <base-input name="myFile" type="file"/>   
                </div>
            </card>
        </div>
        <div class="text-center">
            <base-button type="primary" v-on:click="submit" class="my-4">Submit</base-button>
            <base-button type="primary" v-on:click="reset" class="my-4">Reset</base-button>
        </div>
    </div>
</template>
<script>
// Charts

// Tables
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table/src";
import MoonLoader from 'vue-spinner/src/MoonLoader.vue';
export default {
    components: {
        VueGoodTable,
        MoonLoader
    },
    data() {
        return {
            isLoaded: true,
            loader: {
                color: '#cc181e',
                color1: '#5bc0de',
                size: '145px',
            },
            questions: [],
            cid: 0,
            radio: {
                radio1: "radio1",
                radio2: "radio1-1"
            },
            loginService: this.$service.$loginservice,
            contentsService: this.$service.$contentsservice
        };
    },
    async created() {
        let result = await this.loginService.getAuthenticated();
        if (!result) {
            this.$router.push("login");
        } else {
            const category_subject = this.contentsService.categoryChangeSubject;
            category_subject.subscribe( id => {
                this.loadCategoryInfo(id);
            });
        }
    },
    methods: {
        async submit() {
            console.log('submit pushed');
            const result = await this.contentsService.addAnswers(this.cid, this.questions);
            if(result) {
                await this.$swal('success submit');
            } else {
                await this.$swal('fail submit');    
            }
        },
        reset() {

        },

        async getAnswersFromServer() {

        },
      
        async loadCategoryInfo(id) {
            this.isLoaded = false;
            let result = await this.contentsService.getQuestions(id);
            if(!result) {
                 await this.$swal('not found data');  
                  this.isLoaded = true;
            }
            console.log(result);
            result.map( value => {
                value.data =  JSON.parse(value.data);
                if(value.type === 'select' && value.type === 'file') {
                    value['answer'] = value.data.articles[0];
                    if(value.type === 'file') {
                        value['files'] = 'none';
                    }
                } else if(value.type === 'check') {
                    value['answer'] = [];
                    value.data.articles.forEach( () => {
                        value['answer'].push(false);    
                    });
                }
                else {
                    value['answer'] = '';
                }
                return value;
            });
            console.log(`this questions: ${result} `);
            this.questions = result;
            this.isLoaded = true;
        }
    },
    mounted() {
        if (this.$route.query && this.$route.query.cid) {
            this.cid = parseInt(this.$route.query.cid);
            console.log("enter page cid loaded");
            console.log(`dashboard cid is: ${this.cid}`);
            this.loadCategoryInfo(this.cid);
        }
    }
};
</script>
<style></style>
