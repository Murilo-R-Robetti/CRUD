import { sql } from "./db.js";
sql `
 DROP TABLE IF EXISTS video;
 `.then(()=> {
    console.log('Tabela apagada')
 })`
`
sql `
 CREATE TABLE videos (
     id          TEXT PRIMARY KEY,
     title       TEXT,
     description TEXT,
     duration    TEXT
 );
`.then(() =>{
    console.log("Tabela criada")
})