import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";
import constructoraRoutes from "./routes/constructoras.routes.js";
import cotizacionRoutes from "./routes/cotizaciones.routes.js";
import empleadoRoutes from "./routes/empleados.routes.js";
import productoRoutes from "./routes/productos.routes.js";

const app = express();
const port = 8000;
app.set("port", port)

//rutas

app.use("/api/categorias",categoriaRoutes);
app.use("/api/constructoras",constructoraRoutes);
app.use("/api/cotizaciones",cotizacionRoutes);
app.use("/api/empleados", empleadoRoutes);
app.use("/api/productos",productoRoutes);

export default app;