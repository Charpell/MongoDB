const Driver = require('../models/Driver');

module.exports = {
  greeting(req, res) {
    res.send({ hi: 'there' })
  },

  create(req, res) { 
    const driverProps = req.body;

    Driver.create(driverProps)
      .then(driver => res.send(driver))
      .catch(error => {
        res.status(422).send({ error: error.message });
      })
  },

  edit(req, res) {
    const driverId = req.params.id;
    const driverProps = req.body;

    Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
      .then(() => Driver.findById({ _id: id }))
      .then(driver => res.send(driver))
      .catch(error => {
        res.status(422).send({ error: error.message });
      });
  },

  delete(req, res) {
    const driverId = req.params.id;

    Driver.findByIdAndRemove({ _id: driverId })
      .then(driver => res.status(204).send(driver))
      .catch(error => {
        res.status(422).send({ error: error.message });
      });
  }
};
