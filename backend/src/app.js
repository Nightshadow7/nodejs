import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";

const app = express();
const port = 7000;
app.set("port", port)

//rutas

app.use("/api/categorias",categoriaRoutes);

export default app;