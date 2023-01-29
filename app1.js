const app = new Vue({
    el: '#app',
    data: {
        lista: disenios,
        nombreDisenios: '',
       
        
    },
    methods:{
        
       
        darLike: function(dise){
            dise.like = !dise.like;
        }
        
    },

    computed: {
        buscarDise(){
            return this.lista.filter(post => {
                return post.nombre.toLowerCase().includes(this.nombreDisenios.toLowerCase());
            });
        }
    }
})