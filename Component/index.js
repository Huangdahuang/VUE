Vue.component('button-counter',{
    props : ['msg'],
    data : function(){
        return {
            count : 0
        }
    },
    template : '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

var app = new Vue({
    el : '#app'
})


Vue.component('blog-post',{
    props : ['title'],
    template : '<h3>{{title}}</h3>'
})

var app2 = new Vue({
    el : '#app-2'
})

var app3 = new Vue({
    el : '#app-3',
    data : {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ]
    }
})


Vue.component('blog-post2',{
    props : ['post'],
    template : '<div class="blog-post"><h3><button v-on:click="$emit(\'enlarge-text\')">Enlarge text</button>{{ post.title }}</h3><div v-html="post.content"></div></div>'
})

var app4 = new Vue({
    el : '#app-4',
    data : {
        posts: [
            { id: 1, title: 'My journey with Vue' ,content : '111111111112'},
            { id: 2, title: 'Blogging with Vue' ,content : '654322'},
            { id: 3, title: 'Why Vue is so fun' ,content : '16789012'}
        ],
        postFontSize : 1
    }
})