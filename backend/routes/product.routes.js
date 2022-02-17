const express = require("express");
const { getProblems } = require("../controllers/problems.controller");

const router = express.Router();

router.route("/problems").get(getProblems);