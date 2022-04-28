import * as t from '../api/test/types'
import { Api } from '../models'

async function getTest(): Promise<t.GetTestResponse> {
	throw 'Unimplemented'
}


const api: t.TestApi = {
	getTest,
}

export default api
