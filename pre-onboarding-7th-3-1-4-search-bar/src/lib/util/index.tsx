export const makeBoldMatchedString = (keyword: string, fullText: string) => {
  const splitArray = fullText.split(keyword);
  const convertedString = splitArray.join(`<b>${keyword}</b>`);

  return convertedString;
};
