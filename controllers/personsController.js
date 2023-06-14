import sql from "mssql";
import { config } from "../db/config.js";

const pool = new sql.ConnectionPool(config.sql);
await pool.connect();

//getting all persons
export const getAllPersons = async (req, res) => {
  try {
    let pool = await sql.connect(config.sql);
    const persons = await pool.request().query("SELECT * FROM persons");
    res.status(200).json(persons.recordset);
  } catch (error) {
    res.status(201).json({ error: "an error occured while retriving persons" });
  } finally {
    sql.close();
  }
};

const checkPhoneNumberExists = async (mobileNumber) => {
  // returns true if a number exists and false if it doesn't
  try {
    const user = await pool
      .request()
      .input("mobileNumber", sql.VarChar, mobileNumber)
      .query("SELECT * FROM persons WHERE mobileNumber = @mobileNumber");
    console.log(user.recordset);
    if (user.recordset.length == 0) {
      return false;
    } else {
      return true;
    }
  } finally {
    sql.close();
  }
};

console.log(await checkPhoneNumberExists("123456789000001"));

export const createPerson = async (req, res) => {
  try {
    const { fullName, mobileNumber, workNumber, email, homeAddress, groupId } =
      req.body;
    if (await checkPhoneNumberExists(mobileNumber)) {
      res.status(409).json({ message: "Phone number already exists" });
      return;
    } else {
      const createUser = pool
        .request()
        .input("fullName", sql.VarChar, fullName)
        .input("mobileNumber", sql.VarChar, mobileNumber)
        .input("workNumber", sql.VarChar, workNumber)
        .input("email", sql.VarChar, email)
        .input("homeAddress", sql.VarChar, homeAddress)
        .input("groupId", sql.Int, groupId)
        .query(
          "INSERT INTO persons VALUES (@fullName, @mobileNumber, @workNumber, @email, @homeAddress, @groupId)"
        );
      res.status(200).json({ message: "New person added successfuly" });
    }
  } catch (e) {
    res.status(400).json({ message: "could not create person" });
  } finally {
    sql.close();
  }
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
