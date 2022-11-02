export const getLastUrlPath = (): string => {
  const pathName = window.location.pathname;
  const lastUrlPath = pathName.substring(
    pathName.lastIndexOf('/') + 1,
    pathName.lastIndexOf('/') + 5,
  );
  return lastUrlPath;
};
