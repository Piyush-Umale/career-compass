const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
        },

        title: {
            type: String,
            required: true,
        },

        rating: {
            type: Number,
            default: 0,
        },

        company_logo_url: {
            type: String,
        },

        location: {
            type: String,
        },

        job_description: {
            type: String,
        },

        package_per_annum: {
            type: String,
        },

    },

    { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;