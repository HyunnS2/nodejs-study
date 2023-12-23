const mysql = require("mysql");

//mysql연결
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});

// 접속 여부 확인
conn.connect((err) => {
  if (err) {
    console.log("error", err);
    return;
  }
  console.log("connect");
});

// 회원가입
exports.post_signup = (data, callback) => {
  const query = `INSERT INTO user0808 ( userid,name,pw ) VALUES ('${data.userid}','${data.name}','${data.pw}')`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("post_signup", rows);
    callback(rows);
  });
};

// 로그인
exports.post_signin = (data, callback) => {
  const query = `SELECT * FROM user0808 WHERE id='${data.id}' AND pw='${data.pw}'`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("post_signin", rows);
    callback(rows);
  });
};

// 내 프로필
exports.post_profile = (data, callback) => {
  const query = `SELECT * FROM user0808 WHERE userid='${data.profile}'`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("post_profile", rows);
    callback(rows);
  });
};

//
exports.edit_profile = (data, callback) => {
  const query = ` UPDATE user0808 SET userid='${data.userid}',pw='${data.pw}',name='${data.name}' WHERE id = ${data.id}`;
  conn.query(query, (err, rows) => {
    callback();
  });
};

// 내 프로필 수정
exports.postEdit = (data, callback) => {
  console.log("프로필 수정");
  const query = `UPDATE user0808 SET userid='${data.userid}',name='${data.name}',pw='${data.pw}' WHERE id = ${data.id}`;
  conn.query(query, (err, rows) => {
    console.log(rows);
    callback(rows);
  });
};

//  삭제
exports.delete_profile = (id, callback) => {
  const query = `DELETE FROM user0808 WHERE id=${id}`;
  conn.query(query, (err, rows) => {
    callback();
  });
};
