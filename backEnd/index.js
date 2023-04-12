const express = require("express");
const app = express();
const dotenv = require("dotenv");
const sequelize = require("sequelize");
const db = require("./models");


dotenv.config();
app.use(express.json());


app.get("/", (req, res) => {
    res.send({
        message: "this is my api"
    });
});

const { userRouter } = require("./router");
app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
    // db.sequelize.sync({ alter :true });
    console.log(`server is running on port: ${process.env.PORT}`);
});

// https://miro.com/welcome/RlFvam5DRjBTSWE4VGppQ0c5WjRlblFzdWhDdHo5ZkhSZUMzVlNweVV1dlB4aFFFNjExaEVvMmFlSHBRRWFPQ3wzNDU4NzY0NTUxNDExNDA2NDk1fDQ=?share_link_id=179628403551