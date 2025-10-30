# Flutter <-> React Bridge API (JSON-RPC)

## Оглавление

### Events

- [Событие от хоста: status_changed](#событие-от-хоста-statuschanged)

### User

- [Метод JSON-RPC: user_getUser](#метод-json-rpc-usergetuser)

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
    "type": "object",
    "properties": {
      "newStatus": {
        "type": "string",
        "enum": [
          "online",
          "offline"
        ]
      }
    }
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
  "type": "object",
  "properties": {
    "userId": {
      "type": "string"
    }
  }
}
```

**Ответы:**

- **`200`** - Результат (result) вызова
  *Схема ответа: `UserResponse`*
  ```json
  {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "email": {
        "type": "string"
      }
    }
  }
  ```
- **`400`** - Ошибка валидации
  *Схема ответа: `ValidationError`*
  ```json
  {
    "type": "object",
    "properties": {
      "field": {
        "type": "string"
      },
      "message": {
        "type": "string"
      }
    }
  }
  ```
- **`404`** - Не найдено
  *Схема ответа: `NotFoundError`*
  ```json
  {
    "type": "object",
    "properties": {
      "resourceId": {
        "type": "string"
      }
    }
  }
  ```

---
