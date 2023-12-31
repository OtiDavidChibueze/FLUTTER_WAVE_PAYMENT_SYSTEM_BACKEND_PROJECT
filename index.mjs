// FLUTTER PAYMENT INDEX FILE
import server from "./src/routes/app.mjs";
import { PORT } from "./src/config/keys.mjs";
import logger from "./src/config/logger.mjs";


// LISTENING TO ......
const server_port = PORT || 6000;

server.listen(server_port, () => {
  logger.info(`listening to port : ${server_port}`);
});
