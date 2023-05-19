import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

/* Quando o usuário acessar /hello, quero retorna 'Hello Word' */
/* GET: Listar algo; POST : Criar algo; PUT: Atualizar algo; PATCH:Atualizar algo expecífico dentro de um recurso, DELETE: Deletar algo; */

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async () => {
    const memories = await prisma.

  })
  app.get('/memories/:id', async () => {



  })
  app.post('/memories', async () => {



  })
  app.put('/memories/:id', async () => {



  })
  app.delete('/memories/:id', async () => {



  })
}