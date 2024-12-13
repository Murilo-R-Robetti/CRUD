import { sql } from "../db.js"

async function criar(){
  
  try {
    await sql`
      DROP TABLE IF EXISTS agendamentos;
    ` 
    console.log("Tabela apagada")
  } catch (error) {
    console.log(error)
    
  }
  
  try {
    await sql`
      CREATE TABLE agendamentos (
        id      VARCHAR(50)  PRIMARY KEY,     
        paciente   VARCHAR(100), 
        dentista   VARCHAR(100),
        servico    VARCHAR(100), 
        datahora   VARCHAR(50) 
      );
    `;

    console.log("Tabela criada")
  } catch (error) {
    console.log(error)
    
  }
  
}

criar()