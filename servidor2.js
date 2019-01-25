//crear servidor
var express = require('express')
var aplicacion  = express()
var hex = require('hex-string')
var hex64 = require('hex64')

const net = require('net')
const server = require('http').Server(aplicacion)
const socket = require('socket.io')(server)


var HOST = '192.168.43.241';
var PORT = 3000;

// server.listen(PORT, function(){
//     console.log('servidor activo ' + PORT +' : ' + HOST)
//     })

var ser = net.createServer( function(so){ 
    // so.on('connect', function(){
    //     console.log('usuario conectado'+ so.remoteAddress + ' : ' + so.remotePort);        
    //     })
    console.log('usuario conectado'+ so.remoteAddress + ' : ' + so.remotePort);        
    // so.on('data', function(data){            
    //     console.log(data.toString('utf8'));
        
    //     })
    so.on('close', function(){
        console.log('usuario desconectado');            
        })
    })

    
ser.listen(PORT,HOST);
// console.log('hola node')