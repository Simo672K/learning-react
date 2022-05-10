export const setPagination = (maxContent, pagesLength) => {
  return Math.ceil(pagesLength / maxContent);
};

export const getCurrentPageContent = (activePage, mainContent, maxContent) => {
  return mainContent.slice(
    maxContent * (activePage - 1),
    activePage * maxContent
  );
};
