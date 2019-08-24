<template>
        <div class="row justify-content-center">
            <div class="col-lg-11 col-md-7 bg-white">
                <div class="card bg-white  border-0">
                    <div class="card-body px-lg-11 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-6">
                            <h1 class="text-black">환영 합니다.!!</h1>
                         </div>
                    </div>
                        <textarea cols="90" rows="13" readonly>
                            Google에 오신 것을 환영합니다.
Google 제품 및 서비스(‘서비스’)를 이용해 주셔서 감사합니다. 서비스는 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States에 소재한 Google LLC(‘Google’)에서 제공합니다.

서비스를 이용함으로써 귀하는 본 약관에 동의하게 되므로 본 약관을 주의 깊게 읽어보시기 바랍니다.

Google 서비스는 매우 다양하므로 때로 추가약관 또는 제품 요구사항(연령 요건 포함)이 적용될 수 있습니다. 추가약관은 관련 서비스에 대하여 제공되며, 귀하가 해당 서비스를 이용하는 경우 이 추가약관은 귀하와 Google 간 계약의 일부가 됩니다.

                        </textarea>
                        </div>
                          <div>
                    <div class="text-center">
                    <base-button type="dark" v-on:click="goon" class="my-4">Start</base-button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
   
    export default {
        name: 'login',
        data() {
            return {
                agree: 'none'
            }
        },
        created: async function() {
        },
        methods: {
            goon: async function() {
                this.$router.push('dashboard?cid=1');   
            }
        }
    }
</script>
<style>
</style>
