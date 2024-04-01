import { feathers } from '@feathersjs/feathers'
import { koa, errorHandler, bodyParser, rest } from '@feathersjs/koa'

interface EchoData {
    data: any;
}

class EchoService {
    async create(data: Pick<EchoData, 'data'>) {
        return data;
    }
}

type Services = {
    echo: EchoService
}

const app = koa<Services>(feathers());

app.use(errorHandler());
app.use(bodyParser());
app.configure(rest())
app.use('echo', new EchoService());

app.listen(4000).then(() => console.log('Feathers server listening on localhost:4000'));