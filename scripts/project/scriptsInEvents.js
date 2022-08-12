


const scriptsInEvents = {

		async E_menu_Event2_Act1(runtime, localVars)
		{
			var x = localStorage.getItem("task_id");
			var y = localStorage.getItem("subject_id");
			var z = localStorage.getItem("id_token");
			
			runtime.globalVars.task_id = x;
			runtime.globalVars.subject_id = y;
			runtime.globalVars.id_token = z;
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

