import * as t from '../api/user/types'
import { Api } from '../models'

async function listUser(): Promise<t.ListUserResponse> {
	throw 'Unimplemented'
}

async function postUser(request: Api.User): Promise<t.PostUserResponse> {
	throw 'Unimplemented'
}

async function deleteUser(userId: string): Promise<t.DeleteUserResponse> {
	throw 'Unimplemented'
}

async function getUser(userId: string): Promise<t.GetUserResponse> {
	throw 'Unimplemented'
}

async function updateUser(userId: string, request: Api.User): Promise<t.UpdateUserResponse> {
	throw 'Unimplemented'
}


const api: t.UserApi = {
	listUser,
	postUser,
	deleteUser,
	getUser,
	updateUser,
}

export default api
