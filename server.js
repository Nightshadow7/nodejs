const http = require('http');
const port = 7000;


/* function requestListener(req,res){
  es mejor pasar  como funcion anonima
}; */
//requestListener

//crea el servidor web
//preferiblemente usar arrow function
const server = http.createServer((req,res) => { 
  //console.log(req.url, req.method, req.headers);
  //process.exit();
  const url= req.url
  const boostrap = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
`;
  let title;
  let body;
  let nav;
  //routing
  nav = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary text-center bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Home</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav d-flex justify-content-lg-center ms-sm-auto text-center fs-5">
          <li class="nav-item">
            <a class="nav-link text-light" href="/users">Users</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/categories">Categories</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/products">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/employees">Employees</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/customers">Customers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/sales">Sales</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/shopping">Shopping</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;
  switch (url) {
    case '/':
      title = 'Home';
      body = `
        <div class="container-fluid mt-5">
          <div class="card text-center text-bg-dark border border-secondary rounded">
            <div class="card-header">
              <h2 class="card-title">${title}</h2>
            </div>
            <div class="card-body d-flex align-items-center">
              <table class="table table-hover text-center border m-4 ">
                <thead>
                  <tr class="text-danger border border-danger rounded">
                    <th scope="col">PRODUCTOS</th>
                    <th scope="col">CANTIDAD</th>
                    <th scope="col">PRECIO</th>
                    <th scope="col">TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Celular</th>
                    <td>10 unidades</td>
                    <td>$1.200.000</td>
                    <td>$12.000.000.00 Pesos</td>
                  </tr>
                  <tr>
                    <th scope="row">Tablet</th>
                    <td>15 Unidades</td>
                    <td>$900.000</td>
                    <td>$13.500.000.00 Pesos</td>
                  </tr>
                  <tr>
                    <th scope="row">Computador AllinOne</th>
                    <td>10 Unidades</td>
                    <td>$1.500.000 </td>
                    <td>$15.000.000.00 Pesos</td>
                  </tr>
                  <tr>
                    <th scope="row">Computador de mesa</th>
                    <td>40 Unidades</td>
                    <td>$4.200.000</td>
                    <td>$168.000.000.00 Pesos</td>
                  </tr>
                  <tr>
                    <th scope="row">Portatil</th>
                    <td>70 Unidades</td>
                    <td>$3.500.000</td>
                    <td>$245.000.000.00 Pesos</td>
                  </tr>
                  <tr>
                    <th scope="row">Audifonos</th>
                    <td>5 Unidades</td>
                    <td>$250.000</td>
                    <td>$1.250.000.00 Pesos</td>
                  </tr>
                  <tr>
                    <th scope="row">Cargador</th>
                    <td>8 Unidades</td>
                    <td>$50.000</td>
                    <td>$400.000.00 Pesos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>`
      break;
    
    case '/users':
      title = `Usuarios`;
      body = `
        <div class="container-fluid mt-5">
          <div class="card text-center text-bg-dark border border-secondary rounded">
            <div class="card-header">
              <h2 class="card-title">${title}</h2>
            </div>
            <div class="card-body d-flex align-items-center">
              <table class="table table-hover text-center border m-4 ">
                <thead class="text-danger border border-danger rounded">
                    <th scope="col">NOMBRE</th>
                    <th scope="col">TELEFONO</th>
                    <th scope="col">EMAIL</th>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>1234567890</td>
                    <td>johndoe@example.com</td>
                  </tr>
                  <tr>
                    <td>Jane Smith</td>
                    <td>0987654321</td>
                    <td>janesmith@example.com</td>
                  </tr>
                  <tr>
                    <td>Robert Johnson</td>
                    <td>5555555555</td>
                    <td>robertjohnson@example.com</td>
                  </tr>
                  <tr>
                    <td>Emily Davis</td>
                    <td>9876543210</td>
                    <td>emilydavis@example.com</td>
                  </tr>
                  <tr>
                    <td>Michael Wilson</td>
                    <td>7777777777</td>
                    <td>michaelwilson@example.com</td>
                  </tr>
                  <tr>
                    <td>Sarah Anderson</td>
                    <td>3333333333</td>
                    <td>sarahanderson@example.com</td>
                  </tr>
                  <tr>
                    <td>David Thompson</td>
                    <td>4567890123</td>
                    <td>davidthompson@example.com</td>
                  </tr>
                  <tr>
                    <td>Amy Harris</td>
                    <td>8765432109</td>
                    <td>amyharris@example.com</td>
                  </tr>
                  <tr>
                    <td>Christopher Walker</td>
                    <td>2222222222</td>
                    <td>christopherwalker@example.com</td>
                  </tr>
                  <tr>
                    <td>Olivia Martin</td>
                    <td>4444444444</td>
                    <td>oliviamartin@example.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>`        
      break;
    case '/categories':
      title = `Categorias`;
      body = `
        <div class="container-fluid mt-5">
          <div class="card text-center text-bg-dark border border-secondary rounded">
            <div class="card-header">
              <h2 class="card-title">${title}</h2>
            </div>
            <div class="card-body d-flex align-items-center">
              <table class="table table-hover text-center border m-4 ">
                <thead>
                  <tr class="text-danger border border-danger rounded">
                    <th scope="col">Categoría</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Número de Productos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Categoría A</td>
                    <td>Descripción de la categoría A</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>Categoría B</td>
                    <td>Descripción de la categoría B</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Categoría C</td>
                    <td>Descripción de la categoría C</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>Categoría D</td>
                    <td>Descripción de la categoría D</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Categoría E</td>
                    <td>Descripción de la categoría E</td>
                    <td>6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>`
      break; 
    case '/products':
      title = `Productos`;
      body = `
        <div class="container-fluid mt-5">
          <div class="card text-center text-bg-dark border border-secondary rounded">
            <div class="card-header">
              <h2 class="card-title">${title}</h2>
            </div>
            <div class="card-body d-flex align-items-center">
              <table class="table table-hover text-center border m-4 ">
                <thead>
                  <tr class="text-danger border border-danger rounded">
                    <th scope="col">Producto</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Producto A</td>
                    <td>Descripción del Producto A</td>
                    <td>$10.00</td>
                  </tr>
                  <tr>
                    <td>Producto B</td>
                    <td>Descripción del Producto B</td>
                    <td>$15.00</td>
                  </tr>
                  <tr>
                    <td>Producto C</td>
                    <td>Descripción del Producto C</td>
                    <td>$12.50</td>
                  </tr>
                  <tr>
                    <td>Producto D</td>
                    <td>Descripción del Producto D</td>
                    <td>$8.99</td>
                  </tr>
                  <tr>
                    <td>Producto E</td>
                    <td>Descripción del Producto E</td>
                    <td>$20.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>`;
      break;
    case '/employees':
      title = `Empleados`;
      body = `
        <div class="container-fluid mt-5">
          <div class="card text-center text-bg-dark border border-secondary rounded">
            <div class="card-header">
              <h2 class="card-title">${title}</h2>
            </div>
            <div class="card-body d-flex align-items-center">
              <table class="table table-hover text-center border m-4 ">
                <thead>
                  <tr class="text-danger border border-danger rounded">
                    <th>Nombre</th>
                    <th>Teléfono</th>
                    <th>Correo Electrónico</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Empleado 1</td>
                    <td>1234567890</td>
                    <td>empleado1@example.com</td>
                  </tr>
                  <tr>
                    <td>Empleado 2</td>
                    <td>9876543210</td>
                    <td>empleado2@example.com</td>
                  </tr>
                  <tr>
                    <td>Empleado 3</td>
                    <td>4567890123</td>
                    <td>empleado3@example.com</td>
                  </tr>
                  <tr>
                    <td>Empleado 4</td>
                    <td>7890123456</td>
                    <td>empleado4@example.com</td>
                  </tr>
                  <tr>
                    <td>Empleado 5</td>
                    <td>3210987654</td>
                    <td>empleado5@example.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>`;
      break;
    case '/customers':
      title = `Clientes`;
      body = `
        <div class="container-fluid mt-5">
          <div class="card text-center text-bg-dark border border-secondary rounded">
            <div class="card-header">
              <h2 class="card-title">${title}</h2>
            </div>
            <div class="card-body d-flex align-items-center">
              <table class="table table-hover text-center border m-4 ">
                <form action="alo.php" method="post">
                  <label for="name">nombre</label>
                  <input type="text" name="name">
                  <label for="email">email</label>
                  <input type="email" name="email">
                  <label for="telefono">telefono</label>
                  <input type="number" name="telefono">
                  <input type="submit" value="enviar">
                </form>
              </table
            </div>
          </div>
        </div>`;
      break;
    case '/sales':
      title = `Ventas`;
      body = `
        <div class="container-fluid mt-5">
          <div class="card text-center text-bg-dark border border-secondary rounded">
            <div class="card-header">
              <h2 class="card-title">${title}</h2>
            </div>
            <div class="card-body d-flex align-items-center">
              <table class="table table-hover text-center border m-4 ">
                <thead>
                  <tr class="text-danger border border-danger rounded">
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio unitario</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Producto 1</td>
                    <td>2</td>
                    <td>$10.00</td>
                    <td>$20.00</td>
                  </tr>
                  <tr>
                    <td>Producto 2</td>
                    <td>1</td>
                    <td>$15.00</td>
                    <td>$15.00</td>
                  </tr>
                  <tr>
                    <td>Producto 3</td>
                    <td>3</td>
                    <td>$8.50</td>
                    <td>$25.50</td>
                  </tr>
                  <tr>
                    <td>Producto 4</td>
                    <td>2</td>
                    <td>$12.00</td>
                    <td>$24.00</td>
                  </tr>
                  <tr>
                    <td>Producto 5</td>
                    <td>1</td>
                    <td>$18.75</td>
                    <td>$18.75</td>
                  </tr>
                  <tr class="total">
                    <td colspan="3" align="right">Total:</td>
                    <td>$103.25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>`
      break;
    case '/shopping':
      title = 'Servicios';
      body = `
        <div class="container-fluid mt-5">
          <div class="card text-center text-bg-dark border border-secondary rounded">
            <div class="card-header">
              <h2 class="card-title">${title}</h2>
            </div>
            <div class="card-body d-flex align-items-center">
              <div class="row">
                <div class="col-12  align-items-center">
                  < h1>La venta mas bizarra del siglo </h1>
                  <img src="https://clipart-library.com/image_gallery2/Forever-Alone-Transparent.png" alt="...">
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      break;
      
    default:
      break;
  }
  res.setHeader('Content-Type', 'text/html');/* explicar que estamos enviando html */
   res.write(`<html>`);
   /* head */
   res.write(`<head>`);
   res.write(`<meta charset="UTF-8">`);
   res.write(`<title>${title}</title>`);
   res.write(`${boostrap}`);
   res.write(`${nav}`);
   res.write(`</head>`);
   /* body */
   res.write(`<body>`);
   res.write(`${body}`);
   res.write(`</body>`);
   res.write(`</html>`);
   return res.end();


});
server.listen(7000);

// res.write("<html>");
//       res.write("<head><title> My first responsive page</title></head>");
//       res.write(`<body>
//                 <form action="/message" method="post">
//                   <label for="message" >Algun mensaje</label><br>
//                   <input 
//                     type="text" 
//                     id="message"
//                     name="message" 
//                     required
//                   />
//                   <input type="submit" value="submit">
//                 </form>
//               </body>`);
//       res.write("</html>");
//     return res.end();