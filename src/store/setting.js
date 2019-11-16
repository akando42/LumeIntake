const localApiUrl = 'http://localhost:4040/'
const prodApiUrl = 'https://dev.carmart.co.uk:8080/'

const localSockUrl = 'ws://localhost:4041'
const prodSockUrl = 'wss://dev.carmart.co.uk:8081'

// let originArr = window.location.origin.split(':')
// let origin = originArr.filter((part, idx) => { return idx !== originArr.length - 1 }).join(':')

const fieldNames = [
	'headline',
	'make',
	'model',
	'price',
	'mileage',
	'color',
	'transmission',
	'year',
	'doors',
	'body_type',
	'dealer',
	'url',
	'engine_size',
	'fuel_type',
	'vehicle_description',
	'images',
	'dealer_name',
	'dealer_phone',
	'dealer_address'
]

let apiUrl = ''
let sockUrl = ''
switch(window.location.hostname) {
	case '54.173.60.16':
	case 'dev.carmart.co.uk':
		apiUrl = prodApiUrl
		sockUrl = prodSockUrl
		break
	case 'localhost':
		apiUrl = localApiUrl
		sockUrl = localSockUrl
		break
	default:
		apiUrl = prodApiUrl
		sockUrl = prodSockUrl
}

export default {
	apiUrl: apiUrl,
	sockUrl: sockUrl,
	pageSize: 10,
	fieldNames
}
