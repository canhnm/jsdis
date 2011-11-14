var jsdis = {
	//Check if localStorage is supported in the browser
	isSupported: function(){
		return ('localStorage' in window) && window.localStorage !== null;
	},
	//Check if JSON is supported in the browser
	isJSON: function(){
		return window.JSON != null;
	},
	exists: function(key){
		return this.storage.getItem( key ) != null;
	},
	set: function(key, value) {
		if (!this.isSupported) return;
		
		try {
			if (typeof value == "object") {
				//We use JSON.stringify because localStored only stores data in string
				value = JSON.stringify(value);
			}
			localStorage.setItem(key, value);
		} catch (e) {
			return e;
		}
		return true;
	},
	get: function(key) {
		if (!this.isSupported) return;

		var value = localStorage.getItem(key),
			valLengh = value.length;
		//We use JSON.parse to return stringified value 
		if (value[0] == "{" && value[valLength] == "}") {
			value = JSON.parse(value);
		}
		return value;
	},
	//Set the string value of a key and return its old value 
	getset: function(key, value){
		var oldVal = this.get(key);
		this.set(key,value);
		return oldVal;
	},
	//Delete by key given
	del: function(key) {
		if (!this.isSupported) return;

		return localStorage.removeItem("name");
	},
	//Increment the integer value of a key by one 
	incr: function(key){
		var curVal = this.get(key);
		if(curVal){
			//Check if value of this key is integer
			if(isNaN(parseInt(curVal,10))===false){
				var newVal = parseInt(curVal)+1;
				return this.set(key, newVal);
			}else{
				return 'Value of key is not integer!';
			}	
		}else{
			return 'No value found!';
		}
	},
	//Increment the integer value of a key by given number value 
	incrby: function(key, increment){
		var curVal = this.get(key);
		if(curVal){
			//Check if value of this key is integer
			if(isNaN(parseInt(curVal,10))===false){
				var newVal = parseInt(curVal)+increment;
				return this.set(key, newVal);
			}else{
				return 'Value of key is not integer!';
			}
		}else{
			return 'No value found!';
		}
	},
	//Dcrement the integer value of key by one
	decr: function(key){
		var curVal = this.get(key);
		if(curVal){
			//check if value of this key is integer
			if(isNaN(parseInt(val,10))===false){
				var newVal = curVal-1;
				this.set(key, newVal);
			}else{
				return 'Value of key is not integer!';
			}	
		}else{
			return 'No value found!';
		}
	},
	//Decrement the integer value of this key by the given number value
	decrby: function(key, decrement){
		var curVal = this.get(key);
		if(curVal){
			//Check if value of this key is integer
			if(isNaN(parseInt(val,10))===false){
				var newVal = curVal-decrement;
				this.set(key, newVal);
			}
		}
		return 'Value of key is not integer!';
	},
	//Rename a key
	rename: function(key, newkey) {
		var curVal = this.get(key);
		this.del(key);
		this.set(newkey, curVal);
		return true;
	},
	//Get the length of the value stored in a key
	strlen: function(key){
		var curVal = this.get(key);
		return strlen(curVal);
	},
	//Clear current stored value
	flush: function(){
		if (!this.isSupported) return;

		if(typeof(localStorage) != 'undefined'){ 
			return localStorage.clear() ;
		} 
		else{ 
			return "window.localStorage is not defined"; 
		}    
		return true;	
	}
}