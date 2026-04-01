const express = require('express');
const router = express.Router();

const items = [
  { id: 1, name: 'Treadmill',     type: 'Cardio Machine',    status: 'Available' },
  { id: 2, name: 'Dumbbells',     type: 'Strength Equipment',status: 'Available' },
  { id: 3, name: 'Bench Press',   type: 'Strength Machine',  status: 'Busy'      },
  { id: 4, name: 'Exercise Bike', type: 'Cardio Machine',    status: 'Available' },
];

// List
router.get('/', (req, res) => {
  res.render('items', { title: 'Gym Equipment', items });
});

// Detail
router.get('/:id', (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  if (!item) return res.status(404).render('404', { title: 'Item Not Found' });
  res.render('item-detail', { title: item.name, item });
});

module.exports = router;
