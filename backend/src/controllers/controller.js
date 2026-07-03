// controllers

const Job = require("../models/model");

const getAllJobs = async (req, res) => {
    try {
        const {location, employment_type, rating} = req.query;

        let queryObject = {};
        
        if(location){
            queryObject.location =  location;
        }

        if(employment_type){
            queryObject.employment_type =  employment_type;
        }

        if(rating){
            queryObject.rating = {$gte : Number(rating)};
        }

        const jobs = await Job.find(queryObject);

        res.send(jobs);
        res.status(200);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createJob = async (req, res) => {
    try {
        const job = await Job.create(req.body);
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getJobById = async (req, res) => {
    try {
        const job = await Job.findOne({ id: req.params.id });

        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateJob = async (req, res) => {
    try {
        const job = await Job.findOneAndUpdate({ id: req.params.id },
            req.body,
            { new: true }
        );

        if (!job) {
            res.status(404).json({ message: "Job not found" });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteJob = async (req, res) => {
    try {
        const job = Job.findOneAndDelete({id : req.params.id});

        if(!job){
            res.status(404).json({message : "Job not found"})
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllJobs,
    createJob,
    getJobById,
    updateJob,
    deleteJob
};