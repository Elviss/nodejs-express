New project of API using Node.js and Express.js

---

This project contains a RESTFul API in Node.js with Express.Js where you can do all the CRUD operations in a data collection.

Uou can use this API as shown bellow:

**Fetch all the available soccer teams:**

`GET localhost:3000/selecoes`

---

**Fetch one single soccer team:**

`GET localhost:3000/selecoes/1`

--- 

**Create a soccer team**

`POST localhost:3000/selecoes`

With the header

`Content-Type: application/json`

And the body 
```
{
  "selecao": "Mexico",
  "grupo": "C"
}
```

---

Delete a soccer team

`DELETE localhost:3000/selecoes/1`

---

**Update a soccer team**

`PUT localhost:3000/selecoes/1`

With the header

`Content-Type: application/json`

And the body
```
{
  "selecao": "Holanda",
  "grupo": "A"
}
```
