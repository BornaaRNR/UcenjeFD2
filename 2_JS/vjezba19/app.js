const {createApp} = Vue;

createApp({
    data(){
        return{
            brojac: 0,
            upozori:false
        }
    },
    methods:{
        uvecaj(){
            this.upozori=false;
            this.brojac++;
        },
        smanji(){
            if(this.brojac===0){
                this.upozori.true;
                return;
            }
            this.brojac--;
        },
        uduplaj(){
            this.brojac = this.brojac * 2;
        }
    }
}).mount('#app');
