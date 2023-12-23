const User = require("../model/User");

// user.js 메인 페이지 연결
exports.index = (req, res) => {
  res.render("index");
};

// 회원가입 폼
exports.signup = (req, res) => {
  res.render("signup");
};

exports.post_signup = (req, res) => {
  // model
  User.post_signup(req.body, () => {
    res.send({ result: true });
  });
};

// 로그인
exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signin = (req, res) => {
  // model
  User.post_signin(req.body, (result) => {
    res.send(result);
    // 로그인 되면 배열로 값이 오기 때문에 0 이상 일 것 . 아니면 로그인 실패한 것
    if (result.length > 0) {
      res.send({ result: true, data: result[0] });
    } else {
      res.send({ result: false, data: null });
    }
  });
};

// 프로필
exports.post_profile = (req, res) => {
  console.log(req.body);
  User.post_profile(req.body, (result) => {
    if (result.length > 0) {
      res.render("profile", { data: result[0] });
    } else {
      res.redirect("/user/signin");
    }
  });
};

// 프로필 수정
exports.edit_profile = (req, res) => {
  console.log(req.body);
  User.edit_profile(req.body, () => {
    res.send({ result: true });
  });
};

// 삭제
exports.delete_profile = (req, res) => {
  User.delete_profile(req.body.id, () => {
    res.send({ result: true });
  });
};
