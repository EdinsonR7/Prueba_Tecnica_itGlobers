export const FORM_EMAIL = "FORM_EMAIL"


export const getValidations = (email) => {
  return {
    type: FORM_EMAIL,
    payload: email
  };

};

