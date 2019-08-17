<template>
    <div>
        <base-header type="gradient-dark" class="pb-5 pb-5 pt-0 pt-md-4">
            <!-- Card stats -->
        </base-header>  

        <!--Charts-->
        <div class="container-fluid mt--0 pb-5 pt-1 pt-md-2">
            
            <!--Tables-->
            <card shadow type="secondary">
                 <div>
               <small>1. Do you like korea food like rice cake or kimchi?</small>
                <base-radio name="radio0" class="mb-3" v-model="radio.radio1">
                Yes
                </base-radio>
                <base-radio name="radio1" class="mb-3" v-model="radio.radio1">
                No
                </base-radio>
            </div>
            </card>
            <card shadow type="secondary">
                 <div>
               <small>1. Do you like korea food like rice cake or kimchi?</small>
                <base-radio name="radio1-1" class="mb-3" v-model="radio.radio2">
                Yes
                </base-radio>
                <base-radio name="radio1-2" class="mb-3" v-model="radio.radio2">
                No
                </base-radio>
                 <base-radio name="radio1-3" class="mb-3" v-model="radio.radio2">
                No
                </base-radio>
                 <base-radio name="radio1-4" class="mb-3" v-model="radio.radio2">
                No
                </base-radio>
                </div>
            </card>
            <card shadow type="secondary">
                 <div>
               <small>1. Do you like korea food like rice cake or kimchi?</small>
                 <base-input placeholder="Search"
                            class="input-group-alternative"
                            alternative="">
                </base-input>
            </div>
            </card>
            <card shadow type="secondary">
                <div>
                    <vue-good-table :columns="columns" :rows="rows"/>
                </div>
            </card>
            <!--End tables-->
        </div>

    </div>
</template>
<script>
  // Charts
 
  // Tables
    import 'vue-good-table/dist/vue-good-table.css'
    import { VueGoodTable } from 'vue-good-table/src';
  export default {
    components: {
        VueGoodTable
    },
    data() {
      return {
        radio: {
           radio1: "radio1",
           radio2: "radio1-1",
        },
        columns: [
            {
            label: 'Name',
            field: 'name',
            },
            {
            label: 'Level',
            field: 'level',
            type: 'number',
            },
            {
            label: 'Created On',
            field: 'createdAt',
            type: 'date',
            dateInputFormat: 'yyyy-MM-dd',
            dateOutputFormat: 'MMM/dd/yyyy',
            },
            {
            label: 'Percent',
            field: 'score',
            type: 'percentage',
            },
        ],
        rows: [
            { id:1, name:"type1", level: 20, createdAt: '2015-10-31',score: 0.03343 },
            { id:2, name:"type2", level: 24, createdAt: '2016-10-31', score: 0.03343 },
            { id:3, name:"type3", level: 16, createdAt: '2017-10-30', score: 0.03343 },
            { id:4, name:"type4", level: 55, createdAt: '2018-10-11', score: 0.03343 },
            { id:5, name:"type5", level: 40, createdAt: '2018-10-21', score: 0.03343 },
            { id:6, name:"type6", level: 20, createdAt: '2018-10-31', score: 0.03343 },
        ],
        loginService: this.$service.$loginservice
      };
    },
    async created() {
      let result = await this.loginService.getAuthenticated();
      if(!result)
      {
        this.$router.push('login');
      }
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Rate',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style></style>
