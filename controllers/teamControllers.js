const data = __dirname + '/../data/db.json';
const fs = require('fs');

class teamController {
  static async getAllTeams(req, res) {
    try {
      const dataTeam = await JSON.parse(fs.readFileSync(data, 'utf-8'));
      res.status(200).json(dataTeam.teams);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getTeamById(req, res) {
    const { id } = req.params;

    try {
      const dataTeam = await JSON.parse(fs.readFileSync(data, 'utf-8'));
      const team = dataTeam.teams;
      const findById = team.find((element) => element.id == id);

      if (!findById) {
        res.status(400).json({ message: `Didn’t find a team with id ${id}` });
      } else {
        res.status(200).json(findById);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = teamController;
