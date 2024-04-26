const express = require('express');
const router = express.Router();
const Snippet = require('../models/snippet');

const snippet = require('../models/snippet');

router.post('/', async(req,res) => {
    const {code, language, theme} = req.body;
    const snippetID = generateUniqueID();

    const snippet = new snippet({
        code,
        language,
        theme
    });

    try{
        await snippet.save();
        res.status(201).json({id: snippet._id});
    }catch(err){
        res.status(400).json({ message: err.message});
    }
});

router.put('/:id', async(req,res) => {
    try{
        const snippet = await Snippet.findById(req.params.id);
        if(!snippet){
            return res.status(404).json({ message: 'Snippet not found'});
        }

        snippet.code = req.body.code;
        await snippet.save();
        res.json(snippet);
    }catch(err){
        res.status(400).json({message : err.message});
    }
});

router.get('/:id', async(req,res) => {
    try{
        const snippet = await Snippet.findById(req.params.id);
        if(!snippet){
            return res.status(404).json({ message: 'Snippet not found'});
        }

        res.json(snippet);
    }catch(err){
        res.status(500).json({message: err.message});
    }
})

module.exports = router;