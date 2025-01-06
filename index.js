const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Example usage:
const testEmails = [
    "test@example.com",
    "invalid-email",
    "another.test@domain.co",
    "user@subdomain.example.org",
    "invalid@domain,com"
];

testEmails.forEach(email => {
    console.log(`${email} is ${emailRegex.test(email) ? "valid" : "invalid"}`);
});