# Flutter <-> React Bridge API (JSON-RPC)

## Оглавление

### Navigation

- [navigation.download](#navigationdownload)
- [navigation.downloadAndOpen](#navigationdownloadandopen)
- [navigation.openExternalLink](#navigationopenexternallink)
- [navigation.openWebModule](#navigationopenwebmodule)
- [navigation.pop](#navigationpop)
- [navigation.popUntil](#navigationpopuntil)
- [navigation.push](#navigationpush)
- [navigation.pushWithResult](#navigationpushwithresult)
- [navigation.replace](#navigationreplace)

### services

- [services.biometrics.authorize](#servicesbiometricsauthorize)

---
## Описание методов

## Navigation

### navigation.download

Скачивает файл по переданной ссылке.

**Тело запроса:**

*Схема: `NavigationDownloadAndOpenRequest`*

```json
{
  "url": "string - required",
  "queryArgs": "object"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `url` | `string` | Ссылка на файл для скачивания. | **Да** |
| `queryArgs` | `object` | Дополнительные параметры скачивания. | Нет |

**Ответы:**

- **`Response`** - Успешный переход и возврат результата

*Схема: `NavigationDownloadAndOpenResponse`*

```json
{
  "path": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `path` | `string` | Локальный путь к скачанному файлу. | **Да** |

---

### navigation.downloadAndOpen

Скачивает файл по переданной ссылке и открывает его. После скачивание попытается открыть файл в стороннем приложении, если соответствующее установлено (например сторонний Pdf viewer)

**Тело запроса:**

*Схема: `NavigationDownloadAndOpenRequest`*

```json
{
  "url": "string - required",
  "queryArgs": "object"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `url` | `string` | Ссылка на файл для скачивания. | **Да** |
| `queryArgs` | `object` | Дополнительные параметры скачивания. | Нет |

**Ответы:**

- **`Response`** - Успешный переход и возврат результата

*Схема: `NavigationDownloadAndOpenResponse`*

```json
{
  "path": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `path` | `string` | Локальный путь к скачанному файлу. | **Да** |

---

### navigation.openExternalLink

Открывает сайт в браузере внутри хоста.

**Тело запроса:**

*Схема: `NavigationOpenExternalLinkRequest`*

```json
{
  "url": "string - required",
  "needOpenExternalBrowser": "boolean"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `url` | `string` | Адрес сайта. | **Да** |
| `needOpenExternalBrowser` | `boolean` | При значении true - браузер запустится в отдельном приложении, в другом случае открывает окно браузера внутри нашего приложения. | Нет |

---

### navigation.openWebModule

Открытие другого веб модуля. Самое главное - передать правильный path (хвостик урла веб модуля) и параметры, если они нужны для корректной работы веб модуля.

**Тело запроса:**

*Схема: `NavigationOpenWebModuleRequest`*

```json
{
  "path": "string - required",
  "queryArgs": "object",
  "replace": "boolean"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `path` | `string` | Хвостик, все что после стэнда, от полного урла веб-модуля | **Да** |
| `queryArgs` | `object` | Мапа, ключ значение. Параметры, которые будут переданы в веб-модуль через метод init. | Нет |
| `replace` | `boolean` | Необходимо ли заменить (закрыть) текущий веб-модуль в стеке навигации хост-приложения. | Нет |

**Ответы:**

- **`Response`** - Команда на открытие модуля успешно отправлена

*Схема: `NavigationOpenWebModuleResponse`*

```json
{
  "info": "Schema 'NavigationOpenWebModuleResponse' is not an object. Type: unknown"
}
```

---

### navigation.pop

Метод для закрытия страницы с web-приложением.

**Тело запроса:**

*Схема: `NavigationPopRequest`*

```json
{
  "value": "any"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `value` | `any` | Значение для возврата на предыдущую страницу. Данные для хоста | Нет |

---

### navigation.popUntil

Метод для возврата до заданной страницы в стеке навигации. Т.е. при вызове данного метода будут закрываться все страницы, пока не встретится страница с заданным путем.

**Тело запроса:**

*Схема: `NavigationPopUntilRequest`*

```json
{
  "path": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `path` | `string` | Путь страницы, перед которой необходимо закрыть все страницы выше в стеке навигации. | **Да** |

---

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
  "info": "Schema 'NavigationPushWithResultResponse' is not an object. Type: unknown"
}
```

---

### navigation.replace

Замена текущей страницы с WebView на страницу по заданному пути.

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

## services

### services.biometrics.authorize

Авторизация по биометрии.

**Ответы:**

- **`Response`** - Успешный переход и возврат результата

*Схема: `ServicesBiometrics.authorizeResponse`*

```json
{
  "info": "Schema 'ServicesBiometrics.authorizeResponse' is not an object. Type: boolean"
}
```

---
