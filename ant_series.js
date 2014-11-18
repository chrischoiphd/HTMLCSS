
var count = 1;

if (process.argv.length >= 3) {
	count = process.argv[2];
}

var result_array = [1];

if (count <= 1) {
	result_array = [1];

	console.log("1 : " + result_array);
}
else {
	console.log("1 : " + result_array);

	for (var i = 1; i < count; i++) {
		//변수 초기화
		var result_index = 0;
		var temp_array = result_array;
		var temp_value = temp_array[0];
		var temp_count = 0;

		//신규 배열 할당
		result_array = new Array();

		//temp_result 내 값 scan
		for (var j = 0; j < temp_array.length; j++) {
			var read_value = temp_array[j];

			if (read_value == temp_value) {
				temp_count ++;
			}
			else {
				result_array[result_index++] = temp_value;
				result_array[result_index++] = temp_count;

				temp_value = read_value;
				temp_count = 1;
			}
		}
		result_array[result_index++] = temp_value;
		result_array[result_index++] = temp_count;
		console.log(i+1 + " : " + result_array);
	}
}