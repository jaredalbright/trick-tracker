const RiderTrick = require('../models/RiderList')

exports.getRiderTList = async (req, res, next) => {
    try {
        const RiderTricks = await RiderTrick.find();

        return res.status(200).json ({
            success: true,
            count: RiderTricks.length,
            data: RiderTricks
        })
    } catch (error) {
        return res.status(500).json ({
            sucess: false,
            error: 'Server Error'
        })
    }
}

exports.getUserList = async (req, res, next) => {
    try {
        console.log(req.query.user_name);
        const RiderTricks = await RiderTrick.find(req.query);

        return res.status(200).json ({
            success: true,
            count: RiderTricks.length,
            data: RiderTricks
        })
    } catch (error) {
        return res.status(500).json ({
            sucess: false,
            error: 'Server Error'
        })
    }
}

exports.addRiderTrick = async (req, res, next) => {
    try {
        console.log(req.body);
        const { trickID, side, rDirection, rotation, name, invert, edge, date, comfort, notes } = req.body;

        const trick = await RiderTrick.create(req.body);

        return res.status(201).json({
            sucess: true,
            data: trick,
        })
    } catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            console.log(messages);
            res.status(400).json({
                success: false,
                error: messages
            })
        }
        else {
            return res.status(500).json ({
                sucess: false,
                error: 'Server Error'
            })
        }
    }

}

exports.updateRiderTrick = async (req, res, next) => {
    try {    
        const trick = await RiderTrick.findByIdAndUpdate(req.query.id, {$set: req.body});

        return res.status(201).json({
            sucess: true,
            data: trick,
        })
    } catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            
            res.status(400).json({
                success: false,
                error: messages
            })
        }
        else {
            return res.status(500).json ({
                sucess: false,
                error: 'Server Error'
            })
        }
    }
}

exports.deleteRiderTrick = async (req, res, next) => {
    try  {
        const trick = await RiderTrick.findById(req.query.id);

        if(!trick) {
            return res.status(404).json({
                success: false,
                error: 'No trick found'
            })
        }

        await trick.remove();

        return res.status(200).json({
            success: true,
            data: []
        })

    } catch (error) {
        return res.status(500).json ({
            sucess: false,
            error: 'Server Error'
        })
    }
}