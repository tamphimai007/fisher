const Fisherman = require('../Models/Fisherman')
const fs = require('fs')

exports.read = async (req, res) => {
    try {
        // code
        const id = req.params.id
        const fisherman = await Fisherman.findOne({ _id: id }).exec();
        res.send(fisherman)
    } catch (err) {
        // error
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.list = async (req, res) => {
    try {
        // code
        const fisherman = await Fisherman.find({}).exec();
        res.send(fisherman)
    } catch (err) {
        // error
        console.log(err)
        res.status(500).send('Server Error')
    }
}
exports.create = async (req, res) => {
    try {
        // code

        var data = req.body
        if (req.file) {
            data.file = req.file.filename
        }
        const fisherman = await Fisherman(data).save()
        res.send(fisherman)
    } catch (err) {
        // error
        console.log(err)
        res.status(500).send('Server Error')
    }
}
exports.update = async (req, res) => {
    try {
        // code
        const id = req.params.id
        var newData = req.body

        if (typeof req.file !== 'undefined') {
            newData.file = req.file.filename

            await fs.unlink('./uploads/' + req.body.fileold, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('remove success')
                }
            })


        } else {
            newData.file = req.body.fileold
        }
        const fisherman = await Fisherman
            .findOneAndUpdate({ _id: id }, newData, { new: true })
            .exec()
        res.send(fisherman)
        //res.send('hello')
    } catch (err) {
        // error
        console.log(err)
        res.status(500).send('Server Error')
    }
}
exports.remove = async (req, res) => {
    try {
        // code
        const id = req.params.id
        const fisherman = await Fisherman.findOneAndDelete({ _id: id }).exec()

        if (fisherman?.file) {
            await fs.unlink('./uploads/' + fisherman.file, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('Remove success')
                }
            })
        }

        res.send(fisherman)
    } catch (err) {
        // error
        console.log(err)
        res.status(500).send('Server Error')
    }
}
