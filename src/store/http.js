import React from 'react'
import { call, put } from 'redux-saga/effects'
import appActions from './app/action'
import settings from './setting'

// import { toast } from '../utils/toast'

export function* apiCall(url, method='GET', body={}, headers={}) {
	yield put({ type: appActions.API_CALL_START })

	headers['Authorization'] = 'Bearer ' + window.localStorage.getItem('token')

	let params = {
		method,
		headers
	}
	let res = null
	let status = null
	try {
		if(method !== 'GET') {
			params.body = JSON.stringify(body)
			if(!headers['Content-Type'])
				headers['Content-Type'] = 'application/json'
			if(headers['Content-Type'] === 'auto')
				delete headers['Content-Type']
		}
		res = yield call(() => fetch(settings.apiUrl + url, params).then(res => {
			status = res.status
			if(status === 200)
				return res.json()
			return res.text()
		}))
		if(res && res.error) {
			console.log(res)
			let errText = ''
			if(res.error.name === 'ValidationError')
				errText = res.error.errors.map(err => err.message).join('<br/>')
			else
				errText = res.error.message || 'Something went wrong'
		}
		if(status !== 200) {
			res = {}
		}
	} catch(e) {
		console.log(e)
		let errText = res || 'Something went wrong!'
		console.log(e, res)
	}

	yield put({ type: appActions.API_CALL_END })

	return res
}
