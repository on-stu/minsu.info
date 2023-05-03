export const formatDate = (date: Date) => {
	const year = date.getFullYear().toString();
	let month = date.getMonth().toString();
	let day = date.getDate().toString();

	if (parseInt(month) < 10) {
		month = `0${parseInt(month) + 1}`;
	}
	if (parseInt(day) < 10) {
		day = `0${day}`;
	}

	return `${year}.${month}.${day}`;
};
