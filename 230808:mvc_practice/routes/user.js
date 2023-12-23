const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// 라우터 만들기
// 메인 페이지 GET localhost:800/user/
router.get("/", controller.index);

// 회원가입 GET localhost:800/signup
router.get("/signup", controller.signup);
// 회원가입 POST localhost:800/signup
router.post("/signup", controller.post_signup);

// 로그인 GET localhost:800/signin
router.get("/signin", controller.signin);
// 로그인 POST localhost:800/signin
router.post("/signin", controller.post_signin);

// 내 프로필
router.post("/profile", controller.post_profile);
// 수정
router.patch("/profile/edit", controller.edit_profile);
// 삭제
router.delete("profile/delete", controller.delete_profile);

module.exports = router;
