# $how Me The Money

# Kokako 2018 Large Group Project

Meetings are expensive, but sometimes we forget how expensive they are and feel the need to talk for too long about topics that are unimportant for the meeting purpose.

This is an app to display the costs of meetings, and track the costs of your meetings over time.

The idea of the App is to be able to display the real-time cost of a meeting as it occurs.
This cost is calculated based on the hourly wages of the meeting's attendees and the current duration of the meeting.

The intended effect of this App is to make meeting attendees aware of how much this time is costing the business.


## User Stories

### MVP

As a user:
  * I want to register for the App under my name, and state my hourly wage
  * I want to start a new meeting, and add all the meeting members. (MVP: Add member names and wages manually)
  * I want to start my created meeting, and see a ($) cost tracker display the current meeting cost every second
  * I want to be able to save a meeting's cost, attendess, duration and date/time when it is finished for later viewing
  * I want to be able to view previous meetings in date/time order, and see more information about a past meeting.
  * I want to see a graph of meeting costs over time

### Stretch
  * I want to be able to select existing users of the App as meeting attendees, so that our wages don't have to be shown / inputted manually. If a meeting attendee doesn't have an account, I want to be able to manually add them to the App.
  * I want to set a Maximum Cost an Maximum Duration for my Meeting, and see colourised progress bar displaying both a these
  * I want to be able to state my yearly salary rather than hourly rate as an option on register
  * I want to be able to view all meetings that I am an attenee for, and I want information about my meetings to not be visible to all users of the app.
  * I want to create a group of regular attendees for my meeting group to make setting up my meeting easier.

  ---

## Views (Client Side)
  | name | purpose |
  | --- | --- |
  | Login | View for user to enter their login credentials |
  | Register | View for user to sign up for the App |
  | CreateMeeting | View for user to arrange meeting attendees and information before starting the timer |
  | Meeting | View to display current meeting time, cost and other information while the meeting is in progress |
  | History | Display a list of past meetings the user has attended with select preview information |
  | PastMeeting | Display a single meeting from the history list, displaying more information and a list of attendees for the past meeting |


## Reducers (Client Side)

  | name | purpose |
  | --- | --- |
  | auth | Store information regarding user logins, auth status and auth errors |
  | currentMeeting | Track meeting progress such as current cost and current duration |
  | meetings | store the list of meetings the user has attended in the past |
  | users | store the list of users who can attend meetings |


## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |
| Get | /api/meetings | Yes | Get a Users Meeting Histroy | An Array of Meetings |
| Post | /api/meetings | Yes | Save a completed meeting | The Meeting that has been saved in db read format |
| Get | /api/meetings/:id/users | Yes | Get the attendees of a Meeting | An Array of User objects |
| Get | /api/users | Yes | Get the users of the app | An Array of User Objects |

## Response Formats

POST `/api/auth/login`

```
res STATUS 200
{
  "message": "login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpy"
}

res STATUS 400
{
  "message": "No user found. Please try again?"
}

res STATUS 500
{
  "message": "Ah no.  We been notified."
}
```

POST `/api/auth/register`

```
res STATUS 200
{
  "message": "registration successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpy"
}

res STATUS 400
{
  "message": "Ah, an error occured.  Did you put in valid information?"
}

res STATUS 500
  {
  "message": "error occured.  Whoops!"
  }
```

GET `/api/meetings`

```
res STATUS 200
[
  {
    "name": "Introduction to API",
    "date": 04052018,
    "start_time": 800,
    "end_time": 900,
    "attendees": [
      {name: "bob", wage_per_hour: 10, salary: 20000},
      {name: "alice", wage_per_hour: 10, salary: 20000},
      {name: "eve", wage_per_hour: 10, salary: 20000}
      {name: "chris", wage_per_hour: 10, salary: 20000}
      ]
  }
]    
res STATUS 500
  {
  "message": "error occured.  Whoops!"
  }
```

POST `/api/meetings/`

```
res STATUS 200
  {
    "name": "Followup on API",
    "date": 06052018,
    "start_time": 800,
    "end_time": 900,
    "attendees": [
      {name: "bob", wage_per_hour: 10, salary: 20000},
      {name: "alice", wage_per_hour: 10, salary: 20000},
      {name: "eve", wage_per_hour: 10, salary: 20000}
      ]
  }
res STATUS 500
  {
  "message": "error occured.  Whoops!"
  }
```

GET `/api/meetings/2/users`
```
res STATUS 200
[
  {id: 1, name: "bob", wage_per_hour: 10, salary: 20000},
  {id: 2, name: "alice", wage_per_hour: 10, salary: 20000},
  {id: 3, name: "eve", wage_per_hour: 10, salary: 20000}
]
res STATUS 400
{
  "message": "Sorry, an error occured.  Did you put in a valid ID?"
}

res STATUS 500
  {
  "message": "error occured.  Whoops!"
  }
```

GET `/api/users`

```
res STATUS 200
[
  {id: 1, name: "bob", wage_per_hour: 10, salary: 20000},
  {id: 2, name: "alice", wage_per_hour: 10, salary: 20000},
  {id: 3, name: "eve", wage_per_hour: 10, salary: 20000}
  {id: 4, name: "chris", wage_per_hour: 10, salary: 20000}
]

res STATUS 500
{ 
  "message": "Whoops!  An Error Occured!"
}
```



    



## DB (Server Side)
  There should be three tables for MVP

### Users
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | user_name | String |
  | first_name | String |
  | last_name | String |
  | hash | text |

### Meetings
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | meeting_name | String |
  | time | Timestamp |
  | attendees | integer |
  | cost | Decimal |

### Attendees (Join Table M2M)

  Many Users attend Many Meetings

 | Column Name | Data Type |
 | --- | --- |
 | user_id | Integer |
 | meeting_id | Integer |

 ---
 

## Setup

Run the following commands in your terminal:

```sh
npm install (or yarn install)
knex migrate:latest
knex seed:run

```

  `npm run dev` || `yarn dev` for bundling, watch and nodemon

  `npm start` only runs server (setup for heroku)


## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

`npm run h:deploy` will push your local master branch to your heroku app

`npm run h:migrate` will run your knex migrations on your deployed heroku app

`npm run h:seed` will run your seeds on your deployed app

If ever you need to rollback, you can also just use `npm run h:rollback`


### Ta-Da!
Your app should be deployed!
