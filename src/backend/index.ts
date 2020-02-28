import * as express from "express";
import { get as authorGet } from "./author";
import { get as clusterSyncGet } from "./clustersync";
import { get as deploymentGet } from "./deployment";
const app = express();
import bodyParser = require("body-parser");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// start the Express server
const port = 8001; // default port to listen
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

app.get("/api/deployments", (req: express.Request, res: express.Response) => {
  deploymentGet(req, res);
});
app.get("/api/clustersync", (req: express.Request, res: express.Response) => {
  clusterSyncGet(req, res);
});
app.get("/api/author", (req: express.Request, res: express.Response) => {
  authorGet(req, res);
});
