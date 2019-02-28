//crear servidor
var express = require('express')
var aplicacion  = express()
var hex = require('hex-string')
var hex64 = require('hex64')
var Os = require('os')

const net = require('net')
const server = require('http').Server(aplicacion)
const socket = require('socket.io')(server)


var HOST = '192.168.0.22';
var PORT = 4000;

// server.listen(PORT, function(){
//     console.log('servidor activo ' + PORT +' : ' + HOST)
//     })

var ser = net.createServer( function(so){ 
    // console.log(so);
    console.log('usuario conectado'+ so.remoteAddress + ' : ' + so.remotePort);        

    so.write('hola como estas cliente\r\n');
    so.pipe(so);
    
    
    // so.on('connect', function(){
    //     console.log('usuario conectado'+ so.remoteAddress + ' : ' + so.remotePort);        
    //     })
    
    // so.on('data', function(data){            
    //     console.log(data.toString('utf8'));
        
    //     })
    so.on('close', function(){
        console.log('usuario desconectado');            
        })
    })

    
ser.listen(PORT,HOST);
// console.log('hola node')