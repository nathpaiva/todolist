// var app = {
// 	// Application Constructor
// 	initialize: function() {
// 		this.bindEvents();
// 		var d = new Date();
// 		var n = d.getTime();
// 	}
// };
var taskList = new Array();

$(document).ready(function(){
	var $newTaskInput = $("#newTaskInput");
	var $taskList = $("#taskList");
	var taskThouchStart;
	var taskThouchEnd;
	var taskThouchStartX;
	var taskThouchEndX;

	if( window.localStorage ) {
		taskList = JSON.parse(window.localStorage.getItem("taskList"));
	}

	if( null !== taskList ){
		for (var i = 0; i < taskList.length; i++) {
			taskList[i];
			var newTask = "<li data-key='"+ taskList[i].key +"'>" + taskList[i].task + "</li>";
			$taskList.append(newTask);
		};
	} else{
		taskList = new Array();
	}

	// action buttom
	$("#addNewTask").on("click", function(){
		var key = Date.now();

		if($newTaskInput.val() != ""){
			var newTask = "<li data-key='"+ key +"'>" + $newTaskInput.val() + "</li>";
			$taskList.append(newTask);

			taskList.push({
				key:key,
				task: $newTaskInput.val(),
				done: false
			});
			if(window.localStorage){
				window.localStorage.setItem("taskList" , JSON.stringify(taskList));
			}
			console.log("aqui");
			$newTaskInput.val("");
		}
	});

	$taskList.on("touchstart", "li", function(e){
		var start = document.elementFromPoint(e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY);
		taskThouchStart = $(start).attr("data-key");
		taskThouchStartX = e.originalEvent.touches[0].pageX;
		// alert(taskThouchStartX)
	});
	$taskList.on("touchend", "li", function(e){
		var $end;
		var $this = $(this);
		var end = document.elementFromPoint(e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY);
		$end = $(end);

		taskThouchEnd = $end.attr("data-key");
		taskThouchEndX =  e.originalEvent.touches[0].pageX;

		if( taskThouchStart === taskThouchEnd ){
			if( taskThouchStartX < taskThouchEndX ){
				if($this.hasClass("done")){
					$this.removeClass("done");
				} else{
					$this.addClass("done");
				}
			} else{
				var confirmation = confirm("Do you want to remove this task?");

				if( confirmation == true ){
					$end.remove();

					taskList = $.grep(taskList, function(e){
						return e.key != taskThouchEnd;
					});

					if(window.localStorage){
						window.localStorage.setItem("taskList" , JSON.stringfy(taskList));
					}

					return true;
				}else{
					return false;
				}
			}

		}

	});
});





