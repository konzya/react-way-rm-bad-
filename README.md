---
title: Flutter <-> React Bridge API (JSON-RPC) v1.0.0
language_tabs: []
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="flutter-react-bridge-api-json-rpc-">Flutter <-> React Bridge API (JSON-RPC) v1.0.0</h1>

> Scroll down for example requests and responses.

<h1 id="flutter-react-bridge-api-json-rpc--events">Events</h1>

Канал событий от хоста

## Событие от хоста: status_changed

<a id="opIdonStatusChanged"></a>

> Code samples

`GET /events/statusChanged`

> Example responses

> 200 Response

```json
{
  "newStatus": "online"
}
```

<h3 id="событие-от-хоста:-status_changed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Данные события|[StatusEvent](#schemastatusevent)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="flutter-react-bridge-api-json-rpc--user">User</h1>

Канал для работы с пользователем

## Метод JSON-RPC: user_getUser

<a id="opIduser_getUser"></a>

> Code samples

`POST /user/getUser`

> Body parameter

```json
{
  "userId": "string"
}
```

<h3 id="метод-json-rpc:-user_getuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserRequestParams](#schemauserrequestparams)|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "email": "string"
}
```

<h3 id="метод-json-rpc:-user_getuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Результат (result) вызова|[UserResponse](#schemauserresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Ошибка валидации|[ValidationError](#schemavalidationerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Не найдено|[NotFoundError](#schemanotfounderror)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "field": "string",
  "message": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_NotFoundError">NotFoundError</h2>
<!-- backwards compatibility -->
<a id="schemanotfounderror"></a>
<a id="schema_NotFoundError"></a>
<a id="tocSnotfounderror"></a>
<a id="tocsnotfounderror"></a>

```json
{
  "resourceId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resourceId|string|false|none|none|

<h2 id="tocS_StatusEvent">StatusEvent</h2>
<!-- backwards compatibility -->
<a id="schemastatusevent"></a>
<a id="schema_StatusEvent"></a>
<a id="tocSstatusevent"></a>
<a id="tocsstatusevent"></a>

```json
{
  "newStatus": "online"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newStatus|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|newStatus|online|
|newStatus|offline|

<h2 id="tocS_UserRequestParams">UserRequestParams</h2>
<!-- backwards compatibility -->
<a id="schemauserrequestparams"></a>
<a id="schema_UserRequestParams"></a>
<a id="tocSuserrequestparams"></a>
<a id="tocsuserrequestparams"></a>

```json
{
  "userId": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|false|none|none|

<h2 id="tocS_UserResponse">UserResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserresponse"></a>
<a id="schema_UserResponse"></a>
<a id="tocSuserresponse"></a>
<a id="tocsuserresponse"></a>

```json
{
  "id": "string",
  "name": "string",
  "email": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|email|string|false|none|none|

