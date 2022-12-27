const dbConnect = require('../config');

const getTeachers = async (req, res) => {
    try {
      const allTeachers = await dbConnect.query("SELECT * FROM teachers")
      res.json(allTeachers.rows)
    } catch(error) {
      console.log(error.message);
      res.status(404).send("Teachers not exist");
    }
  }

  module.exports = { getTeachers };