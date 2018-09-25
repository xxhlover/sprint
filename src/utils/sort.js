let myfilter = function(arr,prop){
	return arr.filter((val)=>{
		return val.name.indexOf(prop)>-1;
	})
}

let compare = function (prop,prop2) {
    return function (obj1, obj2) {
    	if(prop2){
    		var val1 = obj1[prop];
    		var val12 = obj1[prop2];
    		var val2 = obj2[prop];
    		var val22 = obj2[prop2];
    		if(val1+val12<val2+val22){
    			return 1;
    		}else if(val1+val12>val2+val22){
    			return -1;
    		}else {
    			return 0;
    		}
    	}else{
       if(prop=='name'){
       		var val1 = obj1[prop];
        var val2 = obj2[prop];if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }  
       }else{
       	 var val1 = obj1[prop];
        var val2 = obj2[prop];if (val1 < val2) {
            return 1;
        } else if (val1 > val2) {
            return -1;
        } else {
            return 0;
        }    
       }
    } 
    }
}

export { compare ,myfilter}  ;

