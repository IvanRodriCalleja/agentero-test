const requestTime = 300;

export const fakeServer = result => params =>
	new Promise(resolve =>
		setTimeout(() => {
			resolve(result(params));
		}, requestTime)
	);
