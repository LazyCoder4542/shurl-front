const mongoose = require("mongoose")
const dotenv = require("dotenv")
const path = require("path")
const dev = !process.env.NODE_ENV || process.env.NODE_ENV === "development"

if (dev) dotenv.config({path: path.join(__dirname, '/../config.env')})

const CS = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
const uri = process.env.MONGODB_URI
console.log(uri)
function connectDB() {
    try {
      mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
    const dbConnection = mongoose.connection;
    dbConnection.once("open", (_) => {
      console.log(`Database connected: ${uri}`);
    });
   
    dbConnection.on("error", (err) => {
      console.error(`connection error: ${err}`);
    });
    return;
}
connectDB();
// mongoose.connect(CS).then(c => {
//     console.log('DB connection successful')
// }).catch(err => {
//     console.log("Error connecting to DATABASE")
//     console.log(err)
// })
// mongoose.disconnect()
////////////////////////////


const bodyParser = require("body-parser")
var cookieParser = require('cookie-parser')
const app = require("express")()

const morgan = require("morgan")
const crypto = require('crypto')
const { promisify } = require("util")


const Link = require("./model/linkModel")
const apiRouter = require("./routers/api-route");
const errorController = require("./controllers/errorController");

app.use(morgan("dev"))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/', async (req, res) => {
    console.log("Welcome")
    res.end()
})
app.use("/api/v1", apiRouter)
app.get('/:url', async (req, res, next) => {
    const {url} = req.params
    const link = await Link.findOne({short_url: url})
    if (url && link) {
        try {
            let x = new URL(link.url)
            return res.redirect(link.url)
        }
        catch {
            return res.redirect("//" + link.url)
        }
    }
    next()
})
app.all("*", (req, res) => {
    return res.status(404).send("Page Not Found")
})

//ERROR HANDLING
app.use(errorController)

module.exports = app