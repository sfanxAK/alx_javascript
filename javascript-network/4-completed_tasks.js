const request = require('request');
request(process.argv[2], function (error, response, body) {
    const todos = JSON.parse(body);
    const completedTasks = {};
    todos.forEach(todo => {
        if (todo.completed) {
            if (completedTasks[todo.userId]) {
                completedTasks[todo.userId]++;
            } else {
                completedTasks[todo.userId] = 1;
            }
        }
    });
    console.log(completedTasks);
});