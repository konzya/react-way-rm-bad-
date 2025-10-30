# Flutter <-> React Bridge API (JSON-RPC)

## Оглавление

### Events

- [Событие от хоста: status_changed](#событие-от-хоста-status_changed)

### User

- [Метод JSON-RPC: user_getUser](#метод-json-rpc-user_getuser)

---
## Описание методов

## Events

### Событие от хоста: status_changed

`GET /events/statusChanged`

**Ответы:**

- **`200`** - Данные события
  *Схема ответа: `StatusEvent`*
  ```json
  {
    "newStatus": "string"
  }
  ```

---

## User

### Метод JSON-RPC: user_getUser

`POST /user/getUser`

**Тело запроса:**

*Схема: `UserRequestParams`*

```json
{
  "userId": "string"
}
```

**Ответы:**

- **`200`** - Результат (result) вызова
  *Схема ответа: `UserResponse`*
  ```json
  {
    "id": "string",
    "name": "string",
    "email": "string"
  }
  ```
- **`400`** - Ошибка валидации
  *Схема ответа: `ValidationError`*
  ```json
  {
    "field": "string",
    "message": "string"
  }
  ```
- **`404`** - Не найдено
  *Схема ответа: `NotFoundError`*
  ```json
  {
    "resourceId": "string"
  }
  ```

---
