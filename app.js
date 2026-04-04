const express = require('express');
const path = require('path');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const itemsRoute = require('./routes/items');
app.use('/items', itemsRoute);

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Gym App',
    message: 'Transform Your Body Today 💪',
    features: [
      { title: 'Training Plans', desc: 'Personalized workouts for you', icon: 'bi-heart-pulse' },
      { title: 'Nutrition',      desc: 'Healthy diet plans',           icon: 'bi-egg-fried'   },
      { title: 'Progress',       desc: 'Track your fitness journey',   icon: 'bi-graph-up'    }
    ]
  });
});


app.get('/features', (req, res) => {
  const gymServices = [
    { 
      title: 'Weightlifting', 
      desc: 'Access to heavy-duty racks, dumbbells up to 100kg, and professional Olympic lifting platforms.', 
      price: '30 JOD',
      icon:  'bi-award'
    },
    { 
      title: 'Cardio Zone', 
      desc: 'Equipped with high-end treadmills, stationary bikes, and rowing machines with smart tracking.', 
      price: '25 JOD',
      icon: 'bi-bicycle'
    },
    { 
      title: 'Swimming Pool', 
      desc: 'Enjoy our semi-olympic heated indoor pool with professional swimming lanes and sauna access.', 
      price: '40 JOD',
      icon: 'bi-droplet-half'
    },
    { 
      title: 'Personal Training',
      desc: 'Get a customized workout plan and 1-on-1 coaching from our certified expert trainers.', 
      price: '60 JOD',
      icon: 'bi-person-check'
    },
    { 
      title: 'Yoga & Pilates', 
      desc: 'Improve your flexibility and mental health in our quiet, professional yoga studio sessions.', 
      price: '20 JOD',
      icon: 'bi-flower1'
    },
    { 
      title: 'Nutrition Plans', 
      desc: 'Expert dietary advice and meal planning to help you reach your body goals faster.', 
      price: '15 JOD',
      icon: 'bi-journal-text'
    }
  ];

  res.render('features', { title: 'Our Features', services: gymServices });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us',
    projectName: 'Fitness Gym Platform',
    description: 'Helping users find the best gyms easily.',
    team: [
      { name: 'Jibreel' },
      { name: 'Roaa' },
      { name: 'Saja' },
      { name: 'Mohammad' },
      { name: 'ِAya' }
    ]
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Us',
    phone: '+962 798 789 456',
    email: 'gym@gmail.com',
    location: 'Amman, Jordan'
  });
});

app.get('/layout-demo', (req, res) => {
  res.render('layout-demo', { title: 'Base Layout Demo' });
});

app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running → http://localhost:${PORT}`);
});
