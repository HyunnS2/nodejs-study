const mysql = require("mysql");

// mysql연결
// createConnection
// 단일 연결 방법 : 요청할때마다 새로운 연결을 생성 -> 적은 수의 동시 연결이나 단순한 데이터베이스 쿼리일 때 사용함

// createPool
// 연결 풀을 생성 -> 풀은 미리 정의딘 수의 연결을 생성하고 관리함. / 요청이 들어오면 연결 풀에서 사용 가능한 연결을 제공. 작업 완료 후 해당 연결 반환. / 연결이 필요하지 않을 경우 자동으로 반환. 풀의 연결 수를 제한하고 관리를 최적화 함. / 다중 연결 서비스에 적합

// createConnection
// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "user",
//   password: "1234",
//   database: "kdt8",
// });

// createPool
const conn = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
  connectionLimit: 30, // 최대 연결 수 (기본값은 10)
});

module.exports = {
  db_signup,
  db_signin,
};

// 문자열 보간 방법
// ex ) INSERT INTO user0808 (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')
// 단점 1. sql 인젝션 공격에 취약함 , 2. 문자열에 특수문자가 포함될 경우 오류가 발생할 수도 있음

// 대체 방법
// Prepared Statement
// ex ) INSERT INTI uer (userid, pw, name ) VALUES ( ?,?,? )
// sql 인젝션 공격에 강함

// sql 인젝션 공격 = 악의적 코드문을 입력해서 쿼리문을 조작하는 방법

// 회원가입 정보 데이터 베이스 저장
const db_signup = (data, cb) => {
  // 문자열 보간 방법
  //   const query = `INSERT INTO user0808 (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;
  //   conn.query(query, (err, rows) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     console.log("db_signup", rows);
  //     cb();
  //   });

  /////////////////////////////
  // prepared statement 방법
  const query = `ÌNSERT INTO user0808 ( userid, pw, name ) VALUES (?,?,?)`;
  conn.query(query, [data.userid, data.pw, data.name], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("db_signup", rows);
    cb();
  });
};

const db_signin = (data, cb) => {
  //   const query = `SELECT * FROM user0808 WHERE userid='${data.userid}' AND pw='${data.pw}'`;

  //   conn.query(query, (err, rows) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     console.log("db_signin", rows);
  //     cb(rows);
  //   });

  /////////////////////////
  // prepared statement

  const query = `SELECT * FROM user0808 WHERE userid = ? AND pw = ?`;
  conn.query(query, [data.userid, data.pw], (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("db_signin", rows);
    cb(rows);
  });
};
