var data = {
    a : 1
}
var app = new Vue({
    el : '#app',
    data : {
        message : 'hello',
    }
})

var app2 = new Vue({
    el : '#app-2',
    data : data,
    created : function(){
        alert("qqwq"),
        console.log("a is " + this.a)
    },
    destroyed : function(){
        alert('destroyed')
    }
})


var obj = {
    foo : 'bar'
}

// Object.freeze(obj)

var app3 = new Vue({
    el : '#app-3',  
    data : obj
})

var app4 = new Vue({
    el : '#app-4',
    data:{
        message : '你好'
    },
    computed: {
        reMessage:function(){
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        me:function(){
            return 'fdasfafasf'
        }
    },
})

var app5 = new Vue({
    el : '#app-5',
    data:{
        firstName:'huang',
        lastName:'zhihong'
    },
    computed: {
        fullName:function(){
            return this.firstName + this.lastName
        }
    },

})