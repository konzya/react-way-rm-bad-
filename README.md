# Flutter <-> React Bridge API (JSON-RPC)

## Оглавление

### authentication

- [logout](#authenticationlogout)

### broadcast

- [goBack](#broadcastgoback)
- [onLifecycleChanged](#broadcastonlifecyclechanged)
- [onChangeVisibility](#broadcastonchangevisibility)
- [onServerMessage](#broadcastonservermessage)

### clipboard

- [copy](#clipboardcopy)
- [paste](#clipboardpaste)

### confirmation

- [confirm](#confirmationconfirm)

### Navigation

- [download](#navigationdownload)
- [downloadAndOpen](#navigationdownloadandopen)
- [openExternalLink](#navigationopenexternallink)
- [openWebModule](#navigationopenwebmodule)
- [pop](#navigationpop)
- [popUntil](#navigationpopuntil)
- [push](#navigationpush)
- [pushWithResult](#navigationpushwithresult)
- [replace](#navigationreplace)

### pdfViewer

- [show](#pdfviewershow)

### services

- [app.Info](#servicesappinfo)
- [biometrics.authorize](#servicesbiometricsauthorize)
- [biometrics.getAvailableAuthType](#servicesbiometricsgetavailableauthtype)
- [biometrics.isBiometricsEnabled](#servicesbiometricsisbiometricsenabled)
- [biometrics.setBiometricsState](#servicesbiometricssetbiometricsstate)
- [callerId.checkAvailable](#servicescalleridcheckavailable)
- [contacts.get](#servicescontactsget)
- [deviceInfo.getDeviceInfoForStatistics](#servicesdeviceinfogetdeviceinfoforstatistics)
- [deviceInfo.getInfo](#servicesdeviceinfogetinfo)
- [imagePicker.fromGallery](#servicesimagepickerfromgallery)
- [localStorage.read](#serviceslocalstorageread)
- [localStorage.write](#serviceslocalstoragewrite)
- [location.getLocation](#serviceslocationgetlocation)
- [payControl.checkAvailable](#servicespaycontrolcheckavailable)
- [payControl.confirmTransaction](#servicespaycontrolconfirmtransaction)
- [payControl.getUserId](#servicespaycontrolgetuserid)
- [permission.check](#servicespermissioncheck)
- [permission.get](#servicespermissionget)
- [push.isPushEnabled](#servicespushispushenabled)
- [push.setPushState](#servicespushsetpushstate)
- [scanQrCode](#servicesscanqrcode)
- [qr.scanFromFile](#servicesqrscanfromfile)
- [sharing.shareFile](#servicessharingsharefile)
- [sharing.shareText](#servicessharingsharetext)
- [sharing.shareUrl](#servicessharingshareurl)
- [smsConfirmation.confirm](#servicessmsconfirmationconfirm)
- [telephone.call](#servicestelephonecall)
- [waiter.hide](#serviceswaiterhide)

### tabbar

- [hide](#tabbarhide)
- [show](#tabbarshow)

---
## Описание методов

## authentication

### authentication.logout

Разлогиниться и перейти на экран логина.

**Ответы:**

- **`Response`** - Успешный переход и возврат результата

*Схема: `AuthenticationLogoutResponse`*

```json
{
  "success": "boolean - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `success` | `boolean` | Результат операции выхода. | **Да** |

---

## broadcast

### broadcast.goBack

С помощью этого метода можно повесить обработчик на системное действие назад в телефоне.

**Ответы:**

- **`Response`** - Результат регистрации подписки

*Схема: `BroadcastGoBackResponse`*

```json
{
  "success": "boolean - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `success` | `boolean` | *См. подробное описание ниже* | **Да** |

**Подробные описания полей:**

> **Поле: `success`** (boolean)
>
Статус регистрации подписчика.

| Значение | Описание |
| :--- | :--- |
| `true` | Подписка успешно оформлена, веб-модуль начнет получать события. |
| `false` | Не удалось установить подписку (например, из-за внутренних ограничений хоста). |

---


---

### broadcast.onLifecycleChanged

Позволяет веб-модулю подписаться на события изменения жизненного цикла хост-приложения. После подписки, при каждом изменении состояния приложения, веб-модуль получает уведомление.

**Ответы:**

- **`Response`** - Жизненный цикл изменился

*Схема: `BroadcastOnLifecycleChangedResponse`*

```json
{
  "lifecycleEvent": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `lifecycleEvent` | `string` | *См. подробное описание ниже* | **Да** |

**Подробные описания полей:**

> **Поле: `lifecycleEvent`** (string)
>
Текущее состояние жизненного цикла приложения.

| Значение | Состояние | Описание |
|---|---|---|
| `resumed` | Активно | Приложение на экране и реагирует на ввод пользователя. Полноценная работа, интерфейс обновляется. |
| `inactive` | Не активно | Временное отсутствие фокуса: звонок, TouchID, переход в меню активных приложений и т.п. Не получает ввод, но остаётся на экране. Возможен переход в paused. |
| `paused` | В фоне | Приложение свернуто или не видно пользователю. Не получает ввод, не отрисовывает фреймы, выполняется в фоне. |
| `detached` | Отключено | Движок работает без отображения (например, FlutterView уничтожен). Код ещё выполняется, но view отсутствует. Возможен полный выход. |

---


---

### broadcast.onChangeVisibility

Регистрирует слушатель событий изменения видимости веб-модуля. 

Событие триггерится в следующих случаях:
- Переход пользователя на другой экран в стеке навигации.
- Возврат пользователя назад к текущему модулю.
- Появление/скрытие нативного Bottom Sheet или диалогового окна поверх веб-части.
- Сворачивание/разворачивание самого приложения (зависит от платформы).

**Ответы:**

- **`Response`** - Событие изменения видимости

*Схема: `BroadcastOnChangeVisibilityResponse`*

```json
{
  "visible": "boolean - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `visible` | `boolean` | *См. подробное описание ниже* | **Да** |

**Подробные описания полей:**

> **Поле: `visible`** (boolean)
>
Текущий статус видимости веб-модуля.

| Значение | Статус | Описание |
| :--- | :--- | :--- |
| `true` | **Видимый** | Модуль вернулся на передний план (например, закрыт перекрывающий экран или нативный Bottom Sheet). |
| `false` | **Скрытый** | Модуль перекрыт другим экраном, модальным окном или нативным компонентом. Работа в фоне продолжается. |

---


---

### broadcast.onServerMessage

Инициирует подписку на серверные уведомления (SSE). После вызова метода нативная часть начинает транслировать входящие события, подходящие под фильтры `product` и `eventCode`, в веб-модуль.

### Жизненный цикл подписки:
- **Начало**: С момента успешного вызова метода.
- **Окончание**: При закрытии текущего веб-модуля (микрофронта).
- **Множественность**: Можно создавать несколько подписок на один продукт с разными `eventCode`.

**Тело запроса:**

*Схема: `BroadcastOnServerMessageRequest`*

```json
{
  "product": "string - required",
  "eventCode": "string"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `product` | `string` | Идентификатор микрофронта (например, `sbp_microfront_ui`). | **Да** |
| `eventCode` | `string` | Код события для уточняющей фильтрации. | Нет |

**Ответы:**

- **`Response`** - Событие от сервера получено

*Схема: `BroadcastOnServerMessageResponse`*

```json
{
  "id": "integer - required",
  "product": "string - required",
  "eventCode": "string - required",
  "message": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `id` | `integer` | Уникальный идентификатор сообщения со стороны SSE-шлюза. | **Да** |
| `product` | `string` | Идентификатор продукта, к которому относится сообщение. | **Да** |
| `eventCode` | `string` | Код события, определяющий бизнес-логику обработки. | **Да** |
| `message` | `string` | *См. подробное описание ниже* | **Да** |

**Подробные описания полей:**

> **Поле: `message`** (string)
>
Произвольная структура данных в формате JSON-строки. 

**Важно:** Хост не парсит это поле. Продуктовый модуль должен выполнить `JSON.parse(message)` самостоятельно для получения данных.

---


---

## clipboard

### clipboard.copy

Сохраняет текст в буфер обмена.

**Тело запроса:**

*Схема: `ClipboardCopyRequest`*

```json
{
  "text": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `text` | `string` | Текст, который нужно сохранить. | **Да** |

**Ответы:**

- **`Response`** - Успешный переход и возврат результата

*Схема: `ClipboardCopyResponse`*

```json
{
  "text": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `text` | `string` | Текст, который копировали. | **Да** |

---

### clipboard.paste

Возвращает последнее сохраненное в буфер обмена.

**Ответы:**

- **`Response`** - Успешный переход и возврат результата

*Схема: `ClipboardPasteResponse`*

```json
{
  "text": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `text` | `string` | Текст из буфера обмена. | **Да** |

---

## confirmation

### confirmation.confirm

Инициирует многошаговый процесс подтверждения операции (SMS, Biometrics, Password). 

**Кейсы использования `operationData`:**
1. **Неплатежная**: только `operationType`.
2. **Платежная**: `operationType` + `transactionId` + сумма/валюта.
3. **Лимитируемая**: Платежная + (`accountId` ИЛИ `accountNumber`).

**Тело запроса:**

*Схема: `ConfirmationConfirmRequest`*

```json
{
  "operationData": "object - required",
  "endpoints": "object - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `operationData` | `object` | *См. подробное описание ниже* | **Да** |
| `endpoints` | `object` | *См. подробное описание ниже* | **Да** |

**Подробные описания полей:**

> **Поле: `operationData`** (object)
>
Данные операции. Состав полей зависит от типа подтверждения.

| Параметр | Тип | Обязательность | Описание |
| :--- | :--- | :--- | :--- |
| `operationType` | `string` | **Да** | Идентификатор типа операции. |
| `transactionId` | `string` | **Для платежей** | Уникальный ID транзакции. |
| `operationSum` | `number` | **Для платежей** | Сумма операции. |
| `operationSumAccountCurrency` | `string` | **Для платежей** | Валюта операции (например, RUR). |
| `accountId` | `string` | **Условие** | ID счета для проверки лимитов через монолит. |
| `accountNumber` | `string` | **Условие** | Номер счета для проверки через МС Лимиты. |

---

> **Поле: `endpoints`** (object)
>
Пути к API для обработки подтверждения.

| Поле | Обязательность | Описание |
| :--- | :--- | :--- |
| `initConfirmation` | **Да** | Путь для инициализации (высылка SMS/Push). |
| `checkConfirmation` | Нет | Зарезервировано. В текущей реализации не используется. |

---


**Ответы:**

- **`Response`** - Процесс подтверждения завершен

*Схема: `ConfirmationConfirmResponse`*

```json
{
  "status": "string - required",
  "params": "object - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `status` | `string` | *См. подробное описание ниже* | **Да** |
| `params` | `object` | Копия объекта `operationData`, переданного в запросе. Используется для сопоставления ответа с операцией. | **Да** |

**Подробные описания полей:**

> **Поле: `status`** (string)
>
Результат взаимодействия с пользователем:
- `ok`: Операция успешно подтверждена.
- `cancel`: Пользователь самостоятельно прервал процесс (нажал 'отмена').

---


---

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
  "type": "unknown"
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
  "type": "unknown"
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

## pdfViewer

### pdfViewer.show

Открывает полноэкранный нативный просмотрщик для указанного PDF-файла. Просмотрщик обычно предоставляет базовые функции: зум, прокрутку и (в зависимости от платформы) возможность поделиться файлом.

**Тело запроса:**

*Схема: `PdfViewerShowRequest`*

```json
{
  "url": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `url` | `string` | *См. подробное описание ниже* | **Да** |

**Подробные описания полей:**

> **Поле: `url`** (string)
>
Прямая ссылка на PDF-файл для отображения.

| Протокол | Пример |
| :--- | :--- |
| **HTTP/HTTPS** | `https://example.com/doc.pdf` |
| **Local File** | `file:///path/to/document.pdf` (для Cordova) |

---


**Ответы:**

- **`Response`** - Просмотрщик успешно открыт

*Схема: `PdfViewerShowResponse`*

```json
{
  "type": "object"
}
```
- **`Error: 400`** - Ошибка при открытии или загрузке файла

*Схема: `JsonRpcError`*

```json
{
  "jsonrpc": "string - required",
  "error": "object - required",
  "id": "integer - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `jsonrpc` | `string` | - | **Да** |
| `error` | `object` | - | **Да** |
| `id` | `integer` | - | **Да** |

---

## services

### services.app.Info

Возвращает метаданные текущей сборки приложения: версию и номер билда. Эти данные полезны для отображения в разделе «О приложении» или для передачи в системы аналитики.

**Ответы:**

- **`Response`** - Объект с информацией о версии и билде

*Схема: `ServicesAppInfoResponse`*

```json
{
  "appVersion": "string - required",
  "buildNumber": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `appVersion` | `string` | Семантическая версия приложения (например, `1.2.0`). | **Да** |
| `buildNumber` | `string` | Порядковый номер сборки (билд), обычно инкрементируется при каждой публикации в сторы. | **Да** |

---

### services.biometrics.authorize

Авторизация по биометрии.

**Ответы:**

- **`Response`** - Успешный переход и возврат результата

*Схема: `ServicesBiometrics.authorizeResponse`*

```json
{
  "type": "boolean"
}
```

---

### services.biometrics.getAvailableAuthType

Получение доступного типа биометрии на устройстве.

**Ответы:**

- **`Response`** - Успешный возврат типа биометрии

*Схема: `ServicesBiometrics.getAvailableAuthTypeResponse`*

```json
{
  "type": "string"
}
```

---

### services.biometrics.isBiometricsEnabled

Проверка, включена ли биометрическая авторизация в настройках приложения.

**Ответы:**

- **`Response`** - Успешный возврат состояния биометрии

*Схема: `ServicesBiometricsIsBiometricsEnabledResponse`*

```json
{
  "result": "boolean - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `boolean` | Флаг состояния биометрии: `true` — включена, `false` — выключена. | **Да** |

---

### services.biometrics.setBiometricsState

Установить состояние биометрии: включить или отключить.

**Тело запроса:**

*Схема: `ServicesBiometricsSetBiometricsStateRequest`*

```json
{
  "enabled": "boolean - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Флаг для управления состоянием: `true` — включить биометрию, `false` — отключить. | **Да** |

**Ответы:**

- **`Response`** - Успешное выполнение команды

*Схема: `ServicesBiometricsSetBiometricsStateResponse`*

```json
{
  "result": "boolean - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `boolean` | Успешно ли была выполнена команда по изменению состояния биометрии (включение или отключение). | **Да** |

---

### services.callerId.checkAvailable

Проверяет, включена ли функция определителя номера в системных настройках устройства. Этот метод позволяет веб-интерфейсу узнать, активно ли расширение Call Directory (на iOS) или аналогичные службы на Android, чтобы предложить пользователю их включить.

**Ответы:**

- **`Response`** - Объект со статусом доступности определителя номера

*Схема: `ServicesCallerIdCheckAvailableResponse`*

```json
{
  "callerIdAvailable": "boolean - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `callerIdAvailable` | `boolean` | *См. подробное описание ниже* | **Да** |

**Подробные описания полей:**

> **Поле: `callerIdAvailable`** (boolean)
>
Текущий статус определителя номера: `true` — расширение активно и включено в системных настройках, `false` — определитель выключен или не поддерживается.

---


---

### services.contacts.get

Запрашивает список контактов из телефонной книги устройства. 

**Важно:** Для Flutter на iOS 18+ поддерживается статус `isLimitedAccess`, который позволяет понять, что пользователь предоставил доступ не ко всей книге, а только к выбранным записям.

**Ответы:**

- **`Response`** - Успешное получение списка контактов

*Схема: `ServicesContactsGetResponse`*

```json
{
  "result": "object - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `object` | Результат запроса списка контактов. | **Да** |

---

### services.deviceInfo.getDeviceInfoForStatistics

Возвращает расширенную информацию об устройстве, включая идентификаторы оборудования и версии браузерных движков. Используется преимущественно для систем аналитики и сбора статистики.

**Ответы:**

- **`Response`** - Успешное получение статистических данных

*Схема: `ServicesDeviceInfoGetDeviceInfoForStatisticsResponse`*

```json
{
  "result": "object - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `object` | Объект с технической информацией об устройстве для аналитики и статистики. | **Да** |

---

### services.deviceInfo.getInfo

Возвращает техническую информацию об устройстве и текущем способе авторизации пользователя. Поля `androidId` и `identifierForVendor` являются платформозависимыми.

**Ответы:**

- **`Response`** - Успешное получение информации

*Схема: `ServicesDeviceInfoGetInfoResponse`*

```json
{
  "result": "object - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `object` | Объект с информацией об устройстве. | **Да** |

---

### services.imagePicker.fromGallery

Открывает системную галерею устройства для выбора одного изображения. После выбора файл конвертируется в строку base64 с префиксом Data URI для удобного отображения в веб-интерфейсе (например, в теге `<img>`).

**Ответы:**

- **`Response`** - Объект с данными выбранного изображения

*Схема: `ServicesImagePickerFromGalleryResponse`*

```json
{
  "image": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `image` | `string` | Выбранное изображение в формате base64 Data URI. Включает метаданные (тип контента и кодировку). | **Да** |

---

### services.localStorage.read

Чтение данных из локального хранилища. Позволяет выбирать между обычным и защищенным хранилищем с помощью флага isSecure.

**Тело запроса:**

*Схема: `LocalStorageReadRequest`*

```json
{
  "key": "string - required",
  "isSecure": "boolean - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `key` | `string` | Ключ, по которому необходимо считать значение. | **Да** |
| `isSecure` | `boolean` | Тип используемого хранилища: `true` — защищенное (Secure Storage), `false` — обычное (Shared Preferences / UserDefaults). | **Да** |

**Ответы:**

- **`Response`** - Успешное чтение значения

*Схема: `LocalStorageReadResponse`*

```json
{
  "result": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `string` | Считанное значение в формате строки. Если данных по ключу нет, может вернуться пустая строка или null (зависит от реализации). | **Да** |

---

### services.localStorage.write

Запись данных в локальное хранилище. Позволяет сохранять данные в обычном или защищенном виде.

**Тело запроса:**

*Схема: `LocalStorageWriteRequest`*

```json
{
  "key": "string - required",
  "value": "any - required",
  "isSecure": "boolean - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `key` | `string` | Ключ, по которому будут сохранены данные. | **Да** |
| `value` | `any` | Значение для записи. Может быть любым валидным JSON-типом (string, number, boolean, object, array). | **Да** |
| `isSecure` | `boolean` | Тип используемого хранилища: `true` — защищенное (Secure Storage), `false` — обычное (Shared Preferences / UserDefaults). | **Да** |

**Ответы:**

- **`Response`** - Успешное завершение операции записи

*Схема: `LocalStorageWriteResponse`*

```json
{
  "type": "object"
}
```

---

### services.location.getLocation

Запрашивает текущие координаты устройства с указанной точностью.

**Тело запроса:**

*Схема: `LocationGetLocationRequest`*

```json
{
  "accuracy": "string"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `accuracy` | `string` | *См. подробное описание ниже* | Нет |

**Подробные описания полей:**

> **Поле: `accuracy`** (string)
>
Желаемая точность местоположения.

| Значение | Описание |
|---|---|
| `high` | Максимальная точность (GPS, Wi-Fi, сети). Высокий расход батареи. |
| `balanced` | Оптимальная точность (Wi-Fi, сети). Баланс энергии и точности. |
| `low` | Грубая точность (сотовые вышки). Низкое энергопотребление. |
| `powerSave` | Максимальная экономия заряда. |
| `navigation` | Высокая частота обновлений для режима навигации. |
| `reduced` | Пассивный режим (использует данные от других приложений). |

---


**Ответы:**

- **`Response`** - Успешный ответ (содержимое result)

*Схема: `LocationGetLocationResponse`*

```json
{
  "latitude": "number - required",
  "longitude": "number - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `latitude` | `number` | Широта в десятичных градусах. | **Да** |
| `longitude` | `number` | Долгота в десятичных градусах. | **Да** |
- **`Error: 400`** - Ошибка выполнения операции (JSON-RPC Error)

*Схема: `JsonRpcError`*

```json
{
  "jsonrpc": "string - required",
  "error": "object - required",
  "id": "integer - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `jsonrpc` | `string` | - | **Да** |
| `error` | `object` | - | **Да** |
| `id` | `integer` | - | **Да** |

---

### services.payControl.checkAvailable

Проверяет возможность использования системы PayControl для подтверждения операций. Метод является кроссплатформенным и работает на Flutter и Cordova.

**Ответы:**

- **`Response`** - Успешный возврат статуса доступности

*Схема: `ServicesPayControlCheckAvailableResponse`*

```json
{
  "result": "boolean - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `boolean` | *См. подробное описание ниже* | **Да** |

**Подробные описания полей:**

> **Поле: `result`** (boolean)
>
Флаг доступности сервиса PayControl на текущем устройстве. `true` — сервис доступен и готов к работе, `false` — сервис недоступен (например, не установлено необходимое ПО или устройство не поддерживает требования безопасности).

---


---

### services.payControl.confirmTransaction

Подтверждение финансовой или значимой операции через сервис PayControl. Возвращает данные, необходимые для завершения транзакции на стороне бэкенда.

**Тело запроса:**

*Схема: `ServicesPayControlConfirmTransactionRequest`*

```json
{
  "transactionId": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `transactionId` | `string` | Уникальный идентификатор транзакции, которую необходимо подтвердить. | **Да** |

**Ответы:**

- **`Response`** - Операция успешно подтверждена

*Схема: `ServicesPayControlConfirmTransactionResponse`*

```json
{
  "result": "object - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `object` | Объект с результатом подтверждения операции. | **Да** |

---

### services.payControl.getUserId

Возвращает идентификатор текущего пользователя, зарегистрированного в сервисе PayControl. Метод доступен как на Flutter, так и на Cordova.

**Ответы:**

- **`Response`** - Успешное получение ID пользователя

*Схема: `ServicesPayControlGetUserIdResponse`*

```json
{
  "result": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `string` | Уникальный идентификатор пользователя в системе PayControl. | **Да** |

---

### services.permission.check

Проверяет состояние разрешений для системных функций устройства. Метод является информационным: он **не вызывает** системное окно запроса доступа.

**Тело запроса:**

*Схема: `PermissionCheckRequest`*

```json
{
  "permissions": "array[string] - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `permissions` | `array[string]` | *См. подробное описание ниже* | **Да** |

**Подробные описания полей:**

> **Поле: `permissions`** (array[string])
>
Список функций для проверки. 

| Категория | Доступные значения |
|---|---|
| **Основные** | `camera`, `microphone`, `contacts`, `phone`, `sms`, `storage`, `ignoreBatteryOptimizations` |
| **Гео** | `location`, `locationAlways`, `locationWhenInUse`, `accessMediaLocation` |
| **Медиа** | `photos`, `photosAddOnly`, `mediaLibrary`, `videos`, `audio`, `accessMediaLocation` |
| **Связь** | `bluetooth`, `bluetoothScan`, `bluetoothAdvertise`, `bluetoothConnect`, `nearbyWifiDevices` |
| **Системные** | `notification`, `criticalAlerts`, `accessNotificationPolicy`, `activityRecognition`, `sensors`, `sensorsAlways`, `speech`, `reminders` |
| **Дополнительно** | `manageExternalStorage`, `systemAlertWindow`, `requestInstallPackages`, `appTrackingTransparency`, `scheduleExactAlarm`, `backgroundRefresh`, `assistant` |
| **Календарь** | `calendarWriteOnly`, `calendarFullAccess` |

---


**Ответы:**

- **`Response`** - Результат проверки доступов

*Схема: `PermissionCheckResponse`*

```json
{
  "type": "object"
}
```

---

### services.permission.get

Запрашивает у пользователя разрешения для доступа к системным функциям. В отличие от `permission.check`, этот метод **вызывает системное диалоговое окно**. Если пользователь ранее навсегда запретил доступ, окно не появится, и вернется статус `deniedAlways`.

**Тело запроса:**

*Схема: `PermissionGetRequest`*

```json
{
  "permissions": "array[string] - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `permissions` | `array[string]` | *См. подробное описание ниже* | **Да** |

**Подробные описания полей:**

> **Поле: `permissions`** (array[string])
>
Список функций, для которых нужно вызвать системный запрос доступа.

| Категория | Доступные значения |
|---|---|
| **Основные** | `camera`, `microphone`, `contacts`, `phone`, `sms`, `storage`, `ignoreBatteryOptimizations` |
| **Гео** | `location`, `locationAlways`, `locationWhenInUse`, `accessMediaLocation` |
| **Медиа** | `photos`, `photosAddOnly`, `mediaLibrary`, `videos`, `audio`, `accessMediaLocation` |
| **Связь** | `bluetooth`, `bluetoothScan`, `bluetoothAdvertise`, `bluetoothConnect`, `nearbyWifiDevices` |
| **Системные** | `notification`, `criticalAlerts`, `accessNotificationPolicy`, `activityRecognition`, `sensors`, `sensorsAlways`, `speech`, `reminders` |
| **Дополнительно** | `manageExternalStorage`, `systemAlertWindow`, `requestInstallPackages`, `appTrackingTransparency`, `scheduleExactAlarm`, `backgroundRefresh`, `assistant` |
| **Календарь** | `calendarWriteOnly`, `calendarFullAccess` |

---


**Ответы:**

- **`Response`** - Объект с актуальными статусами доступов после запроса

*Схема: `PermissionGetResponse`*

```json
{
  "type": "object"
}
```

---

### services.push.isPushEnabled

Проверяет, включены ли пуш-уведомления. Метод учитывает как внутренний статус подписки в приложении, так и наличие системных разрешений от ОС.

**Ответы:**

- **`Response`** - Успешный возврат статуса пуш-уведомлений

*Схема: `ServicesPushIsPushEnabledResponse`*

```json
{
  "result": "boolean - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `boolean` | Текущий статус пуш-уведомлений: `true` — подписка активна и разрешения получены, `false` — уведомления отключены. | **Да** |

---

### services.push.setPushState

Включить или отключить подписку на пуш-уведомления. Метод подтверждает получение команды, но не гарантирует моментальное изменение статуса на стороне системы.

**Тело запроса:**

*Схема: `ServicesPushSetPushStateRequest`*

```json
{
  "enabled": "boolean - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Флаг управления подпиской: `true` — включить пуши, `false` — отключить. | **Да** |

**Ответы:**

- **`Response`** - Команда успешно принята в обработку

*Схема: `ServicesPushSetPushStateResponse`*

```json
{
  "result": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `string` | Статус обработки команды. Всегда возвращает `success`. Для проверки фактического состояния подписки необходимо вызвать метод `push.isPushEnabled`. | **Да** |

---

### services.scanQrCode

### Различия платформ:

* **Flutter**: Метод только инициирует открытие экрана сканера. Результат сканирования **не возвращается** в вызывающий код. Все последующие действия (обработка кода, переходы) выполняются нативной частью напрямую с микросервисами (МС).
* **Cordova**: Метод открывает камеру, сканирует код и **возвращает** строку с результатом обратно в веб-часть для дальнейшей обработки.

**Ответы:**

- **`Response`** - Успешный вызов сканера

*Схема: `ServicesScanQrCodeResponse`*

```json
{
  "result": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `string` | *См. подробное описание ниже* | **Да** |

**Подробные описания полей:**

> **Поле: `result`** (string)
>
Результат сканирования QR-кода.

| Платформа | Поведение |
|---|---|
| **Cordova** | Возвращает расшифрованную строку из QR-кода. |
| **Flutter** | Возвращает пустую строку или null, так как обработка данных происходит на стороне натива/МС. |

---


---

### services.qr.scanFromFile

### Особенности работы:

* **Flutter**: Открывает системное окно выбора изображений. После выбора файла и успешного сканирования управление **не возвращается** в веб-интерфейс с данными. Все действия по результатам сканирования выполняются нативным кодом напрямую с микросервисами.
* **Cordova**: Позволяет передать конкретный путь к файлу или base64. После сканирования **возвращает** текстовый результат в веб-слой.

**Тело запроса:**

*Схема: `ServicesQrScanFromFileRequest`*

```json
{
  "path": "string"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `path` | `string` | *См. подробное описание ниже* | Нет |

**Подробные описания полей:**

> **Поле: `path`** (string)
>
Путь к файлу. Может быть передан как URL (http/https) или как строка в формате base64. Если параметр не передан, Cordova может открыть системный выбор файла (зависит от реализации).

---


**Ответы:**

- **`Response`** - Файл успешно принят в обработку

*Схема: `ServicesQrScanFromFileResponse`*

```json
{
  "result": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `string` | *См. подробное описание ниже* | **Да** |

**Подробные описания полей:**

> **Поле: `result`** (string)
>
Результат распознавания QR-кода из файла.

| Платформа | Поведение |
|---|---|
| **Cordova** | Возвращает строку, закодированную в QR-коде. |
| **Flutter** | Возвращает пустую строку, так как результат обрабатывается нативной частью и отправляется сразу в МС. |

---


---

### services.sharing.shareFile

Позволяет отправить один или несколько файлов через системное меню «Поделиться». Файлы должны быть предварительно скачаны в локальное хранилище устройства.

**Тело запроса:**

*Схема: `SharingShareFileRequest`*

```json
{
  "paths": "array[string] - required",
  "text": "string",
  "subject": "string",
  "sharePositionOrigin": "array[number]"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `paths` | `array[string]` | Список локальных путей к файлам, которые нужно расшарить. | **Да** |
| `text` | `string` | Текст, который будет добавлен к файлам при отправке. | Нет |
| `subject` | `string` | Тема сообщения (используется в почтовых клиентах). | Нет |
| `sharePositionOrigin` | `array[number]` | Координаты для iPad `[left, top, width, height]`. Определяют точку, из которой «вылетит» системное меню шеринга. | Нет |

**Ответы:**

- **`Response`** - Меню выбора приложений открыто

*Схема: `SharingShareFileResponse`*

```json
{
  "result": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `string` | Статус вызова метода. Возвращает `success`, если системное окно выбора приложений было успешно открыто. | **Да** |

---

### services.sharing.shareText

Вызывает системное диалоговое окно для отправки текста через доступные на устройстве приложения (мессенджеры, почта, заметки).

**Тело запроса:**

*Схема: `SharingShareTextRequest`*

```json
{
  "text": "string - required",
  "subject": "string",
  "sharePositionOrigin": "array[number]"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `text` | `string` | Текст, которым необходимо поделиться. | **Да** |
| `subject` | `string` | Тема сообщения или заголовок (используется, например, при отправке через Email). | Нет |
| `sharePositionOrigin` | `array[number]` | *См. подробное описание ниже* | Нет |

**Подробные описания полей:**

> **Поле: `sharePositionOrigin`** (array[number])
>
Координаты для позиционирования окна шеринга на iPad в формате `[left, top, width, height]`. Позволяет привязать всплывающее окно к конкретному элементу интерфейса.

---


**Ответы:**

- **`Response`** - Диалог шеринга успешно открыт

*Схема: `SharingShareTextResponse`*

```json
{
  "result": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `string` | Статус вызова метода. Возвращает `success`, если системное диалоговое окно шеринга было успешно вызвано. | **Да** |

---

### services.sharing.shareUrl

Открывает системное окно шеринга для передачи ссылки. На мобильных устройствах это обычно вызывает нативную панель с выбором мессенджеров, почты и социальных сетей.

**Тело запроса:**

*Схема: `SharingShareUrlRequest`*

```json
{
  "url": "string - required",
  "urlTitle": "string",
  "sharePositionOrigin": "array[number]"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `url` | `string` | URL-адрес, которым необходимо поделиться. | **Да** |
| `urlTitle` | `string` | Название или заголовок для ссылки, который будет отображаться в превью сообщения. | Нет |
| `sharePositionOrigin` | `array[number]` | Координаты для iPad `[left, top, width, height]`. Нужны, чтобы стрелочка всплывающего окна (popover) указывала на правильный элемент интерфейса. | Нет |

**Ответы:**

- **`Response`** - Системное окно шеринга открыто

*Схема: `SharingShareUrlResponse`*

```json
{
  "result": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `string` | Статус вызова метода. Возвращает `success`, если системное меню шеринга было успешно открыто. | **Да** |

---

### services.smsConfirmation.confirm

## ВНИМАНИЕ: Только для SMSConfirmationParamsV2
Метод для подтверждения операций через SMS. 

**Важно:** Flutter-приложение поддерживает только формат параметров V2. Использование параметров V1 приведет к ошибке выполнения.

**Тело запроса:**

*Схема: `SmsConfirmationConfirmRequest`*

```json
{
  "codeSize": "integer - required",
  "requestCodeParams": "object - required",
  "checkCodeParams": "object - required",
  "additionalCheckParams": "object"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `codeSize` | `integer` | Длина SMS-кода (например, 4 или 6 символов). | **Да** |
| `requestCodeParams` | `object` | Параметры для запроса (отправки) SMS-кода. | **Да** |
| `checkCodeParams` | `object` | Параметры для проверки введенного пользователем кода. | **Да** |
| `additionalCheckParams` | `object` | Дополнительные параметры проверки (опционально). | Нет |

**Ответы:**

- **`Response`** - Операция успешно подтверждена

*Схема: `SmsConfirmationConfirmResponse`*

```json
{
  "result": "boolean - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `result` | `boolean` | Результат подтверждения: `true` — код успешно проверен, операция подтверждена; `false` — ошибка подтверждения или отмена пользователем. | **Да** |

---

### services.telephone.call

Инициирует переход в нативное приложение для совершения звонков. Метод не совершает звонок автоматически, а только открывает диалер с предзаполненным номером.

**Тело запроса:**

*Схема: `TelephoneCallRequest`*

```json
{
  "phoneNumber": "string - required"
}
```

| Поле | Тип | Описание | Обязательное |
| --- | --- | --- | --- |
| `phoneNumber` | `string` | Номер телефона, который будет подставлен в приложение для звонков. Рекомендуется использовать международный формат (например, +79991234567). | **Да** |

**Ответы:**

- **`Response`** - Приложение для звонков успешно вызвано

*Схема: `TelephoneCallResponse`*

```json
{
  "type": "boolean"
}
```

---

### services.waiter.hide

Скрывает полноэкранный индикатор загрузки (лоадер), который был вызван хост-приложением или методом `waiter.show`. Рекомендуется вызывать сразу после получения данных от сервера или завершения длительной фоновой операции.

**Ответы:**

- **`Response`** - Лоадер успешно скрыт

*Схема: `WaiterHideResponse`*

```json
{
  "type": "object"
}
```

---

## tabbar

### tabbar.hide

Скрывает нижнюю навигационную панель. Полезно использовать на экранах с глубокой вложенностью или там, где требуется полноэкранный режим (например, при просмотре документов или в сложных формах).

**Ответы:**

- **`Response`** - Панель навигации успешно скрыта

*Схема: `TabbarHideResponse`*

```json
{
  "type": "object"
}
```

---

### tabbar.show

Делает нижнюю навигационную панель (Tab Bar) видимой. Обычно используется после того, как панель была скрыта методом `tabbar.hide`, или при переходе на экраны, где навигация должна быть доступна пользователю.

**Ответы:**

- **`Response`** - Панель навигации успешно отображена

*Схема: `TabbarShowResponse`*

```json
{
  "type": "object"
}
```

---
