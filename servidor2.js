//crear servidor
var express = require('express')
var aplicacion  = express()
var hex = require('hex-string')
var hex64 = require('hex64')
var os = require('os')

const net = require('net')
const server = require('http').Server(aplicacion)
const socket = require('socket.io')(server)


//var HOST = '192.168.43.241';
var PORT = 3000;
var interface = os.networkInterfaces();
var ipdinamica 
for(var k in interface){
    for(var k2 in interface[k]){
        var address =  interface[k][k2]
        if(address.family=='IPv4'){
            if(!address.internal){
                ipdinamica = address.address
                console.log(ipdinamica)
            }
                        
        }
    }
}

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

    
ser.listen(PORT,ipdinamica);
// console.log('hola node')