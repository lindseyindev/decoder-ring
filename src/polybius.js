const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const encoder = {
      a: "11",
      b: "21",
      c: "31",
      d: "41",
      e: "51",
      f: "12",
      g: "22",
      h: "32",
      i: "42",
      j: "42",
      k: "52",
      l: "13",
      m: "23",
      n: "33",
      o: "43",
      p: "53",
      q: "14",
      r: "24",
      s: "34",
      t: "44",
      u: "54",
      v: "15",
      w: "25",
      x: "35",
      y: "45",
      z: "55",
      " ": " ",
    };
    const decoder = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "i/j",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };

    if (encode == false) {
      let oddTestInput = input.split(" ").join("");
      if (oddTestInput.length % 2 === 1) {
        return false;
      }
    }
    input = input.toLowerCase();
    let output = "";
    if (encode == true) {
      for (let j of input) {
        output += encoder[j];
      }
    } else if (encode == false) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          output += " ";
        } else {
          let temp = `${input[i]}${input[i + 1]}`;
          output += decoder[temp];
          i++;
        }
      }
    }

    return output;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
