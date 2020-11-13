const postApi = (() => {
  //Like post Api
  const likePost = (postId) => {
    fetch("/api/post/update", {
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("jwtToken"),
      },
      mode: "cors",
      body: JSON.stringify({
        postId,
      }),
      method: "POST",
    });
  };
  //Create a new post
  const newPost = async (formData) => {
    const data = new FormData(formData);

    const dataJson = [...data.entries()].reduce((obj, current) => {
      obj[current[0]] = current[1];
      return obj;
    }, {});
    fetch("/api/post/new", {
      method: "POST",
      body: JSON.stringify(dataJson),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("jwtToken"),
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
  };

  return { likePost, newPost };
})();

export default postApi;
