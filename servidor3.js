const express = require('express')
var aplicacion = express()
const os = require('os')
var interface = os.networkInterfaces()
const net = require('net')
const server = require('http').Server(aplicacion)
const socket = require('socket.io')(server)
const {StringDecoder} =  require('string_decoder')
const decoder = new StringDecoder('utf8')
var ipDimanic;
for(var k in interface){
  for(var k2 in interface[k]){
    var address = interface[k][k2]
    if(address.family = "IPv4" && !address.internal){
      ipDimanic = address.address.toString()
    }
  }
}

var HOST = "192.168.0.22"
var PORT = process.env.PORT || 6000;

  server.listen(PORT, function(){
      console.log('servidor activo ' + HOST + ':' + PORT)
  })

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

ser.listen(PORT, HOST)