const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../Model/UserSchema");
const Appointment = require('../Model/Appointment');
require("../Database/Server");
// const moment = require("moment");
const cors = require("cors");
const app = express()


app.use(cors({
    origin: '*',
    mode: 'no-cors'
}))





router.post("/signup", async (req, res) => {
    try {
        const { name, email, number, city, password, confirmpassword } = req.body; // obj destructuring

        //validation
        if (!name || !email || !number || !city || !password || !confirmpassword) {
            res.status(400).json({
                error: "Please fill all details",
            });
        }

        //checking if user has already registered//
        //left email is the one in database and right one is the one entered by user..
        // userExists has been given as a parameter which will be true only if the email id that user entered is alraedy present in the database//

        const emailExists = await User.findOne({
            email: email,
        }); // validation for email
        if (emailExists) {
            res.status(409).json({
                error: "EmailId already exists",
            });
            // window.alert("EmailId already exists");
        }

        const numberExist = await User.findOne({
            number: number,
        }); // validation for phone number
        if (numberExist) {
            res.status(422).json({
                error: "Phone number already exists",
            });
            // window.alert("Phone number already exists");
        }

        if (req.body.password === req.body.confirmpassword) {
            const user = await new User({
                name,
                email,
                number,
                city,
                password,
                confirmpassword,
            });
            const registered = await user.save();
            if (registered) {
                res.status(201).json({
                    message: "user registered successfully",
                });
            } else {
                res.status(500).json({
                    error: "something went wrong",
                });
            }
        } else {
            res.status(404).json("Passwords not matching");
        }
    } catch (err) {
        res.status(500).json({
            error: "something went wrong",
        });
        console.log("registration failed");
    }
});

// ________________________________________________________________________________________________________________________________________________________

//appointment route//
router.post('/create-event', async (req, res) => {

    try {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.status(201).send(appointment);
    } catch (error) {
        res.status(400).send(error);
    }
})


router.get("/appointments", async (req, res) => {
    try {
        const events = await Appointment.find({})
        res.status(200).send(events)
        console.log(events)
    } catch (error) {
        console.log(error);
    }

})

module.exports = router;



// router.patch("/history", async (req, res) => {

//     try {
//         const history = Event(req.body)
//         await history.save();
//         res.sendStatus(201)
//     } catch (error) {
//         console.log(error)
//     }
// })

// db.collection.update({}, { $set: { "new_field*": 1 } }, false, true)

// app.patch("/students/:id", async (req, res) => {
//     try {
//       const _id = req.params.id;
//       const studentDataById = await Student.findByIdAndUpdate(_id, req.body, {
//         new: true,
//       });
//       console.log(_id);
//       res.status(200).send(studentDataById);
//     } catch (e) {
//       res.status(404).send();
//     }
//   });
