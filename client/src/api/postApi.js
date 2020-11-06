const postApi = (() => {
  const likePost = (postId) => {
    console.log(postId);
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
  return { likePost };
})();

export default postApi;
