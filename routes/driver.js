const express = require('express');
const router  = express.Router();
const registerdriverController = require('../controller/drivers/register');
const tripHistoryController = require('../controller/drivers/tripHistory');
const profileUpdateController = require('../controller/drivers/update_profile');
const passwordUpdateController = require('../controller/drivers/updatePassword');
const uploadDocumentsController = require('../controller/drivers/documentUpload')
const tripHistoryCompletedController = require('../controller/drivers/completedTripHistory');
const tripCancelled = require('../controller/drivers/cancelledTripHistory')
const upComingTripController = require('../controller/drivers/upcomingTripHistory')





// router.use('/user', require('../controller/users/register') )
console.log('entered')
router.post('/registerDriver', registerdriverController.registerDriver)
router.get('/tripHistory', tripHistoryController.tripHistory)
router.post('/updateProfile', profileUpdateController.updateProfile)
router.post('/updatePassword', passwordUpdateController.updatePassword)
router.post('/uploadDocuments', uploadDocumentsController.documentsDriver)
router.get('/completedTrip', tripHistoryCompletedController.tripHistoryCompleted)
router.get('/cancelledTrip', tripCancelled.tripHistoryCancelled)
router.get('/upcomingTrip', upComingTripController.tripHistoryUpcoming)






module.exports = router