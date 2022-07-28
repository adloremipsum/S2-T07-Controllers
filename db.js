async function customQuery() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "ejercicio20",
  });

  try {
    const [results, fields] = await connection.execute("SELECT * FROM users");
    connection.end();
    return results;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

module.exports = customQuery;
