export default function AuthFunction(token: any, store: any){

    let auth = "";
    if (token && token !== "undefined") {
      if (token?.groups.length === 2) {
        auth = "Both";
      }
      if (token?.groups.length === 1) {
        if (token?.groups[0] === "Teacher") {
          auth = "Teacher";
        }
        if (token?.groups[0] === "Owner") {
          auth = "Owner";
        }
        if (token?.groups[0] === "Bursar") {
          auth = "Bursar";
        }
        if (token?.groups[0] === "Parent") {
          auth = "Parent";
        }
      }
    }
    if (!store?.easysch_token) {
      store.setItem("redirectTo", window.location.pathname)
      auth = "UnAuthorized";
    }
    if (!token) {
      store.setItem("redirectTo", window.location.pathname)
      auth = "UnAuthorized";
    }
    if (token && ((token?.exp*1000) < (Date.now()))) {
      store.setItem("redirectTo", window.location.pathname)
      store.removeItem("easysch_token")
      auth = "UnAuthorized";
    }
    return auth;
  };