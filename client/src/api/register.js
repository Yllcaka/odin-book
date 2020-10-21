const register = (formData) => {
  const data = new FormData(formData);

  const dataJson = [...data.entries()].reduce((obj, current) => {
    obj[current[0]] = current[1];
    return obj;
  }, {});
  fetch("/api/register", {
    method: "POST",
    body: JSON.stringify(dataJson),
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  })
    // .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default register;
