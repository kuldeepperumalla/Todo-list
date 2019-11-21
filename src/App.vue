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
