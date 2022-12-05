export const storeData = (key: string, value: any) => {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (e) {
    return null;
  }
};

export const getData = async (key: string) => {
  try {
    const value = localStorage.getItem(key);
    return value;
  } catch (e) {
    return null;
  }
};

export const deleteData = async (key: string) => {
  try {
    const value = localStorage.removeItem(key);
    return value;
  } catch (e) {
    return null;
  }
};
