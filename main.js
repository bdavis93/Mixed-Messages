const string1 = ['You will', 'You are going to', 'You may never'];
const string2 = ['succeed', 'fail', 'get there', 'reach it'];
const string3 = ['fantastically.', 'miserably.', 'one day.', 'eventually.'];

const generateMessage = (str1, str2, str3) => {
    const random1 = str1[Math.floor(Math.random() * 3)];
    const random2 = str2[Math.floor(Math.random() * 4)];
    const random3 = str3[Math.floor(Math.random() * 4)];
    console.log(`${random1} ${random2} ${random3}`);
}

generateMessage(string1, string2, string3);