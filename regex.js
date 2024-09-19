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

// JavaScript Regex (/./) Metacharacters...
let str10 = 'String, Hello, World, Infosys, system';
let res9 = /s.s/g;
let all10 = str10.match(res9);
console.log(all10);

// JavaScript Regex (/\w/g) Metacharacters...
let str11 = 'Hello 100%';
let res10 = /\w/g;
let all11 = str11.match(res10);
console.log(all11);

// JavaScript Regex (/\W/g) Metacharacters...
let str12 = 'Hello100%!';
let res11 = /\W/g;
let all12 = str12.match(res11);
console.log(all12);

// JavaScript Regex (/\d/g) Metacharacters...
let str13 = 'Hello100%!';
let res12 = /\d/g;
let all13 = str13.match(res12);
console.log(all13);

// JavaScript Regex (/\D/g) Metacharacters...
let str14 = 'Hello100%!';
let res13 = /\D/g;
let all14 = str14.match(res13);
console.log(all14);

// JavaScript Regex (/\s/g) Metacharacters...
let str15 = 'Hello 100% !';
let res14 = /\s/g;
let all15 = str15.match(res14);
console.log(all15);


// JavaScript Regex (/\S/g) Metacharacters...
let str16 = 'Hello 100% !';
let res15 = /\S/g;
let all16 = str16.match(res15);
console.log(all16);



// JavaScript Regex (/\b/) Metacharacters...
let str17 = 'HELLO WORLD HELP ME';
let res16 = /\bME/;
let all17 = str17.search(res16);
console.log(all17);

// JavaScript Regex (/\B/) Metacharacters...
let str18 = "HELLO, LOOK AT YOU!";
let res17 = /\BLO/;
let all18 = str18.search(res17);
console.log(all18);

// JavaScript Regex {X} Quantifiers...
let str19 = "1000,100,1000,1000,10000";
let res18 = /\d{4}/g;
let all19 = str19.match(res18);
console.log(all19);


// JavaScript Regex {X,Y} Quantifiers...
let str20 = "1,100,1000,1000,100";
let res19 = /\d{3,4}/g;
let all20 = str20.match(res19);
console.log(all20);

// JavaScript Regex {X,Y} Quantifiers...
let str21 = "1,100,1000,1000,100";
let res20 = /\d{4,}/g;
let all21 = str21.match(res20);
console.log(all21);

// JavaScript Regex $ Quantifiers...
let str22 = "Is This";
let res21 = /is$/;
let all22 = str22.match(res21);
console.log(all22);

// JavaScript Regex $ Quantifiers...
let str23 = "Is This is Timing";
let res22 = /^I/;
let all23 = str23.match(res22);
console.log(all23);