const API = {
	host: 'http://localhost:3000/api/',

	get item(){
		return `${this.host}items/`
	},

	get items(){
		return `${this.host}items`
	}
}

export default API;