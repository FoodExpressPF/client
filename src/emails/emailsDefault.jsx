export const PaymentConfirmed = (price) => {
  let email = {
    user: "",
    subject: "Payment Confirmed",
    text: `Food Express informs you that your payment of ${price}USD has just been confirmed, we hope you enjoy our food and you will be contacted shortly for more information`,
  };
  return email;
};

export const PaymentDeclined = (price) => {
  let email = {
    user: "",
    subject: "Payment Declined",
    text: `We are sorry to inform you that your payment was rejected for reasons beyond the control of our company, please verify that you have the required money in your account(${price}USD)`,
  };
  return email;
};
