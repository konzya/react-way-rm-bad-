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

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `screenId` | `string` | ID экрана, на который нужно перейти. | **Да** |
| `params` | `object` | Дополнительные параметры для экрана. | Нет |

**Ответы:**

- **`Error: 200`** - Состояние навигации успешно обновлено. Возвращает текущий стек.
  
              *Схема: `NavigationStackResponse`*
```json
{
  "currentScreen": "string - required",
  "stack": "array[string] - required",
  "depth": "integer - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `currentScreen` | `string` | - | **Да** |
| `stack` | `array[string]` | Массив ID экранов в стеке. | **Да** |
| `depth` | `integer` | - | **Да** |

---
