const mongoose = require("mongoose");


const profileSchema = mongoose.Schema(
    {
        title: { type: String, require: true },
        firstname: { type: String, require: true },
        middlename: { type: String, require: true },
        lastname: { type: String, require: true },
        mobileno: { type: String, require: true,unique:true },
        emailid: { type: String, require: true,unique:true },
        dateofbirth: { type: String, require: true },
        dateofaniversary: { type: String }

    },
    {
        timestamps: true,
        versionKey: false
    }
)


module.exports = mongoose.model("userprofile", profileSchema)

