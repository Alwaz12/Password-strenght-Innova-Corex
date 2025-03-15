## Password Strength Checker

The Password Strength Checker is a JavaScript tool that allows users to check the strength of their passwords.

## Live Preview
```bash
https://mdashraful305.github.io/Password-Strength-Checker/
```
## Features

- Checks password strength based on the following conditions:
  - At least 1 lowercase letter
  - At least 1 uppercase letter
  - At least 1 digit
  - At least 1 special character
  - At least 8 characters long
  - At least 12 characters long
- Highlights the password strength conditions that are met
- Updates a progress bar to show the strength of the password

## Customization

You can customize the Password Strength Checker by modifying the CSS classes used in the HTML and JavaScript files. The following classes are used:

- `.form-control` - the class used for the password input field
- `#password-strength` - the ID used for the progress bar container
- `.progress-bar` - the class used for the progress bar element
- `.bg-danger` - the class used for the progress bar when the password is weak
- `.bg-warning` - the class used for the progress bar when the password is medium
- `.bg-success` - the class used for the progress bar when the password is strong
- `#password-conditions` - the ID used for the password conditions container
- `.password-condition` - the class used for each password condition element
- `.met` - the class added to password condition elements that are met

You can also modify the password strength conditions and their corresponding weights in the `calculatePasswordStrength` function in the JavaScript file.
