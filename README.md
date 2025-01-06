# Email-Regex-JS
Email validation regex in javascript

Explanation:

* ^: Asserts the position at the start of the string.
* [a-zA-Z0-9._%+-]+: Matches one or more characters that can be a letter, digit, period, underscore, * * 
* percent sign, plus sign, or hyphen.
* @: Matches the literal "@" character.
* [a-zA-Z0-9.-]+: Matches one or more characters that can be a letter, digit, period, or hyphen.
* \.: Matches the literal period character.
* [a-zA-Z]{2,}$: Matches exactly two or more letters at the end of the string.
* $: Asserts the position at the end of the string.

Output:

```bash
test@example.com is valid
invalid-email is invalid
another.test@domain.co is valid
user@subdomain.example.org is valid
invalid@domain,com is invalid
```

This regex covers most common email formats, but keep in mind that email validation can be complex and may require more robust solutions depending on the use case.