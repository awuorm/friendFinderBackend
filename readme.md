## Documentation.
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

https://friend-finder-backend.herokuapp.com/api/restricted/msgs

expected request body: 
{"sender":1,"recepient":2,"message":"how are you?"}

expected response:
{ success: "Message sent successfully" }

get method,url:

https://friend-finder-backend.herokuapp.com/api/restricted/msgs

 expected response:

 Array of messages: 
   [{
    "id": 1,
    "sender": 1,
    "recepient": 2,
    "message": "hello"
  },
  {
    "id": 6,
    "sender": 1,
    "recepient": 2,
    "message": "how are you?"
  }
]

## answers endpoint:

post method,url:
https://friend-finder-backend.herokuapp.com/api/restricted/answers

request body: 
{"id":3,"questionid":3, "userid": 1,"answerid":6}

response body: 
{
  "success": "All your answers have been recorded"
}


## matches endpoint: 

get method,url:
https://friend-finder-backend.herokuapp.com/api/restricted/matches

expected response: 
[
  {
    "id": 14,
    "loggedin": 3,
    "potentialMatch": "mildred",
    "matched": 0,
    "probability": 3
  },
  {
    "id": 1,
    "loggedin": 1,
    "potentialMatch": "alice",
    "matched": 1,
    "probability": 2
  },
  {
    "id": 7,
    "loggedin": 1,
    "potentialMatch": "effie",
    "matched": 0,
    "probability": 2
  }
]

put method, url:
https://friend-finder-backend.herokuapp.com/api/restricted/matches

request body:
{
    "id": 3,
    "loggedin": 1,
    "potentialMatch": "effie",
    "matched": true,
    "probability": 12
  }

  response body:
  {success:"record updated successfully"}





