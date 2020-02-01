const router = require('express').Router();
const axios = require('axios');

router.post('/exercise', (req, res) => {
    const exercise = req.body;
    // console.log(activity);
    db.Activity.create(activity)
      .then((results) => {
        res.json({
          success: true,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          errors: err.errors,
        });
      });
  });

  router.get("/workouts", (req, res) => {
    db.Workout.find({})
    .sort({date: -1})
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    })
  })