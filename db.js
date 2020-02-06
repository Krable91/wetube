import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/we-tube",
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = () => console.log(`Error on DB Connection:${error}`)

db.once("open", handleOpen);
db.on("error", handleError);

/*export const videos = [
    {
        id: 91,
        title: "Videos1",
        description: "This is something I love1",
        views: 24,
        videoFile: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
        creator: {
            id: 121212,
            name: "lee juneho",
            email: "lee@naver.com"
        }
    }
]*/
