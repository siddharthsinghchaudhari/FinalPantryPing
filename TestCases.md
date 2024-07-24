# Test Cases

## Test Case: 1  
**Scenario:** URL Loads Successfully.

## Test Case: 2  
**Scenario:** Sign Up page loads successfully.

## Test Case: 3  
**Scenario:** LogIn page loads successfully.

## Test Case: 4  
**Scenario:** Unsuccessful Signup with Invalid Email Format.

## Test Case: 5  
**Scenario:** Unsuccessful Signup with Invalid Password Format.

## Test Case: 6  
**Scenario:** Successful Signup with valid Email Format.

## Test Case: 7  
**Scenario:** Unsuccessful Login without email verification.

## Test Case: 8  
**Scenario:** Email verification of user.

## Test Case: 9  
**Scenario:** Unsuccessful Login with invalid credentials.

## Test Case: 10  
**Scenario:** Successful Login after email verification.

## Test Case: 11 (NFR)  
**Scenario:** User clicks on a beverage, Processing Screen appears.

## Test Case: 12 (NFR)  
**Scenario:** User clicks on a beverage, a popup of order sent is displayed after processing.

## Test Case: 13  
**Scenario:** User wants to logout.

## Test Case: 14  
**Scenario:** User checks his order status.

## Test Case: 14.1  
**Scenario:** User checks his order status and found to be Delivering shortly.

## Test Case: 14.2  
**Scenario:** User checks his order status and finds that the delivery person is busy.

## Test Case: 14.3  
**Scenario:** User checks his order status and finds the delivery person is on leave.

## Test Case: 14.4  
**Scenario:** User checks his order status and finds his order will be delayed.

## Test Case: 15  
**Scenario:** User has forgotten his password, and needs to reset it.

## Test Case: 15.1  
**Scenario:** User has forgotten his password, and needs to reset it.

## Test Case: 15.2 (NFR)  
**Scenario:** User has forgotten his password, and needs to reset it.

## Test Case: 15.3  
**Scenario:** User has forgotten his password, and needs to reset it.

## Test Case: 15.4  
**Scenario:** User has forgotten his password, and needs to reset it.

---

## Test Case: 1

**Scenario:** URL Loads Successfully.  
**Summary:** User is on a web browser.  
**To test that:** Website URL work properly.  

**Description**

**Given:** A user has a web browser and the website URL.  
**When:** User enters the website URL into the web browser.  
**Then:** User sees the website's landing page.  
**And:** The landing page displays two options, Login and SignUp below the summary of the website.

**Result:** Passed/ Failed  

**Screenshot**

---

## Test Case: 2  
**Scenario:** Sign Up page loads successfully.

**Summary:** User is on landing page.  
**To test that:** Sign up page loads successfully.

**Description**

**Given:** The user is on the Landing Page.  
**When:** The user clicks the "SignUp" button.  
**Then:** The user is redirected to the SignUp page  
**And:** The user sees three options (Email, Password and Re-enter password)  

**Result:** Passed/ Failed  

**Screenshot**

---

## Test Case: 3

**Scenario:** LogIn page loads successfully.

**Summary:** User is on landing page.  
**To test that:** LogIn page loads successfully.

**Description**

**Given:** The user is on the Landing Page.  
**When:** The user clicks the "LogIn" button.  
**Then:** The user is redirected to the Login page.  
**And:** The user sees two input fields options (Email and Password)

**Result:** Passed/ Failed  
**Screenshot**

---

## Test Case: 4

**Scenario:** Unsuccessful Signup with Invalid Email Format.

**Summary:** User is on the sign-up page.  
**To test that:** User fails to sign up with an invalid email format.

**Description**

**Given:** The user is on the signup page.  
**When:** The user enters an invalid email format (email id other than postfix of “@fosteringlinux.com”).  
**And:** The user clicks on the submit button.  
**Then:** An error message "Invalid email domain" is displayed.  
**And:** The user is still on the signup page.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 5

**Scenario:** Unsuccessful Signup with Invalid Password Format.

**Summary:** User is on the sign-up page.  
**To test that:** User fails to sign up with an invalid password format.

**Description**

**Given:** The user is on the signup page.  
**When:** The user enters an invalid password format (minimum 8 characters and one special character).  
**And:** The user clicks on the submit button.  
**Then:** An error message "Password must be at least 8 characters long and contain at least one special character" is displayed.  
**And:** The user is still on the signup page.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 6.1 (NFR)

**Scenario:** Successful Signup with valid Email Format.  
**Summary:** User is on the sign-up page.  
**To test that:** User successfully signs up with a valid email format.

**Description**

**Given:** The user is on the signup page.  
**When:** The user enters a valid email format (email id with a postfix of “@fosteringlinux.com”).  
**And:** Valid password format of 8 characters and one special character.  
**And:** The user clicks on the submit button.  
**Then:** The user sees a processing screen.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 6.2 (NFR)

**Scenario:** Successful Signup with valid Email Format.  
**Summary:** User is on the sign-up page.  
**To test that:** User successfully signs up with a valid email format.

**Description**

**Given:** The user is on the signup page.  
**When:** The user enters a valid email format (email id with a postfix of “@fosteringlinux.com”).  
**And:** Valid password format of 8 characters and one special character.  
**And:** The user clicks on the submit button.  
**Then:** The user sees a popup after the processing screen.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 6.3

**Scenario:** Successful Signup with valid Email Format.  
**Summary:** User is on the sign-up page.  
**To test that:** User successfully signs up with a valid email format.

**Description**

**Given:** The user is on the signup page.  
**When:** The user enters a valid email format (email id with a postfix of “@fosteringlinux.com”).  
**And:** Valid password format of 8 characters and one special character.  
**And:** The user clicks on the submit button.  
**Then:** The user is redirected to the Login page.  
**And:** Sees two input fields (Email and Password).

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 7

**Scenario:** Unsuccessful Login without email verification.

**Summary:** User is on the Login page.  
**To test that:** User fails to Login without an email verification.

**Description**

**Given:** The user is on the Login page.  
**When:** The user enters the sign-up credentials which he entered while successful SignUp.  
**And:** The user clicks on the submit button without verifying email.  
**Then:** The user is still on the Login page.  
**And:** The message is displayed “Error logging in, please check your credentials or confirm your email by clicking link in email sent to you”.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 8

**Scenario:** Email verification of user.

**Summary:** User is in the email sent in his inbox.  
**To test that:** User verifies his/her Email.

**Description**

**Given:** The user is on the email sent to verify.  
**When:** The user clicks on the link sent to his/her email.  
**Then:** The user is redirected to the login page  
**And:** Sees the message of the email being verified.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 9

**Scenario:** Unsuccessful Login with invalid credentials.

**Summary:** User is on the Login page.  
**To test that:** User fails to Login with invalid credentials.

**Description**

**Given:** The user is on the Login page.  
**When:** The user enters the invalid credentials.  
**And:** The user clicks on the submit button  
**Then:** The user is still on the Login page.  
**And:** He sees a message “Error logging in, please check your credentials or confirm your email by clicking link in email sent to you”.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 10

**Scenario:** Successful Login after email verification.

**Summary:** User is on the Login page.  
**To test that:** User Logs in after an email verification and with valid credentials.

**Description**

**Given:** The user is on the Login page.  
**When:** The user enters the valid credentials.  
**And:** The user clicks on the submit button after verifying email.  
**Then:** The user lands on the Homepage.  
**And:** He/She sees the beverages available in the company’s cafeteria.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 11 (NFR)

**Scenario:** User clicks on a beverage, Processing Screen appears.

**Summary:** User is on the Homepage.  
**To test that:** User successfully orders a drink and sees a processing screen.

**Description**

**Given:** The user is on the Home page.  
**When:** The user clicks on the beverage of his choice.  
**Then:** A processing screen appears before the order is confirmed.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 12 (NFR)

**Scenario:** User clicks on a beverage, a popup of order sent is displayed after processing.

**Summary:** User is on the Homepage.  
**To test that:** User successfully orders a drink and sees a popup message.

**Description**

**Given:** The user is on the Home page.  
**When:** The user clicks on the beverage of his choice.  
**Then:** A popup message is displayed when the order is sent.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 13

**Scenario:** User wants to logout.

**Summary:** User is on the Homepage.  
**To test that:** User successfully logs out.

**Description**

**Given:** The user is on the Home page.  
**When:** The user clicks on the Logout button  
**Then:** The user is redirected to the Login page.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 14

**Scenario:** User checks his order status.

**Summary:** User is on the Homepage.  
**To test that:** User successfully checks the status of the order as replied by the cafeteria.

**Description**

**Given:** The user is on the Home page.  
**When:** The user clicks on the “check order status” button.  
**Then:** The user is redirected to the order status page  
**And:** The order details along with the status of the order is displayed.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 14.1

**Scenario:** User checks his order status and found to be Delivering shortly.

**Summary:** User is on the Homepage.  
**To test that:** User successfully checks the status of the order to be Delivered shortly as replied by the cafeteria.

**Description**

**Given:** The user is on the Home page.  
**When:** The user clicks on the “check order status” button.  
**Then:** The user is redirected to the order status page  
**And:** The order details along with the status of the order to be “Delivering shortly” is displayed.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 14.2

**Scenario:** User checks his order status and finds that the delivery person is busy.

**Summary:** User is on the Homepage.  
**To test that:** User successfully checks the status of the order and finds the delivery person is busy as replied by the cafeteria.

**Description**

**Given:** The user is on the Home page.  
**When:** The user clicks on the “check order status” button.  
**Then:** The user is redirected to the order status page  
**And:** The order details along with the status of the order to be “Sorry, I am busy” is displayed.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 14.3

**Scenario:** User checks his order status and finds the delivery person is on leave.

**Summary:** User is on the Homepage.  
**To test that:** User successfully checks the status of the order and finds the delivery person is on leave as replied by the cafeteria.

**Description**

**Given:** The user is on the Home page.  
**When:** The user clicks on the “check order status” button.  
**Then:** The user is redirected to the order status page  
**And:** The order details along with the status of the order to be “I am on leave” is displayed.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 14.4

**Scenario:** User checks his order status and finds his order will be delayed.

**Summary:** User is on the Homepage.  
**To test that:** User successfully checks the status of the order to be Delayed as replied by the cafeteria.

**Description**

**Given:** The user is on the Home page.  
**When:** The user clicks on the “check order status” button.  
**Then:** The user is redirected to the order status page  
**And:** The order details along with the status of the order to be “Order will be delayed” is displayed.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 15

**Scenario:** User has forgotten his password, and needs to reset it.

**Summary:** User is on the Login page.  
**To test that:** User resets his password.

**Description**

**Given:** The user is on the Login page.  
**When:** The user clicks on the “forgot your password?”  
**Then:** The user is redirected to the forgot password page.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 15.1

**Scenario:** User has forgotten his password, and needs to reset it.

**Summary:** User is on the Forgot password page.  
**To test that:** User resets his password.

**Description**

**Given:** The user is on the forgot password page.  
**When:** The user enters his email.  
**And:** Clicks “Send Reset Link” button  
**Then:** An email is sent to his inbox for resetting the password.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 15.2 (NFR)

**Scenario:** User has forgotten his password, and needs to reset it.

**Summary:** The message is displayed when user enters his email and clicks on “send reset link” button.  
**To test that:** User resets his password.

**Description**

**Given:** The user is on the forgot password page.  
**When:** The user enters his email.  
**And:** Clicks “Send Reset Link” button  
**Then:** The message is displayed “Password reset link sent to your email.”

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 15.3

**Scenario:** User has forgotten his password, and needs to reset it.

**Summary:** User is in his inbox of his mail.  
**To test that:** User is redirected to reset password page to reset his password.

**Description**

**Given:** The user is in the inbox of his mail.  
**When:** The user clicks the link in his email.  
**Then:** He is redirected to the reset password page.

**Result:** Passed/Failed  
**Screenshot**

---

## Test Case: 15.4

**Scenario:** User has forgotten his password, and needs to reset it.

**Summary:** User is on reset password page.  
**To test that:** User is redirected to Login page after resetting his password.

**Description**

**Given:** The user is in the inbox of his mail.  
**When:** The user clicks the link in his email.  
**Then:** He is redirected to the reset password page.

**Result:** Passed/Failed  
**Screenshot**
