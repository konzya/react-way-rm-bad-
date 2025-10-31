# Flutter <-> React Bridge API (JSON-RPC)

## Оглавление

### Navigation

- [navigation.push](#navigationpush)

---
## Описание методов

## Navigation

### navigation.push

`POST /navigation/push`

Добавляет новый экран или состояние в стек навигации пользователя.

**Тело запроса:**

*Схема: `NavigationPushRequest`*

```json
{
  "screenId": "string - required",
  "params": "object"
}
```

**Ответы:**

- **`200`** - Состояние навигации успешно обновлено. Возвращает текущий стек.
  *Схема ответа: `NavigationStackResponse`*
  ```json
  {
    "currentScreen": "string - required",
    "stack": "array[string] - required",
    "depth": "integer - required"
  }
  ```

---
