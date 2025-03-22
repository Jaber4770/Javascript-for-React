// আজকের জাভাস্ক্রিপ্ট এর কনসেপ্টগুলো React এ গেলে কাজে লাগবে। 



// ১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়, কখন কোনটা ইউজ করে তুমি কি জানো ?var নামক একটা জিনিস আছে সেটাও জানতে হবে। 
var old = 5;
let string = "hello world!";
const boleean = true;


// ২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন(>, <, >=, <=, ==, !=, ===, !==) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে। 

if (5 > 3 && 4 < 5) {
    console.log("i don't know.");
}
if (5 >= 3 || 4 <= 5 || 5 == 5 || 5 === 5 || 3 != 4 || 4 !== 4) {
    console.log("i don't know.");
}


// ২.২. এক বা একাধিক কন্ডিশন দিয়ে কিভাবে if-else লিখে আবার কখন if-else if - else লিখে। সেই রকম একটা উদারহণ চিন্তা করে তুমি লিখে ফেলো। else ছাড়া শুধু if দিয়েও কন্ডিশন লিখো। একটা if অনেকগুলা else if এবং লাস্টে একটা else এর কন্ডিশন লিখো। হতে পারে গ্রেডিং বের করার জন্য কন্ডিশন লিখবে তুমি। 
if (4 < 3) {
    console.log("false");
}
else if (4 === 4) {
    console.log("true");
}
else {
    console.log("sorry bro!");
}


// ৩. array কিভাবে ডিক্লেয়ার করে array এর মধ্যে length, index, push, pop, indexOf, includes এইগুলা কিভাবে কাজ করে। কোনটা দিয়ে কি করে ? সেগুলা কি তুমি জানো ? কোন একটা জিনিস array কিনা সেটা চেক করার সিস্টেম জানতে হবে। আরেকটু ভালো হয় slice এবং splice জানলে। আরো বোনাস কিছু জানতে চাইলে shift, unshift, join দেখতে পারো। এডভান্স হিসেবে reduce দেখতে পারো। 
const array = [12, 23, 43, 34, 54, 6];
array.push(4);
array.pop();
array.unshift(3);
array.shift(33);
array.indexOf(3);
array[3];
array.includes(4);


// ৪. দুইটা বেসিক লুপ, এর মধ্যে for loop তোমাকে জানতেই হবে। while লুপটাও দেখে রাখতে পারো। যদিও আমরা এই দুইটা লুপই কম ইউজ করবো। তাও কখনো লাগলে যেন তুমি বুঝে ফেলতে পারো। এছাড়া কখন for of আর কখন for in ইউজ করবে সেটা তুমি জানো।
for (const i = 0; i <= 5; i++) {
    console.log(i);
}
const i = 0;
while (i <= 5) {
    console.log(i);
    i++
}

const friends = ["srk", "jrk", "jack"];
for (const friend of friends) {
    console.log(friend);
}

const object = {
    name: "jack",
    age: 11,
    univeristy: "upb, uniMe"
}
for (const key in object) {
    console.log(object[key]);
}


// ৫.function একটা অবশ্য জিনিস। বিশেষ করে সিম্পল একটা ফাংশন কখন ডিক্লেয়ার করতে হয়। কখন ফাংশন থেকে return করে। আর কখন করে না। আর কিভাবে ফাংশন এর মধ্যে parameter নিতে হয়। কিভাবে কল করে। ফাংশন এর রিটার্ন কোন ভেরিয়েবলে রেখে সেই ভেরিয়েবল নিয়ে কিভাবে কাজ করে।
function sum(num1, num2) {
    return num1 + num2;
}
sum(1, 2);

// arrow function:
const arrowFunction = () => {
    console.log("hello arrow function");
}

// ৬. আখেরি রত্ন হচ্ছে Object তাই কোন একটা অবজেক্ট কিভাবে ডিক্লেয়ার করে। সেখান property কিভাবে কিভাবে একসেস করা যায়। এছাড়াও অবজেক্ট এর প্রপার্টি এর ভ্যালু হিসেবে কিভাবে array, object ইউজ করা যায়।.
const objectIdentity = {
    name: "object",
    language: "javascript",
    anotherName: "ECMA script",
    age: 30,
    array: [12, 23, 432, 43, 543, 45, 43543],
    object: {
        name: "object",
        age: 40
    }
}


// সিম্পল বেসিক কয়েকটা ডাটা টাইপ সম্পর্কে জানতে হবে। 

// ১. string কি জিনিস। স্ট্রিং কেমনে ডিক্লেয়ার করে। স্ট্রিং থেকে কিভাবে কোন একটা ক্যারেক্টার খুঁজে বের করে। চাইলে স্ট্রিং এর উপরে কি লুপ চালানো যায়। এছাড়াও length, includes, indexOf, toUpperCase, toLowerCase, জানতেই হবে। subString, concat জানলে ভালো। বোনাস হিসেবে জানতে পারো string কি mutable নাকি immutable 



// ২. number সম্পর্কে জানতে হবে। integer, float কোনগুলা। স্ট্রিং থেকে নাম্বারে রূপান্তর করার সিস্টেম। কোন একটা সংখ্যা integer কিনা সেটা চেক করার সিস্টেম জানতে হবে। NaN বলতে একটা জিনিস আছে। সেটা কি জিনিস। 



// ৩.true false কখন ইউজ করে। সেটা জানতে হবে। কি কি ধরনের জিনিস জাভাস্ক্রিপ্ট এর truthy আর কি কি জিনিস জাভাস্ক্রিপ্ট এ falsy সেটা জানতে হবে। 



// ৪.null এবং undefined কি জিনিস। কখন কোনটা ইউজ করা হয়। বা কখন কোনটা কিভাবে চেক করতে হয়। সেটা জানতে হবে। 





// ES6 রিলেটেড সাতটা জিনিস তোমাকে জানতে হবে



// ১. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে অবজেক্ট এর প্রপার্টি এর মান কিভাবে বসায় সেটা জানতে হবে। বিশেষ করে নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। বা কোন একটা অবজেক্ট এর প্রপার্টি array সেই array থেকে ভ্যালু এনে কিভাবে টেমপ্লেট স্ট্রিং এর মধ্যে বসাতে পারবে ।



// ২. স্প্রেড অপারেটর(...) কিভাবে কাজ করে। বিশেষ করে একটা array কে কপি করে নতুন করে array বানাবে এবং সেখানে একটা উপাদান যোগ করবে। আবার একটা উপাদান কে বাদ দিয়ে বাকি সব উপাদানকে কিভাবে যোগ করবে(filter ইউজ করে)



// ৩.১. শূন্য প্যারামিটারওয়ালা একটা অ্যারো ফাংশন কিভাবে লিখে। উদাহরণ হিসাবে তুমি এখন একটা অ্যারো ফাংশন লিখবে যেটা ৯ রিটার্ন করবে।



// ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ১২ দিয়ে গুণ করে গুণফল রিটার্ন করবে।
const singleParameter = num => num * 12;


// ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে চার দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।
const doubleParaMeter = (num1, num2) => num1 * num2;

// ৩.৪ একাধিক লাইনওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৫ যোগ করবে তারপর যোগফল দুইটাকে আবার গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।
const multiLineFunction = (num1, num2) => {
    return num1 + num2;
};


// ৪. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।



// ৬. ফাংশন এর মধ্যে ডিফল্ট প্যারামিটার কিভাবে ডিক্লেয়ার করে
const defaultPerameter = (x = 9) => {
    console.log(x);
}


// ৭. অপশনাল চেইনিং কি জিনিস, সেটা কখন কিভাবে ইউজ করে ?

console.log(objectIdentity?.object?.name);



//     স্ট্যান্ডার্ড ছোট ছোট কয়েকটা মেথড আছে সেগুলা হালকা করে হলেও জানতে হবে। 



// ১. Math দিয়ে min, max, ceil, floor, abs, round, random ইত্যাদি দেখে রাখতে হবে। যদি লাগে যেন বের করে ফেলতে পারো 



// ২. আগে না হয় পরে রেগুলার এক্সপ্রেশন কি জিনিস এবং কিভাবে এপ্লাই করে। কি কারণে এপ্লাই করে সেটা জানতে হবে 



// ৩. এটলিস্ট JSON কিভাবে parse করে বা stringify করে সেটা জানতে হবে



// ------------



//     ডাইরেক্ট



// রিএক্ট; 



// হবে না, না করলে জাভাস্ক্রিপ্টকে রেসপেক্ট 



// এইটাই বাস্তবতা, এইটাই ফ্যাক্ট।

