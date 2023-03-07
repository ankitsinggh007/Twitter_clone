import express from "express";



import {createTweet,getTweet} from "../../controllers/tweet-controller.js";
import {createComment} from "../../controllers/comment-controllers.js";
import { like } from "../../controllers/like-controller.js";
import { signup } from "../../controllers/user-controller.js";

const router= express.Router();

router.post("/tweets",createTweet);
router.get("/tweets/:id",getTweet);
router.post("/comments",createComment);
router.post("/likes",like);
router.post('/signup',signup);
export default router;