// const User = require("../model/User");
const models = require("../models");
//findall의 Op
const { Op } = require("sequelize");

exports.index = (req, res) => {
  res.render("index");
};

// GET

exports.signup = (req, res) => {
  res.render("signup");
};

exports.signin = (req, res) => {
  res.render("signin");
};

// POST

exports.post_signup = (req, res) => {
  //sequel
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then((result) => {
    console.log("result", result);
    res.send({ result: true });
  });
};

exports.post_signin = (req, res) => {
  //model
  //   User.post_signin(req.body, (result) => {
  //     console.log(result);
  //     if (result.length > 0) {
  //       res.send({ result: true, data: result[0] });
  //     } else {
  //       res.send({ result: false, data: null });
  //     }
  //   });
  models.User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  }).then(() => {
    console.log("result", result);
    res.send({ result: true, data: result[0] });
  });
};

exports.post_profile = (req, res) => {
  console.log(req.body);
  //   User.post_profile(req.body, (result) => {
  //     if (result.length > 0) {
  //       res.render("profile", { data: result[0] });
  //     } else {
  //       res.redirect("/user/signin");
  //     }
  //   });

  models.User.findOne({
    where: { userid: req.body.profile },
  }).then((result) => {
    res.render("profile", { data: result });
  });
};
exports.edit_profile = (req, res) => {
  //   console.log(req.body);
  //   User.edit_profile(req.body, () => {
  //     res.send({ result: true });
  //   });
  // update 객체는 1 번 인자에 바꾸고싶은거 2번 인자에 바꾸고싶은 위치
  const { userid, pw, name, id } = req.body;
  models.User.update(
    {
      userid,
      pw,
      name,
    },
    {
      where: {
        id,
      },
    }
  ).then((result) => {
    console.log("result", result);
    res.send({ result: true });
  });
};

exports.delete_profile = (req, res) => {
  //   User.delete_profile(req.body.id, () => {
  //     res.send({ result: true });
  //   });
  const { id } = req.body;
  models.User.destroy({ where: { id } }).then((result) => {
    console.log("result", result);
    res.send({ result: true });
  });
};

//findall 로 해보기
exports.findall = (req, res) => {
  models.User.findAll({
    // attributes 원하는 컬럼 조회
    attributes: ["name", "userid"],
    // Op.gt(초과), Op.gte(이상), Op.lt(미만),Op.ne(같지않은), Op.or(또는), Op.in(배열 요소중 하나),Op.notIn(배열요소와 모두 다름)
    where: { id: { [Op.gte]: 4 } },
    order: [["id", "DESC"]],
    // offset = 한칸 띄우고
    offset: 1,
  }).then((result) => {
    console.log("result", result);
    res.send(result);
  });
};
