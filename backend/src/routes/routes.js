const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const {
    getAllJobs,
    createJob,
    getJobById,
    updateJob,
    deleteJob
} = require("../controllers/controller");

router.get("/", getAllJobs);

router.post("/", protect, createJob);

router.get("/:id", getJobById);

router.put("/:id", protect, updateJob);

router.delete("/:id", protect, deleteJob);

module.exports = router;