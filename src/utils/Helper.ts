export const timeConverter = (t: number): string => {
  const minutes = Math.floor(t / 60);
  const seconds = t % 60;

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds} seconds`;
};

 export const commaSeparator = (value) =>{
    return    value.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          );
     }
     

export const passwordTester = (testObj, value) => {
  const numRegex = new RegExp("(?=.*[0-9])");
  const numTest = numRegex.test(value);

  const upCaseRegex = new RegExp("(?=.*[A-Z])");
  const upCaseTest = upCaseRegex.test(value);

  const lowCaseRegex = new RegExp("(?=.*[a-z])");
  const lowCaseTest = lowCaseRegex.test(value);

  const symbolRegex = new RegExp("(?=.*[!@#$%^&*])");
  const symbolTest = symbolRegex.test(value);

  return {
    ...testObj,
    lengthVal: value.length >= 8,
    oneNumVal: numTest,
    oneUpCaseVal: upCaseTest,
    oneLowCaseVal: lowCaseTest,
    specialVal: symbolTest,
  };
};
