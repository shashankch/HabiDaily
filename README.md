# HabiDaily

A simple habit tracking application using Node.Js,Express and MongoDB.

## Functionalities:

#### Home Page:

- Add habits with short description.
- display all added habits with related Info.
- displays count of particular habit followed in a week.
- delete particular habit.

#### Weekly Progress Page:

- display all habits added along with date and month.
- display status of each habits:"None","Not Done","Done" for previous 6 days.
- update status of habits for previous 6 days.

## Project Structure:

```
.
├── README.md
├── assets
├── config
│   └── mongoose.js
├── controllers
│   ├── home_controller.js
│   └── week_controller.js
├── index.js
├── models
│   └── detail.js
├── package-lock.json
├── package.json
├── routes
│   ├── index.js
│   └── track.js
└── views
    ├── home.ejs
    ├── layout.ejs
    └── week.ejs
```

## Steps to run locally:

```
1. git clone https://github.com/shashankch/HabiDaily.git

2. cd HabiDaily

3. npm install

4. Install MongoDB and run

5. npm start

```

#### Your application should now be running on [localhost:8000](https://github.com/shashankch).
