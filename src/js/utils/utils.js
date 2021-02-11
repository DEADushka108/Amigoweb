export const findItemById = (id, list) => {
  return list.find((item) => {
    return item.id === Number(id);
  });
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const validateName = (name) => {
  const str = name.toString();
  const regexp = new RegExp(`[a-zA-Zа-яА-Я \-]+`, `g`);
  return str.match(regexp) ? str.match(regexp).toString().length === str.length : false;
};

export const validateEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email.toString());
};

export const validatePhone = (phone) => {
  return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone.toString());
};
