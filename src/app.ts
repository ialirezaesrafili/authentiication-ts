import {connectToDb} from "./uitls/connectToDb";

require('dotenv').config();
import express from 'express';
import config from 'config';
import log from "./uitls/logger";
import router from "./routes/index";

const app = express();
const port = config.get('port');

app.use(router)
app.listen(port, () => {
    //console.log(`Server is running on port: http://locahost/${port}`);
    log.info(`Listening on port: http://locahost:${port}`);
    connectToDb()
        .then(r => console.log(r))
        .catch(e => console.error(e));
})