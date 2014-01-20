## Blackmagic Design Videohub API interface

The Blackmagic Design Videohub has a very simple TCP protocol for interfacing with the device, this module implements the full API with easy to use methods.

## Protocol

The server's run on port `9990` and connect to the videohub by USB.

### Connection

Upon connection the server gives it's protocol version and device information.

```
VIDEOHUB DEVICE: 
Device preset: true
Model name: Blackmagic Smart Videohub
Video inputs: 16
Video processing units: 0
Video outputs: 0
Video monitoring outputs: 0
Serial ports: 0

```

Each block from the server ends with a blank line return.

## API

### Connecting

```
var videohub = require('videohub');

var hub = videohub.connect(ipAddress);

```

`hub` is an instance of EventEmitter.

### Events

#### `connection`

Fired when the connection is established.

#### `ready`

Fired when the connection is ready to recieve commands.

#### `status`

Fried when the server dumps it's status at you.

#### `route(output[, input], callback)`

`route` takes up to 3 arguments, the first the destination output, the second optional, the input to route the output to and the last argument a callback with the status.

#### `outputLabel([[output,] label,] callback)`

`outputLabel` gets all output labels, or one output label specified or sets the specified output label.

#### `inputLabel([[input,] label,] callback)`

`inputLabel` gets all input labesl, or one input label spcecified or sets the specified input label.
