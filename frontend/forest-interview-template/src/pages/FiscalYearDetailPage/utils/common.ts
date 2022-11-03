export const getLastUrlPath = (pathName: string): string => {
  if (!pathName || !pathName.includes('/')) {
    return pathName;
  }
  const lastQuestionMark = pathName.indexOf('?');
  if (lastQuestionMark >= 0) {
    return pathName.substring(pathName.lastIndexOf('/') + 1, lastQuestionMark);
  }
  return pathName.substring(pathName.lastIndexOf('/') + 1);
};
