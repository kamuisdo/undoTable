(function(){

	function UndoStack(){
		var limit=10,
			stackPosition = limit-1,
			stack=new Array(limit),
			undoBtnId="",
			redoBtnId="";

		this.addData= function(command){
			stack.splice(0,1);
			stack[limit-1]=command;
			//this.callback(undoBtnId,redoBtnId,stackPosition);
		},
		this.undo=function(){
			
			stackPosition--;
			//alert(undoBtnId);
			//this.callback(undoBtnId,redoBtnId,stackPosition);
			return stack[stackPosition+1].undo();	
		},
		this.redo=function(){
			
			stackPosition++;

			//this.callback(undoBtnId,redoBtnId,stackPosition);
			return stack[stackPosition].redo();
		},
		this.setLimit=function(num){
			limit=num;
			stackPosition=num-1;
		},
		// this.hadUndo=function(undoBtnId,stackPosition){
			
		// 	if(stackPosition<0 || stackPosition == limit-1){
				
		// 		$("#"+undoBtnId).attr('disabled', 'disabled');
		// 	}else{
		// 		//alert("able")
		// 		$("#"+undoBtnId).attr('disabled', '');
		// 	}; 
		// },
		// this.hasRedo=function(redoBtnId,stackPosition){
		// 	if(stackPosition> limit-1 || stackPosition == limit-1){
		// 		$("#"+redoBtnId).attr('disabled', 'disabled');
		// 	}else{
		// 		$("#"+redoBtnId).attr('disabled', '');
		// 	};
		// },
		this.setBtnCallback=function(undoBtnId,redoBtnId){
			// undoBtnId=undoBtnId;
			// redoBtnId=redoBtnId;
			// return this.callback(undoBtnId,redoBtnId,stackPosition);

		},
		this.callback=function(undoBtnId,redoBtnId,stackPosition){
			

				//this.hadUndo(undoBtnId,stackPosition);
				//this.hasRedo(redoBtnId,stackPosition);
			
		};
		

	};
	window.UndoStack=UndoStack;
}());