import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("USERS"));
userRouter.get(routes.userDetail, (req, res) => res.send("USER DETAIL"));
userRouter.get(routes.editProfile, (req, res) => res.send("EDIT PROFILE"));
userRouter.get(routes.changePassword, (req, res) => res.send("CHANGE PASSWORD"));

export default userRouter;