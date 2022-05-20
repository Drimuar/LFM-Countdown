const { format } = require("date-fns");
import { intervalToDuration, formatDuration, add } from 'date-fns';

const input = document.querySelector('.input');
const output = document.querySelector('.output');

input.addEventListener("input", timeCount);

function timeCount() {
	const date = add(new Date(input.value), { hours: -7 });
	const durationObject = intervalToDuration({ start: Date.now(), end: date });
	const durationFormatedObject = {
		years: durationObject.years,
		days: durationObject.days,
		hours: durationObject.hours,
	};
	let untilDate = formatDuration(durationFormatedObject);
	output.value = `${untilDate}`
		+ " until " + format(date, "dd/MM/yyyy");
}