const SerialPort = require('serialport');

const portName = "/dev/cu.usbmodem14201";

const port = new SerialPort(portName, {
  baudRate: 9600,
  lock: false
})

port.write('main screen turn on', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message)
  }
  console.log('message written')
})

// Open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message)
})