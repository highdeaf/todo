$("#add").click(function() {
	addTask();
});

$("#task").keyup(function(e) {
	if (event.keyCode == 13) {
		addTask();
	}
});

function displayTask(task) {
	$("#tasks").append("<li>" + task + "</li>");
}

function addTask() {
	var task = $("#task").val();
	displayTask(task);
	if (tasks == null) {
		tasks = [];
	}
	tasks.push(task);
	localStorage["tasks"] = JSON.stringify(tasks); // save in browser
}

var tasks = JSON.parse(localStorage["tasks"]);

if (tasks) {
	for (i = 0; i < tasks.length; i++) {
		displayTask(tasks[i]);
	}
}