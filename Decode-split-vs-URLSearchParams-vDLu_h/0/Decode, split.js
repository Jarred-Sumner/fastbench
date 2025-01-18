const search = new Map();

decodeURIComponent(body).split('&').forEach(i => {
  const [key, value] = i.split('=');
  search.set(key, value);
});