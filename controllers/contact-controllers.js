const Contact = require('../models/contact');
const createContact =async(req,res,next)=>{
    const {name,email,query} = req.body;

    const createQuery = new Contact({
        name,
        email,
        query
    });
    await createQuery.save();


    res.status(201).json({query:createQuery.toObject({getters:true})});


}
exports.createContact = createContact;