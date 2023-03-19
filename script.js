var text = "";
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i + 1; j++) {
        text += "*"
    }
    text += "\n";
}
console.log(text);

console.log("============================");

var text="";
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 10; j++) {
        text += "*"; 
    }
    text+= "\n";
}
console.log(text);

console.log("============================");

var text="";
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 10; j++) {
        if (i == 0 || i == 5 || j == 0 || j == 9) {
            text += "*";
        } else {
        text += " ";
        }
    }
    text+= "\n";
}
console.log(text);

console.log("============================");

var text= "";
for (let i = 0; i < 10; i++) {
    for (let j = 10; j > i; j--) {
        text += "*"
   }
    text += "\n";
}
console.log(text);

console.log("============================");

var str = "";
var a = 10;
var z = 9;

for (let j = 0; j < 10; j++) {
    for (let i = 0; i < a; i++) {
        str += " ";
        if (i == z) {
            str += "*";
        }
    }
    str += "\n";
    z -= 1;
}  
console.log(str);

console.log("============================");

var str = "";
var a = 10;
var z = 0;

for (let j = 0; j < 10; j++) {
    for (let i = 0; i < a; i++) {
        str += " ";
        if (i == z) {
            str += "*";
        }
    }
    str += "\n";
    z ++;
}  
console.log(str);

console.log("============================");

var str = "";
var a = 10;
var z = 9;
var l = 1;

for (let j = 0; j < 10; j++) {
    for (let i = 0; i < a; i++) {
        str += " ";
        if (i == z) {
            for (let o = 0; o < l; o++) {
                str += "*";    
            }
            l += 2;
        }
    }
    str += "\n";
    z --;
}  
console.log(str);

console.log("============================");

const height = 10; 
let triangle = '';

for (let i = 1; i <= height; i++) {
  triangle += ' '.repeat(height - i);
   if (i == 1 || i == height) {
    triangle += '*'.repeat(2 * i - 1);
  } else {
    triangle += '*';
    triangle += ' '.repeat(2 * i - 3);
    triangle += '*';
  }
  triangle += '\n';
}
console.log (triangle);

console.log("============================");

let rows = 11; 
let cols = 11; 
let rhomb = ""; 

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
        if (i + j === Math.floor(rows / 2) || i - j === Math.floor(rows / 2) || j - i === Math.floor(rows / 2) || i + j === Math.floor(rows / 2) * 3) {
        rhomb += "* ";
    } else {
        rhomb += "  ";
    }
  }
  rhomb += "\n";
}
console.log(rhomb);

console.log("============================");

let diamond = ""; 

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    if (i + j >= Math.floor(rows / 2) && i + j <= Math.floor(rows / 2) * 3 && i - j >= -Math.floor(rows / 2) && i - j <= Math.floor(rows / 2)) {
        diamond += "* ";
    } else {
      diamond += "  ";
    }
  }
  diamond += "\n";
}
console.log(diamond);