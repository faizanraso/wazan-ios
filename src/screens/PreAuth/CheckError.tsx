const checkError = (errorMessage: string) => {
  var message = "";
  switch (errorMessage) {
    case "auth/email-already-exists":
      message =
        "Looks like this email is already in use. Did you mean to login instead?";
      break;
    case "auth/internal-error":
      message =
        "Looks like there's something wrong on our end. Please try again later.";
      break;
    case "auth/invalid-email":
      message =
        "Looks like that email isn't valid. Please enter a valid email address.";
      break;
    case "auth/invalid-password":
        message = "Passwords are required to be a minimum of 6 characters. Please choose a valid password."
  }
  return message;
};

export default checkError;
