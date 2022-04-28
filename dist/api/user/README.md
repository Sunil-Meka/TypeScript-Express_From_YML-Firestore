# User

## Operations

### listUser

```http
GET /user
```

return a list of user objects

### postUser

```http
POST /user
```

Add a new user

### deleteUser

```http
DELETE /user/{userId}
```

delete a user

### getUser

```http
GET /user/{userId}
```

get a user

### updateUser

```http
PUT /user/{userId}
```

update a user

## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
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
```
