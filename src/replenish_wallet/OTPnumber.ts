function otpGenerator(length: number): string {
  // Implementation remains the same
  const numbers = '0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return result;
}

// Export the function
export { otpGenerator };
