class Formatter {

  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    let res = ''
    for (let char of string) {
      debugger;
      if (/^[a-zA-Z-'' ']/.test(char)){
        res += char
      }
    }
    return res
  }

  static titleize(string) {
    const noCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    string = Formatter.sanitize(string);
    const words = string.split(" ");
    let res = [];
    for (let i = 0; i < words.length; i++) {
      if (!noCap.includes(words[i]) || i === 0) {
        res.push(Formatter.capitalize(words[i]));
      } else {
        res.push(words[i])
      };
    };
    return res.join(" ")
  }
}