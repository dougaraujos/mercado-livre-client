const URL = {
	path: '',
	images: (path) => require.context('assets/images/')(`./${path}`)
}

export default URL;
