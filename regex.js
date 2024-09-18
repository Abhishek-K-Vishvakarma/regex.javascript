let str = "Hello World!";
let pattern = /Hello/i;
let all = str.match(pattern);
console.log(all);

// JavaScript RegExp g Modifier...

let str1 = "Are you sure or not please sure now";
let res = /sure/g;
let all1 = str1.match(res);
console.log(all1);

// JavaScript RegExp d Modifier...
let str2 = "abababa";
let res1 = /((b)(a))/d;
let all2 = str2.match(res1);
console.log(all2);

// JavaScript RegExp d Modifier...
let str3 = "abababa";
let res2 = /((b)(a))/d;
let all3 = str3.match(res2);
console.log(all3);

// JavaScript RegExp m Modifier...
let str4 = ` Are you
sure
for
manipulation
yes
Are
`;
let res3 = /^Are/m;
let all4 = str4.match(res3);
console.log(all4);

//JavaScript RegExp [abc] Groups...
let str5 = 'Hello Abhishek Kumar Vishvakarma';
let res4 = /[alhr]/g;
let all5 = str5.match(res4);
console.log(all5);

//JavaScript RegExp [^abc] Groups...
let str6 = 'Hello Abhishek Kumar Vishvakarma';
let res5 = /[^alhr]/g;
let all6 = str6.match(res5);
console.log(all6);

//JavaScript RegExp [4-9] Groups...
let str7 = '1234567890';
let res6 = /[4-9]/g;
let all7 = str7.match(res6);
console.log(all7);

//JavaScript RegExp [^4-9] Groups...
let str8 = '1234567890';
let res7 = /[^4-9]/g;
let all8 = str8.match(res7);
console.log(all8);

//JavaScript RegExp (|) Groups...

let str9 = 'red, green, blue, yellow, red, pink';
let res8 = /(red|pink|blue)/g;
let all9 = str9.match(res8);
console.log(all9);







