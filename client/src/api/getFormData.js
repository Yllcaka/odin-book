const getFormData = (formData) => {
  const data = new FormData(formData);
  const dataJson = [...data.entries()].reduce((obj, current) => {
    obj[current[0]] = current[1];
    return obj;
  }, {});
  return dataJson;
};

export default getFormData;
