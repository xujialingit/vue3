export default {
  set: (key, data) => {
    data = typeof data === "string" ? data : JSON.stringify(data);
    localStorage.setItem(key, data);
  },
  get: (key) => {
    let tmp = localStorage.getItem(key);
    try {
      tmp = JSON.parse(tmp);
    } catch (error) {
      //
    }
    return tmp;
  },
  remove: (key) => {
    if (key) {
      localStorage.removeItem(key);
    } else {
      localStorage.clear();
    }
  }
}