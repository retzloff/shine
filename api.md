**Personnel**
----

**/personnel**

* **Method:**

  GET

* **Success Response:**

  * **Code:** 200 OK <br />
  * **Content:** <br />
    `{ id: 6,`<br />
      `lastname: "Atkinson",`<br />
      `firstname: "Brian",`<br />
      `middlename: "William",`<br />
      `suffixname: null`<br />
    `},`<br />
    `{` <br />
      `id: 10,`<br />
      `lastname: "Daniels",`<br />
      `firstname: "Dale",`<br />
      `middlename: null,`<br />
      `suffixname: null`<br />
    `}`

* Error Response: None

**/personnel/:id**

* **Method:**

  GET

*  **URL Params**

   id : Personnel ID

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** <br />
    `{ id: 6,`<br />
      `lastname: "Atkinson",`<br />
      `firstname: "Brian",`<br />
      `middlename: "William",`<br />
      `suffixname: null`<br />
    `}`

* **Error Response:**

  * **Code:** 400 BAD REQUEST

**/personnel/:id/specialaccesses**

* **Method:**

  GET

*  **URL Params**

   id : Personnel ID

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** <br />
    `[ "apple", "bannana"]`

* **Error Response:** None
