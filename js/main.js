import { format, intervalToDuration, formatDuration, add } from 'date-fns';

const input = document.querySelector('.input');
const output = document.querySelector('.output');
const timeZone = -7;

input.addEventListener("input", timeCount);

function timeCount() {
	const date = add(new Date(input.value), { hours: timeZone });
	const durationObject = intervalToDuration({ start: Date.now(), end: date });
	const untilDate = formatDuration({
		years: durationObject.years,
		days: durationObject.days,
		hours: durationObject.hours,
	});
	output.value = `${untilDate}`
		+ " until " + format(date, "dd/MM/yyyy");
}