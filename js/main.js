// Local Storage Todo List
if(typeof(Storage) !== "undefined") {
	// create needed variables
	var incompleteTaskArray = [], 
	    completedTaskArray = [], 
	    taskArray = [], 
	    totalCurrentTasks = 0
    // Code for localStorage/sessionStorage.
    localTasks = JSON.parse(localStorage.getItem('current-tasks'))
    // loop through any available local storage
    for(var i = 0; i < localTasks.length; i++) { 
    	// if the task is not complete
    	if(localTasks[i].complete == false) {
	    	// push incomplete local tasks to incomplete array
	    	incompleteTaskArray.push(localTasks[i]) 
	    	// push incomplete local tasks to task array
	    	taskArray.push(localTasks[i]) 
	    	// display local storage task to screen
	    	var localtext = document.createTextNode(localTasks[i].task),
		 		element = document.createElement('li')
		 	// add id to each task
		 	element.id = totalCurrentTasks
		 	// add onclick attr to each element
		 	element.setAttribute("onclick", "completeTask(event)");
		 	// append local storage content to task list
		 	element.appendChild(localtext)
		 	document.getElementById("current-tasks").appendChild(element) 
		 	// update current tasks total
		 	totalCurrentTasks = totalCurrentTasks + 1
		} else {
			// add task to completed task array
			completedTaskArray.push(localTasks[i]) 
			// add task to full task array
			taskArray.push(localTasks[i])
		}		
    }   
} else {
    // Sorry! No Web Storage support..
    alert('Please Update your Browser')
}

function addTask(form) {	
	// stop form submittion if empty
	if(form.usertask.value == '' || form.usertask.value == null) { return false }
	// set var object for task
	var	task = {
			task: form.usertask.value,
			complete: false
		}

	// display new user task to screen
	var usertext = document.createTextNode(task.task),
 		element = document.createElement('li')

 	// add id to new task
 	element.id = totalCurrentTasks

 	// append new content to task list
 	element.appendChild(usertext)
 	element.setAttribute("onclick", "completeTask(event)");
 	document.getElementById("current-tasks").appendChild(element)

 	// update current tasks total
 	totalCurrentTasks = totalCurrentTasks + 1

 	// reset and focus input
	form.usertask.value = ''
	form.usertask.focus()

	// push new task to task array
	incompleteTaskArray.push(task)
	// add task to full task array
	taskArray.push(task)
	// set the localStorage of current-tasks to task array items
	localStorage.setItem('current-tasks', JSON.stringify(taskArray))
}

var completeTask = function (event) {
	// store event target
	var task = event.target
	// hide element clicked on
	task.style.display = 'none'
	// set complete property to true
	incompleteTaskArray[task.id].complete = true
	// update current tasks total
	totalCurrentTasks = totalCurrentTasks - 1
	// remove from incomplete array
	incompleteTaskArray.pop(incompleteTaskArray[task.id])
	// add to complete array
	completedTaskArray.push(completedTaskArray[task.id])
	// update localStorage to match new array of current tasks
	localStorage.setItem('current-tasks', JSON.stringify(taskArray))
}

function showCompleteTasks() {
	document.getElementById("current-tasks").innerHTML = ''
	for(var i = 0; i < completedTaskArray.length; i++) { 
		// display local storage task to screen
    	var localtext = document.createTextNode(completedTaskArray[i].task),
	 		element = document.createElement('li')
	 	// add id to each task
	 	element.id = totalCurrentTasks
	 	// add onclick attr to each element
	 	element.setAttribute("onclick", "completeTask(event)");
	 	// append local storage content to task list
	 	element.appendChild(localtext)
	 	document.getElementById("current-tasks").appendChild(element) 
	}
}