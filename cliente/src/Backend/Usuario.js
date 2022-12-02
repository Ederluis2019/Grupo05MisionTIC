const express = require('express')
const { chownSync } = require('fs')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemeusuario = new eschema({
    nombre: String,
    email: String,
    Telefono: String,
    idusuario: String,
    idusuario:String
})

const ModeloUsuario = mongoose.model