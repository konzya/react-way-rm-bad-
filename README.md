# Flutter <-> React Bridge API (JSON-RPC)
## Version: 1.0.0

### /events/statusChanged

#### GET
##### Summary:

Событие от хоста: status_changed

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Данные события |

### /user/getUser

#### POST
##### Summary:

Метод JSON-RPC: user_getUser

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | Результат (result) вызова |
| 400 | Ошибка валидации |
| 404 | Не найдено |

### Models


#### ValidationError

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| field | string |  | No |
| message | string |  | No |

#### NotFoundError

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| resourceId | string |  | No |

#### StatusEvent

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| newStatus | string |  | No |

#### UserRequestParams

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| userId | string |  | No |

#### UserResponse

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| name | string |  | No |
| email | string |  | No |
