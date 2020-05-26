import { Duplex } from 'stream'
import WebSocket = require("ws");

interface IEncoder {
    encode: (input: any) => any
    decode: (input: any) => any
}

export = WebSocketJSONStream

declare class WebSocketJSONStream extends Duplex {
  constructor (ws: WebSocket, encoder?: IEncoder)
}

