const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    number: {
        type: Number,
        required: true,
        unique: true,
        minlength: 10,
        validate(value) {
            if (value < 0) {
                throw new Error("negative values cannot be used")
            }
        }
    },
    city: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: true,
    }
}
);



UserSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        this.confirmpassword = await bcrypt.hash(this.confirmpassword, salt);
        this.confirmpassword = undefined;
    }
    next();
});


const User = new mongoose.model("User", UserSchema);
module.exports = User;
