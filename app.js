const app = new Vue({
    el: '#app',
    data: {
        lista: empresa,
        nombreEmpresa: '',
       
        
    },
    methods:{
        
       
        darLike: function(expo){
            expo.like = !expo.like;
        }
        
    },

    computed: {
        buscarExpo(){
            return this.lista.filter(post => {
                return post.nombre.toLowerCase().includes(this.nombreEmpresa.toLowerCase());
            });
        }
    }
})