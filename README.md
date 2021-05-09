# API Productos

_Contiene la lista con los productos y sus categorias._

### Instalación 🔧

_Instalar los modulos de node_

```
npm install
```

- **URL**

  _https://ejercicio-producto.herokuapp.com/tienda/producto/all_

- **Method:**

  `GET`

- **Success Response:**

- **Code:** 200 <br />
  **Content:**
  ```
`{
                    id: 5,
                    name: "ENERGETICA MR BIG",
                    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
                    price: 1490,
                    discount: 20,
                    category: 1,
                    categorium: {
                        id: 1,
                        name: "bebida energetica"
                    }
                }`

```

- **URL**

  _https://ejercicio-producto.herokuapp.com/tienda/producto/name/{nombreProducto}_

- **Method:**

  `GET`

- **Success Response:**

- **Code:** 200 <br />
  **Content:** `{
                    id: 6,
                    name: "ENERGETICA RED BULL",
                    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
                    price: 1490,
                    discount: 0,
                    category: 1,
                    categorium: {
                        id: 1,
                        name: "bebida energetica"
                    }
                }`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: 'No existen resultados.' }`
    

- **URL**

  _https://ejercicio-producto.herokuapp.com/tienda/producto/category/{:idCategoria}_

- **Method:**

  `GET`

- **Success Response:**

- **Code:** 200 <br />
  **Content:** `{
                    id: 8,
                    name: "PISCO ALTO DEL CARMEN 35º",
                    url_image: "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg",
                    price: 7990,
                    discount: 10,
                    category: 2,
                    categorium: {
                        id: 2,
                        name: "pisco"
                    }
                }`

* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: 'No existen resultados.' }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ Tipo de parametro de permitido." }`


