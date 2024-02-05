const Work = require('../models/work');
const mongoose = require('mongoose');


const getWorks = async(req,res,next)=>{
    const works = await Work.find();
    res.json({works:works.map(work=>work.toObject({getters:true}))});
}

const createWork = async(req,res,next)=>{
    const {ImageURL,ImageLink} = req.body;
    const createWork = new Work({
        ImageURL,
        ImageLink
    });
    await createWork.save();


    res.status(201).json({work:createWork.toObject({getters:true})});
}

exports.getWorks = getWorks;
exports.createWork = createWork;