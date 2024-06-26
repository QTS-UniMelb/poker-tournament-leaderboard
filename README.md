# Poker Tournament Leaderboard Display

Currently hosted on netlify.com/

### How to Start Web App Locally

* Download node from https://nodejs.org/en
* Download or clone this Git Repo locally
* Navigate to the repo folder in your Command Prompt / Terminal
* Run ``` console npm install ```
* Run ``` console npm start ```
* The web app should run locally on port 3000 (or as specified)

### How to update Leaderboard
* The leaderboard files (in .xlsx) need to be put in the public/res/leaderboards/ directory.
* To convert the leaderboard file we keep online to the right format, run src/helper_functions/format_leaderboard.py
* This should produce one or more files (one for each division), that you can paste into the public/res/leaderboards/ directory.
* Make sure to change the Round Number and/or any other info in the src/config/config.json file

### Config file structure

Almost all required changes can be made using the src/config/config.json file

```yaml
{
"title": "QTS x SIG UniMelb Poker Tournament", \\ displayed on top of leaderboard
"subtitle": "Round 1", \\ Displayed under title
"logo": "./res/club-logos/logo2.png", \\ Club / Host Logo
"circular_logo": true, \\ Makes the Club / Host logo circular
"leaderboards": [
{
"file": "./res/leaderboards/Beginner.xlsx",
"division": "Beginner"
},
{
"file": "./res/leaderboards/Advanced.xlsx",
"division": "Advanced"
}
], \\ the leaderboard files in xlsx (important!) format. These can be generated using src/helper_functions/format_leaderboard.py
"participants_per_page": 11, \\ number of rows per page
"time_per_page": 10, \\ time (in seconds) per each page / slide
"blinds": [
{ "amount": "$100 / $200", "duration": 30 },
{ "amount": "$200 / $400", "duration": 30 },
{ "amount": "$500 / $1000", "duration": 30 },
{ "amount": "$1000 / $2000", "duration": 30 }
], \\ blind amounts and durations. duration overrides blind_duration
"blind_duration": 30, \\ default duration if duration in blinds not specified
"sponsor_logos": ["./res/sponsor-logos/SIG.png"], \\ path to (zero or more) sponsor logo files
"sponsor_posts": [
"./res/sponsor-posts/sig-1.png",
"./res/sponsor-posts/sig-2.png",
"./res/sponsor-posts/sig-3.png"
], \\ path to (zero or more) sponsor post files
"sponsor_post_time": 10, \\ time (in seconds) to display each sponsor post
"sound_on": true, \\ sound played at each blind's change
"sound_file": "./res/sound/mixkit-airport-announcement-ding-1569.wav", \\ path to sound file
"final_mode": false \\ if true, displays just the timer / blinds, and not the leaderboard
}
```

##### Note: all files apecified here should be kept in the public folder

#### Made for the UniMelb Quantitative Trading Society by Hamza Qureshi. 
