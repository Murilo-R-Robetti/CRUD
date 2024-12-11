import { randomUUID } from "node:crypto";
import { sql } from "./db.js";

export class DatabasePostgres {

  
  async list(search) {
    let agendamentos;

    if (search) {
      agendamentos = await sql`select * from agendamentos where paciente ilike ${
        "%" + search + "%"
      }`;
    } else {
      agendamentos = await sql`select * from agendamentos`;
    }

    return agendamentos;
  }

  async create(agendamento) {
    const agendamentoId = randomUUID();
    const { paciente, dentista, servico, datahora } = agendamento;

    await sql`insert into agendamentos (id, paciente, dentista, servico, datahora) VALUES (${agendamentoId}, ${paciente}, ${dentista}, ${servico}, ${datahora})`;
  }

  async update(id, agendamento) {
    const { paciente, dentista, servico, datahora } = agendamento;

    await sql`update agendamentos set paciente = ${paciente}, dentista = ${dentista}, servico = ${servico}, datahora = ${datahora} WHERE id = ${id}`;
  }

  async delete(id) {
    await sql`delete from agendamentos where id = ${id}`;
  }
}