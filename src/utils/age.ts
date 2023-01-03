export function getAge(): [number, boolean] {
	const today = new Date(Date.now());
	return [
		today.getMonth() === 1 && today.getDate() < 17
			? today.getFullYear() - 1999
			: today.getFullYear() - 1998,
		today.getMonth() === 1 && today.getDate() === 17,
	];
}
