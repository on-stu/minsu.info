type TDelay =
	| 0
	| 75
	| 100
	| 150
	| 200
	| 300
	| 500
	| 700
	| 1000;

export function getDelayClass(delay: TDelay) {
	let delayClass = '';
	switch (delay) {
		case 0:
			delayClass = 'delay-0';
			break;
		case 75:
			delayClass = 'delay-75';
			break;
		case 100:
			delayClass = 'delay-100';
			break;
		case 150:
			delayClass = 'delay-150';
			break;
		case 200:
			delayClass = 'delay-200';
			break;
		case 300:
			delayClass = 'delay-300';
			break;
		case 500:
			delayClass = 'delay-500';
			break;
		case 700:
			delayClass = 'delay-700';
			break;
		case 1000:
			delayClass = 'delay-1000';
			break;
		default:
			delayClass = 'delay-0';
			break;
	}
	return delayClass;
}

export function getDelayClassFromIndex(index: number) {
	let delayClass = '';
	switch (index) {
		case 0:
			delayClass = 'delay-0';
			break;
		case 1:
			delayClass = 'delay-75';
			break;
		case 2:
			delayClass = 'delay-100';
			break;
		case 3:
			delayClass = 'delay-150';
			break;
		case 4:
			delayClass = 'delay-200';
			break;
		case 5:
			delayClass = 'delay-300';
			break;
		case 6:
			delayClass = 'delay-500';
			break;
		case 7:
			delayClass = 'delay-700';
			break;
		case 8:
			delayClass = 'delay-1000';
			break;
		default:
			delayClass = 'delay-0';
			break;
	}
	return delayClass;
}

export function fadeFromBottom(
	isInView: boolean,
	delay: TDelay = 0,
) {
	let tailwindClass = `transition-all duration-1000 `;
	tailwindClass += ` ${getDelayClass(delay)}`;
	if (isInView) {
		tailwindClass += ' opacity-100 ';
	} else {
		tailwindClass += ' translate-y-6 opacity-0 ';
	}
	return tailwindClass;
}
