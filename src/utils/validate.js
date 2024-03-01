export const checkValidateData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  ); // if this regex is pass this will give true

  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

  const isNameValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);

  if (!isNameValid) return "Name is not Valid";

  if (!isEmailValid) return "Email is not Valid";

  if (!isPasswordValid) return "Password is not Valid";

  return null;

  /* to return */
  //   const validationMessages = [];

  //   if (!isNameValid) validationMessages.push("Name is not Valid");
  //   if (!isEmailValid) validationMessages.push("Email is not Valid");
  //   if (!isPasswordValid) validationMessages.push("Password is not Valid no valid");

  //   return validationMessages.join(', ');
};
