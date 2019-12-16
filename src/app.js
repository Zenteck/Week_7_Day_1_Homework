import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    em: "#app",
    data: {
      tasks:[
        {task: 'chew bone', done: false},
        {task: 'chase cat', done: true},
        {task: 'sleep', done: false},
        {task: 'sit on laptop', done: true}
      ],
      newTask: ""
    },
    methods: {
      saveNewTask: function(){
        let taskObject = {task: this.newTask, done: false};
        this.tasks.push(taskObject);
        this.newTask = "";
      },
      completeTask: function(index){
        this.tasks[index].done = true;
      }
    }

  });
});
