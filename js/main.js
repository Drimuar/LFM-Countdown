const { format } = require("date-fns");
import { formatDistanceToNowStrict, formatDuration, add } from 'date-fns';

const input = document.querySelector('.input');
const output = document.querySelector('.output');

input.addEventListener("input", timeCount);

function timeCount() {
	const date = add(new Date(input.value), { hours: -7 });
	let hour = formatDistanceToNowStrict(date, { unit: "hour" }).slice(0, -5);
	let year = formatDistanceToNowStrict(date, { unit: "year" }).slice(0, -5);;
	let day = formatDistanceToNowStrict(date, { unit: "day" }).slice(0, -4);;
	let obj = {
		years: +year,
		days: +day % 365,
		hours: +hour % 24,
	};
	let untilDate = formatDuration(obj);
	output.value = `${untilDate}`
		+ " until " + format(date, "dd/MM/yyyy");
}