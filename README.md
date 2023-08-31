# Poker Tournament Leaderboard Display

Currently hosted on netlify.com/

#### Almost all required changes can be made using the src/config/config.json file

### Config file structure

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
