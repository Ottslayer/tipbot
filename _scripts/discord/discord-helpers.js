

function CheckValidChars(userName) {
// ^\u\]/.test()
  let test = false;
  // eslint-disable-next-line
  if(/[^\u0000-\u00FF][^a-zA-Z0-9]/.test(userName)) {
    test = true;
  }
  return test;
}





module.exports = {
  CheckValidChars : CheckValidChars,

};