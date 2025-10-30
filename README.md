# Flutter <-> React Bridge API (JSON-RPC)

## Оглавление

### Events

- [Событие от хоста: status_changed](#onStatusChanged)

### User

- [Метод JSON-RPC: user_getUser](#user_getUser)

---
## Описание методов

## Events

### Событие от хоста: status_changed <a name="onStatusChanged"></a>

`GET /events/statusChanged`

**Ответы:**

- **`200`** - Данные события
  *Схема: `StatusEvent`*

---

## User

### Метод JSON-RPC: user_getUser <a name="user_getUser"></a>

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
  *Схема: `UserResponse`*
- **`400`** - Ошибка валидации
  *Схема: `ValidationError`*
- **`404`** - Не найдено
  *Схема: `NotFoundError`*

---
