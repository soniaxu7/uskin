function hash(length) {
  if (!length) {
    length = 8;
  }
  if (window.btoa) {
    return btoa(Math.random()).replace(/\=+$/, '').slice(-length);
  } else {
    var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
      len = str.length,
      ret = '';

    for (var i = 0; i < length; i++) {
      ret += str[Math.floor(Math.random() * len)]
    }
    return ret;
  }
}

export default hash;