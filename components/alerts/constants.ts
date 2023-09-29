import { AlertStateType } from ".";

export const SUCCESS_ALERT: AlertStateType = {
  type: "success",
  msg: "Action effectuée !",
  closeDelay: 3000,
};
export const ERROR_ALERT: AlertStateType = {
  type: "danger",
  msg: "Une erreur est survenue",
  closeDelay: 3000,
};
