# Flutter <-> React Bridge API (JSON-RPC)

## Оглавление

### Navigation

- [navigation.push](#navigationpush)
- [navigation.pushWithResult](#navigationpushwithresult)

---
## Описание методов

## Navigation

### navigation.push

Переход на заданную страницу страницу, имена страниц отличаются для флаттера и кордовы.

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

### navigation.pushWithResult

Переход на заданную страницу с ожиданием результата, имена страниц отличаются для флаттера и кордовы.

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

**Ответы:**

- **`Response`** - Успешный переход и возврат результата

*Схема: `NavigationPushWithResultResponse`*

```json
{
  "result": "any"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `any` | Результат выполнения. Может быть любым значением (any). | Нет |

---
