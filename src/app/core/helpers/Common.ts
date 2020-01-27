export function isEnglishWord(text: string) {
  const regex = new RegExp(/([A-Z)([a-z])\w+/g);
  return regex.test(text);
}

export function transformToArray(obj): any[] {
  const temp = [];
  Object.keys(obj).forEach(key => {
    temp.push(obj[key]);
  });
  return temp;
}
