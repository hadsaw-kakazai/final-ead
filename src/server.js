const express = require('express');
const app = express();

const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));