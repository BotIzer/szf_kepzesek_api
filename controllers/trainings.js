const Training = require('../models/training');
const ErrorResponse = require('../utils/errorResponse');
// @desc   Get all trainings
// @route  GET /api/trainings
// @access Public
exports.getTrainings = async(req, res, next) => {
     try {
          const trainings = await Training.find()
          if (!trainings) {
            res.status(400).json({success:false, msg: error});
          }
          res.status(200).json({ success: true, msg: "Show all trainings", data: trainings });
     } catch (error) {
      next(new ErrorResponse(`Getting trainings was unsuccesful`, 404))
     }
  
};
// @desc   Get single training
// @route  GET /api/trainings/:id
// @access Public
exports.getTraining = async(req, res, next) => {
     try {
          const training_data = await Training.findById(req.params.id)
          if (!training_data) {
            return res.status(400).json({success:false, msg: "Not Found"});  
          }
          res.status(200).json({ success: true, msg: "Get training by ID", data: training_data});
          
     } catch (error) {
          next(new ErrorResponse(`Id: ${req.params.id} is incorrect, get failed`, 404));
     }
};
// @desc   Create new training
// @route  POST /api/trainings
// @access Private
exports.createTraining = async (req, res, next) => {
  try {
    const training = await Training.create(req.body);
    if (!training) {
      res.status(400).json({ success: false, msg: "Something went wrong" });  
    }
    res.status(201).json({ success: true, data: training });
  } catch (error) {
    next(new ErrorResponse(`Creation of training was unsuccesful`, 404))
  }
};

// @desc   Update training
// @route  PUT /api/trainings/:id
// @access Private
exports.updateTraining = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update training ${req.params.id}` });
};
// @desc   Delete training
// @route  DELETE /api/trainings/:id
// @access Private
exports.deleteTraining = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete training ${req.params.id}` });
};
