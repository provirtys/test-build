export const navigateTo = (url) => {
  window.top.history.pushState(null, '', url);
  window.top.location.reload();
};
