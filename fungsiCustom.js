// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

const readJson = (file_path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file_path, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(JSON.parse(data.toString()))
      }
    })
  })
}

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fn) => {
  Promise.all([
    readJson(file1),
    readJson(file2),
    readJson(file3),
  ]).then((result) => {
    const messages = result.map( (json) => (json.message || json[0].message || json[0].data.message || "").split(" ")[1])
    fn(null, messages)
  }).catch((err) => {
    fn(err, null)
  })
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
