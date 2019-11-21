## Registration endpoint:

post request,url:
https://friend-finder-backend.herokuapp.com/api/auth/register

expected request body: 
{"username":"mildred","password":"1234"}

expected response:
{
  "success": "Registration successful for user mildred"
}

## Login endpoint:

post method,url:
https://friend-finder-backend.herokuapp.com/api/auth/login

expected request body:
{"username":"mildred","password":"1234"}

expected response: 

{
  "success": "Welcome mildred",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Im1pbGRyZWQiLCJpYXQiOjE1NzQzMzIwMzYsImV4cCI6MTU3NDQxODQzNn0.chPPthr1wJ3azRKschwavKx8Bdn65ttSKIPUSF6zZ6o"
}



## Questions endpoint: 
get method,url:
https://friend-finder-backend.herokuapp.com/api/restricted/questions

expected response: 
Array of questions: 
[
  {
    "id": 1,
    "questionsBody": "What's your favorite drink tea or coffee?",
    "ans_a": "tea",
    "ans_b": "coffee",
    "ans_c": null
  },
  {
    "id": 2,
    "questionsBody": "What's your dream car, Tesla or Lamborghini?",
    "ans_a": "Tesla",
    "ans_b": "Lamborghini",
    "ans_c": null
  }]

## messages endpoint:

post method,url:


