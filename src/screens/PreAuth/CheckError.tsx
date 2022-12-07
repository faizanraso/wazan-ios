const checkError = (errorMessage: string) => {
  var message = "";
  switch (errorMessage) {
    case "auth/email-already-exists":
      message =
        "Looks like this email is already in use. Did you mean to login instead?";
      break;
    case "auth/invalid-email":
      message =
        "Looks like that email isn't valid. Please enter a valid email address.";
      break;
    case "auth/invalid-password":
      message =
        "Passwords are required to be a minimum of 6 characters. Please choose a valid password.";
    case "password/matching-error":
      message = "Looks like your passwords don't match. Please try again.";
      break;
    case "auth/weak-password":
      message =
        "That's a pretty weak password. Please choose a password that is at least six characters.";
      break;
    case "missing-fields":
      message = "Please fill in all fields to register.";
      break;
    case "auth/email-already-in-use":
      message =
        "Looks like that email is already in use. Try signing in instead?";
      break;
    case "auth/invalid-display-name":
      message = "Invalid name entered.";
      break;
    case "auth/wrong-password":
      message = "Invalid password. Please try again."
      break;
    case "auth/too-many-requests":
      message = "You've tried logging in too many times. Please try again later."
      break;
    default:
      message =
        "Looks like something went wrong. Please ensure all fields are filled in and try again. If the error persists, please try again later.";
      break;
  }
  return message;
};

export default checkError;
