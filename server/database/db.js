const mongoose = require('mongoose');
const connection = "mongodb+srv://omoruyiohuoba:HCsARwJxM8zmolLw@bloombankcluster.eaknk.mongodb.net/BANK-LOGIN-PORTAL?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
