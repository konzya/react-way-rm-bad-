---
title: Flutter <-> React Bridge API (JSON-RPC) v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="flutter-react-bridge-api-json-rpc-">Flutter <-> React Bridge API (JSON-RPC) v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<h1 id="flutter-react-bridge-api-json-rpc--events">Events</h1>

Канал событий от хоста

## onStatusChanged

<a id="opIdonStatusChanged"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /events/statusChanged \
  -H 'Accept: application/json'

```

```http
GET /events/statusChanged HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/events/statusChanged',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/events/statusChanged',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/events/statusChanged', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/events/statusChanged', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/events/statusChanged");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/events/statusChanged", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /events/statusChanged`

*Событие от хоста: status_changed*

> Example responses

> 200 Response

```json
{
  "newStatus": "online"
}
```

<h3 id="onstatuschanged-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Данные события|[StatusEvent](#schemastatusevent)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="flutter-react-bridge-api-json-rpc--user">User</h1>

Канал для работы с пользователем

## user_getUser

<a id="opIduser_getUser"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /user/getUser \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /user/getUser HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "userId": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/user/getUser',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/user/getUser',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/user/getUser', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/user/getUser', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/user/getUser");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/user/getUser", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /user/getUser`

*Метод JSON-RPC: user_getUser*

> Body parameter

```json
{
  "userId": "string"
}
```

<h3 id="user_getuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserRequestParams](#schemauserrequestparams)|false|none|
|» userId|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "email": "string"
}
```

<h3 id="user_getuser-responses">Responses</h3>

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

