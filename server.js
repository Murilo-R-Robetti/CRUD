import { fastify } from "fastify";
import 'dotenv/config'
import { DatabasePostgres } from "./database-postgres.js";
//Instancia o servidor
const server = fastify ()
//Instancia o banco de dados
const database= new DatabasePostgres();

server.post("/videos", async (request, reply) => {
  const { title, description, duration } = request.body;

  await database.create({
    title: title,
    description: description,
    duration: duration,
  });

  return reply.status(201).send();
});

server.get("/videos", async (request, reply) => {    
  const {search} = request.query                                
  const videos = await database.list(search);
  return videos;
});

server.put("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  await database.update(videoId, {
    title,
    description,
    duration,
  });

  return reply.status(204).send();
});

server.delete("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;

  await database.delete(videoId);
  return reply.status(204).send();
});


server.listen(
  {
    host:"0.0.0.0",
    port: 3333
  },
  function (erro, endereco) {
    if (erro) {
      console.log("ERRO:" + erro)
    }
    console.log("servidor rodando em " + endereco)
  }  
);
