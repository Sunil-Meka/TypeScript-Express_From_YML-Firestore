# Test

## Operations

### getTest

```http
GET /test
```

simple connectivity test

## Implementation

This is an example of the API implementation to use to update the actual API implementation
when the API structure has changed.

```typescript
async function getTest(): Promise<t.GetTestResponse> {
	throw 'Unimplemented'
}


const api: t.TestApi = {
	getTest,
}

export default api
```
