const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

/* 
Same Route: router.get('/', getGoals) - router.post('/', setGoal)
Same Route: router.put('/:id', updateGoal) - router.delete('/:id', deleteGoal) 
*/
router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router