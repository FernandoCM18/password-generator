interface IGeneratePassword {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}
export function generatePassword({length, uppercase, lowercase, numbers, symbols}: IGeneratePassword) {
  let result = '';

  if (uppercase) {
    result += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (lowercase) {
    result += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (numbers) {
    result += '0123456789';
  }

  if (symbols) {
    result += '!@#$%^&*()_+=-';
  }

  let password = '';

  for(let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * result.length);
    password += result[random];
  }

  return password;
}