var app = new Vue({
    el: '#app',
    data : {
        OriginalMessage : 'asdfghjkl'
    },
    computed:{
        ReversedMessage : function(){
            return this.OriginalMessage.split('').reverse().join('')
        },
        now : function(){
            return new Date().format('yyyyMMdd')
        }
    }
})

