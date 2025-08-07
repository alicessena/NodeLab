import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberstream extends Transform {
    _transform(chunk, encoding, callback) {
        const Transformed = Number(chunk.toString()) * -1

        console.log(Transformed)

        callback(null, Buffer.from(String(Transformed)))
    }
}

// req => ReadbleStream = lendo dados na requisição
// res => WritableStram = escrevendo dados na resposta 

const server = http.createServer(async (req, res) => {
    const buffers = []

    for await (const chunk of req ){
        buffers.push(chunk)
    }

    const fullStreamContent = Buffer.concat(buffers).toString()

    console.log(fullStreamContent)

    return res.end(fullStreamContent)

    // return req
    // .pipe(new InverseNumberstream)
    // .pipe(res)
})

server.listen(3334)