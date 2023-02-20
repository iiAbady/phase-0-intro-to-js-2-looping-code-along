
function writeCards(names, thisEvent) {
const messages = [];
for (let i = 0; i < names.length; i++) {
	const message = `Thank you, ${names[i]}, for the wonderful ${thisEvent} gift!`
	messages.push(message);
}
return messages;
}


function countDown(number) {
	let i = number;
	while (i >= 0) {
		console.log(i);
		i--;
	}
}