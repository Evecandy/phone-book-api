import sql from 'mssql';
import {config}  from '../db/config.js'

// const pool = new sql.ConnectionPool(config.sql);
// await pool.connect();

//getting all persons
export const getAllPersons = async (req, res) => {
  try {
        let pool = await sql.connect(config.sql)
        const persons = await pool.request()
        .query( 'SELECT * FROM persons');
          res.status(200).json(persons.recordset);

  } catch (error) {
          res.status(201).json({ error:'an error occured while retriving persons'})
  } finally {
    sql.close();
  }
    
};

export const createPerson = (req, res) => {
  res.send("create a person using this rooute");
};

export const getPerson = (req, res) => {
  res.send("get a single person");
};

export const updatePerson = (req, res) => {
  res.send("Update a single person here");
};

export const deletePerson = (req, res) => {
  res.send("delete a person");
};
