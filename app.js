const profileDataArgs = process.argv.slice(2, process.argv.length);

// This is the same...
const [name, github] = profileDataArgs;
// As this...
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

const generatePage = (userName, githubName) => {
  return `
  Name: ${userName} 
  Github: ${githubName}
  `;
};
console.log(generatePage(name, github));

// console.log(profileDataArgs);

// const printProfileData = (profileDataArr) => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log("================");

//   //Is the same as this...
//   profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
