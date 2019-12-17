import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      tasks:[
        {task: 'chew bone', priority: 1, done: false},
        {task: 'chase cat', priority: 2, done: true},
        {task: 'sleep', priority: 1, done: false},
        {task: 'sit on laptop', priority: 3, done: true}
      ],
      newTask: ""
    },
    methods: {
      saveNewTask: function(){
        let taskObject = {task: this.newTask, priority: this.newTask, done: false};
        this.tasks.push(taskObject);
        this.newTask = "";
      },
      completeTask: function(index){
        this.tasks[index].done = true;
      }
    }

  });
});
