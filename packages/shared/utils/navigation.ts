export const navigateTo = (url: string) => {
  if (window.top) {
    window.top.history.pushState(null, '', url);
    window.top.location.reload();
  }
};
