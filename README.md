# Flutter <-> React Bridge API (JSON-RPC)

## Оглавление

### Navigation

- [navigation.push](#navigationpush)

---
## Описание методов

## Navigation

### navigation.push

Добавляет новый экран или состояние в стек навигации пользователя.

**Тело запроса:**

*Схема: `NavigationPushRequest`*

```json
{
  "path": "string - required",
  "queryArgs": "object"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `path` | `string` | Путь до страницы, которую надо открыть. | **Да** |
| `queryArgs` | `object` | Аргументы для передачи на страницу. | Нет |

---
