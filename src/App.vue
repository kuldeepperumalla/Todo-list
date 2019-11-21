<template>
  <div id="app">
    <Header></Header>
    <todo-list></todo-list>
    
    
  </div>
</template>

<script>

import Header from './components/Header'
import TodoList from './components/TodoList'

export default {
  name: 'app',
  components: {
    Header,
    TodoList  

  },
  data() {
    return{
      todos:[
        {
          id:1,
          title:"todo1",
          compleated:false
        },
        {
          id:2,
          title:"todo2",
          compleated:false
        },
        {
          id:3,
          title:"todo3",
          compleated:false
        },
        {
          id:4,
          title:"todo4",
          compleated:false
        },
      ]
    }
  }
  
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
