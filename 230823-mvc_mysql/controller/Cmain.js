const model = require("../model/Model");

// 모듈 가져오기
// module.exports 를 가져와서 사용하면 exports.signup 이 아니라 const signup으로 사용 가능
module.exports = {
  main,
  signup,
  signin,
  post_signup,
  post_signin,
};

////////////////////////////////////////
// GET

const main = (req, res) => {
  res.render("index");
};

//  회원가입 페이지
const signup = (req, res) => {
  res.render("signup");
};

// 로그인 페이지
const signin = (req, res) => {
  res.render("signin");
};

//////////////////////////////////////////////
// POST

// 회원가입
const post_signup = (req, res) => {
  model.db_signup(req.body, () => {
    res.json({ result: true });
  });
};

const post_signin = (req, res) => [
  model.db_signin(req.body, (result) => {
    if (result.length > 0) {
      res.json({ result: true, data: result[0] });
    } else {
      res.json({ result: false });
    }
  }),
];
