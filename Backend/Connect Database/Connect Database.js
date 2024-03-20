// const mongoose = require("mongoose");

// mongoose.set("strictQuery", true);
// const DB_URI =
//   "mongodb+srv://upendra:OQRCdODeviaCWXuJ@cluster0.tuifgev.mongodb.net/";

// // const connect_database = () => {
// //   return mongoose
// //     .connect(process.env.DB_URI)
// //     .then(() => {
// //       console.log("Database Connected");
// //     })
// //     .catch(e => {
// //       console.log(e.messsgae);
// //     });
// // };

// const connect_database = async () => {
//   try {
//     await mongoose.connect(DB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     });
//     console.log("Database Connected");
//   } catch (error) {
//     console.error("Error connecting to database:", error);
//     process.exit(1); // Exit process with failure
//   }
// };

// module.exports = connect_database;
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const DB_URI =
  "mongodb+srv://Upendra:oMRMRlD4TFeZxZfe@cluster0.tuifgev.mongodb.net/";

const connect_database = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connect_database;
