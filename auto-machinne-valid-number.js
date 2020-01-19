function isNumber(s) {
  let state = 0;
  s = s.trim();//去除头尾的空格
  //遍历所有字符，当做输入
  for (let i = 0; i < s.length; i++) {
    switch (s.charAt(i)) {
      //输入正负号
      case '+':
      case '-':
        if (state == 0) {
          state = 1;
        } else if (state == 4) {
          state = 6;
        } else {
          return false;
        }
        break;
      //输入数字
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        //根据当前状态去跳转
        switch (state) {
          case 0:
          case 1:
          case 2:
            state = 2;
            break;
          case 3:
            state = 3;
            break;
          case 4:
          case 5:
          case 6:
            state = 5;
            break;
          case 7:
            state = 8;
            break;
          case 8:
            state = 8;
            break;
          default:
            return false;
        }
        break;
      //小数点
      case '.':
        switch (state) {
          case 0:
          case 1:
            state = 7;
            break;
          case 2:
            state = 3;
            break;
          default:
            return false;
        }
        break;
      //e
      case 'e':
        switch (state) {
          case 2:
          case 3:
          case 8:
            state = 4;
            break;
          default:
            return false;
        }
        break;
      default:
        return false;

    }
  }
  //橙色部分的状态代表合法数字
  return state == 2 || state == 3 || state == 5 || state == 8;
}
console.log(isNumber('3.2'))
function test (no, arg, asset) {{
  const ans = isNumber(arg)
  if (ans !== asset) {{
    console.log(`${no} is wrong`)
  }}
}}
test(1, "123", true);
test(2, " 123 ", true);
test(3, "0", true);
test(4, "0123", true);  //Cannot agree
test(5, "00", true);  //Cannot agree
test(6, "-10", true);
test(7, "-0", true);
test(8, "123.5", true);
test(9, "123.000000", true);
test(10, "-500.777", true);
test(11, "0.0000001", true);
test(12, "0.00000", true);
test(13, "0.", true);  //Cannot be more disagree!!!
test(14, "00.5", true);  //Strongly cannot agree
test(15, "123e1", true);
test(16, "1.23e10", true);
test(17, "0.5e-10", true);
test(18, "1.0e4.5", false);
test(19, "0.5e04", true);
test(20, "12 3", false);
test(21, "1a3", false);
test(22, "", false);
test(23, "     ", false);
test(24, null, false);
test(25, ".1", true); //Ok, if you say so
test(26, ".", false);
test(27, "2e0", true);  //Really?!
test(28, "+.8", true);
test(29, " 005047e+6", true);
