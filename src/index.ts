/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import express, {Express, Request, Response} from "express"
import dotenv from "dotenv"
import path from "node:path"

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT) || 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req: Request, res: Response) => {
    res.render('pages/index');
});

app.listen(port, () => {
    console.log("Started on http://localhost:" + String(port));
})