const mongoose = require('mongoose')

const fishermanSchema = mongoose.Schema({
    name_ship: String,
    ship_regis: {
        type: String
    },
    ship_mark: {
        type: String
    },
    out_date: String,
    out_province: String,
    out_port: String,
    in_date: String,
    in_province: String,
    in_port: String,
    pi:String,
    file: {
        type: String,
        default: 'noimage.jpg'
    },
    lat: Number,
    lng: Number,
    tool: String,
    amount: Number,
    name_sender: String
}, { timestamps: true })

module.exports = mongoose.model('fisherman', fishermanSchema)