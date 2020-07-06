# Twitter CLone
## Configurando ambiente ##

#### Clonar repositório do projeto ####

```bash

git clone https://github.com/juniozguedes/django_twitter.git

```

#### Instalar requerimentos:

```bash

pip install -r requirements.txt 

```

#### Rodando migrations

```
python manage.py makemigrations users
python manage.py makemigrations tweets

python manage.py migrate
```

#### Instalando o front

Na pasta frontend:

```bash
npm install
npm start

```

#### Rodando o servidor backend

Na pasta raíz:
```bash
python manage.py runserver

```
rota base: http://localhost:8000/


## Rotas

### Api Login

* Autenticação de usuário e retorno do Token:

Method | URI | body |
--- | --- | --- |
*GET* | `twitter/signin` | **username, password** |
* Body ex.:
```bash
{
    "username": "jehnsen",
    "password": "123456"
}
```

### Api Signup

Method | URI | body |
--- | --- | --- |
*POST* | `twitter/signup` | **username, password** |
* Body ex.:
```bash
{
    "username": "jehnsen",
    "password": "123456"
}
```
### User Follow

Method | URI | body |
--- | --- | --- |
*GET* | `twitter/follow` | **following** |

* Body ex.:
```bash
{
    "following": "1"
}
```

### Tweet Routes

### Show own Tweets

Method | URI |  Headers |
--- | --- | --- |
*GET* | `api/v1` | **Authorization** |

* Header ex.:
```bash
Authorization: Token {token}
ex.: 'Token 0a46fa5cf570f194a692007d3e642bceb31b7985'
```

### Show Tweet

Method | URI | Params | Ex.:
--- | --- | --- |  ---
*GET* | `api/v1/{{id}}` | **id** | `api/v1/3`

### Create Tweet

Method | URI | Body | Headers 
--- | --- | --- | --- 
*POST* | `api/v1/` | **content** | **token** 

* Header ex.:
```bash
Authorization: Token {token} 
ex.: 'Token 0a46fa5cf570f194a692007d3e642bceb31b7985'
```
* Body ex.:
```bash
{
    "content" : "I'm tweeting! Asbaba"
}
```
### Destroy Tweet

Method | URI | Params | Headers | Ex.:
--- | --- | --- | --- | ---
*DELETE* | `api/v1/{{id}}` | **id** | **token** | `api/v1/2`

* Header ex.:
```bash
Authorization: Token {token}
ex.: 'Token 0a46fa5cf570f194a692007d3e642bceb31b7985'
```

### Get User Tweets 

Method | URI | Params | Ex.:
--- | --- | --- | ---
*GET* | `api/v1/{{username}}/tweets` | **username** | `api/v1/jehnsen/tweets`

### Follow User

Method | URI | Body | Headers 
--- | --- | --- | --- 
*POST* | `user/follow` | **following** | **token** 

* Header ex.:
```bash
Authorization: Token {token}
ex.: 'Token 0a46fa5cf570f194a692007d3e642bceb31b7985'
```
* Body ex.:
```bash
"following": "2"
```
### Get Timeline

Method | URI | Headers 
--- | ---  | --- 
*GET* | `api/v1/timeline` | **token** 

* Header ex:
```bash
Authorization: Token {token}
ex.: 'Token 0a46fa5cf570f194a692007d3e642bceb31b7985'
```

### Get Tweet and favorites

Method | URI | Params | Ex.:
--- | --- | --- | --- 
*GET* | `api/v1/{{id}}/favorites` | **id** | `api/v1/2/favorites`

*Header ex:
```bash
Authorization: Token {token}
ex.: 'Token 0a46fa5cf570f194a692007d3e642bceb31b7985'
```

### Favorite Tweet

Method | URI | Params | Headers | Ex
--- | --- | --- | --- | ---
*POST* | `api/v1/{{id}}/favorites` | **id** | **token** |  `http://localhost:8000/api/v1/1/favorites `

*Header ex:
```bash
Authorization: Token {token}
ex.: 'Token 0a46fa5cf570f194a692007d3e642bceb31b7985'
```

## Requerimentos
-  [Python3](https://www.python.org/downloads/)

-  [Node](https://nodejs.org/en/)

-  [MySql](https://www.mysql.com/)

## 🤖 Technologies

-  [Django](https://www.djangoproject.com/)

### Usefull links

* https://stackoverflow.com/questions/58794639/how-to-make-follower-following-system-with-django-model

* https://stackoverflow.com/questions/41790785-simplified-version-of-twitter-understanding-many-to-many-relationships-betwee
# 🚧🏗🚧 Work in progress




