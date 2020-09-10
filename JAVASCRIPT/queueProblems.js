

/** Queue Implementation in JS */


function Queue(){
	var storage = {},
		head = 0,
		tail= 0;

	return {
		enQueue: function(item){
			storage[tail] = item;
		  	tail++;
		},
		deQueue: function(){
			var size = tail - head;

			if (size <= 0) return undefined;

			var item = storage[head];

			delete storage[head];

			head++;

			//Reset the counter
			if (head === tail){
				head = 0;
				tail = 0;
			}

			return item;
		},
		size: function(){
			return tail - head;
		},
		peek: function(){
			return storage[tail - 1];
		},
		print: function(){
			var result = [];

			for (var key in storage){
				result.push(storage[key]);
			}

			return result;
		}
	}
}