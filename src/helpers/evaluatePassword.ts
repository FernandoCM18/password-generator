
export function evaluatePassword(password: string) {
  let score = 0;
  const PASSWORD_LENGTH = password.length;
  const MIN_LENGTH = 8;
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

  if (!password) score;

  const lengthScore = PASSWORD_LENGTH >= MIN_LENGTH ? 1 : -1;
  const upperCaseScore = hasUpperCase ? 1 : 0;
  const lowerCaseScore = hasLowerCase ? 1 : 0;
  const numbersScore = hasNumbers ? 1 : 0;
  const specialScore = hasSpecial ? 1 : 0;

  score = lengthScore + upperCaseScore + lowerCaseScore + numbersScore + specialScore; 
  if (score <= 0) score = 0;
  if (score >= 4) score = 4;


  return score;
}


