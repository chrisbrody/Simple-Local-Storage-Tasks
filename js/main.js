// Local Storage Todo List
if(typeof(Storage) !== "undefined") {
	var taskArray = []
    // Code for localStorage/sessionStorage.
    localTasks = JSON.parse(localStorage.getItem('current-tasks'))
    
    for(i = 0; i < localTasks.length; i++) {   	
    	taskArray.push(localTasks[i]) 
    	// display local storage task to screen
    	var localtext = document.createTextNode(localTasks[i].task),
	 		element = document.createElement('li')
	 	// append local storage content to task list
	 	element.appendChild(localtext)
	 	document.getElementById("current-tasks").appendChild(element) 	
    }   

    function addTask(form) {	
		// set var object for task
		var	task = {
				task: form.usertask.value,
				complete: false
			}
		// push new task to task array
		taskArray.push(task)
		// set the localStorage of current-tasks to task array items
		localStorage.setItem('current-tasks', JSON.stringify(taskArray))
		// display new user task to screen
		var usertext = document.createTextNode(task.task),
	 		element = document.createElement('li')
	 	// append new content to task list
	 	element.appendChild(usertext)
	 	document.getElementById("current-tasks").appendChild(element)

	 	// reset and focus input
		form.usertask.value = ''
		form.usertask.focus()
	}
} else {
    // Sorry! No Web Storage support..
    alert('Please Update your Browser')
}

	
