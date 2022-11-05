import express from 'express'
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.get('/', (req, res) =>
    res.send('Hello World!')
)

const server = app.listen(port, () => {
    const { address, port } = server.address();
    console.log(`App listening at http://${address}:${port}`);
});