

const write = require('child_process').exec;


let command = 'nmap -sn 192.168.1.0/24';

console.log("\nbuilding map...참깐만요\n");


write(command, function(error, stdout, stderr) {

	if (error) console.log(stderr)
	else {

		let answer = stdout.split('\r\n');

		answer.forEach(function(line, index) {

			if (line.indexOf('Raspberry') != -1) {

				console.log("\t"+answer[index-2].slice(21));

			}
			
		})

	}

})