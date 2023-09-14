export const AuthHeader =
  sessionStorage.getItem === null
    ? null
    : {
        headers: {
          Authorization: 'Bearer '+sessionStorage.getItem("access_token"),
        },
      };
