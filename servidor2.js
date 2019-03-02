const express = require('express')
var aplicacion = express()
const os = require('os')
var interface = os.networkInterfaces()
const net = require('net')
const server = require('http').Server(aplicacion)
const socket = require('socket.io')(server)
const {StringDecoder} =  require('string_decoder')
const decoder = new StringDecoder('utf8')
var ipDinamica;
for(var k in interface){
  for(var k2 in interface[k]){
    var address = interface[k][k2]
    if(address.family = "IPv4" && !address.internal){
      ipDinamica = address.address
    }
  }
}

var HOST = "157.230.187.198"
var PORT = process.env.PORT || 7000;

  //server.listen(PORT, function(){
    // console.log('servidor activo ' + HOST + ':' + PORT)
//	  })
//
var ser = net.createServer(function(so){
    console.log('Usuario Nuevo ' + so.remoteAddress + ':' + so.remotePort)    
    so.write("que tal cliente ")
	so.pipe(so)
    so.on('data', function(data){
        console.log(" Cliente -> "+ decoder.write(data))
    })
    so.on('close', function(){
      
    })
})

ser.listen(PORT, HOST);
