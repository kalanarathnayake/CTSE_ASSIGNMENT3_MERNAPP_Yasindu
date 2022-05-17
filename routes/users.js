const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req, res) => {
User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    
    const newUser = new User({
        firstname,
        lastname,
        username,
        email,
        password,
       
       
    });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req,res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error : ' +err));
});

router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted'))
        .catch(err => res.status(400).json('Error : ' +err));
});
router.route('/update/:id').post((req,res) => {
    User.findById(req.params.id)
        .then(user => {
            user.fullname = req.body.fullname;
            user.lastname = req.body.lastname;
            user.username = req.body.username;
            user.email = req.body.email;
            user.password = req.body.password;
           

            user.save()
                .then(() => res.json('User updated'))
                .catch(err => res.status(400).json('Error : ' +err));
        })

        .catch(err => res.status(400).json('Error : ' +err));
});
module.exports = router;