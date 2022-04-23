# Pre-work - *Memory Game*

**Lightning Fast** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Niayesh Nasiri**

Time spent: **5** hours spent in total

Link to project: [https://glitch.com/edit/#!/wary-cake-hourglass](https://glitch.com/edit/#!/wary-cake-hourglass)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Volume slider that allows the user to change the volume at any point in the game.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://i.imgur.com/1qDWrI4.gif)
![](https://i.imgur.com/BEF0wJk.gif)
![](https://i.imgur.com/GblpYSC.gif)
![](https://i.imgur.com/fQQHjS2.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.\
&nbsp; &nbsp; &nbsp; &nbsp; I used Stack Overflow and HTML/CSS documentation sites when I was confused aboout specific elements (like how to show emojis, 
and how to get a range's value for the volume slider).

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words).\
&nbsp; &nbsp; &nbsp; &nbsp; Implementing the timer was the most challenging thing about the project for me, since I ran into several bugs and hard implementation 
choices. Each bug fix seemed to reveal another bug! Generally, I overcame this by testing thoroughly and debugging persistently.\
&nbsp; &nbsp; &nbsp; &nbsp; One of the first difficulties was that the timer would start when clue playback started, instead of after clue playback. I fixed this 
by calling setInterval inside a setTimeout call (line 71). That fix caused another bug, where the end button wouldn't stop the timer if 
the timeout wasn't finished (i.e. if clue playback was still happening when the end button was pressed). It took a bit to realize 
what the bug was, since at first I didn't understand how to reliably replicate it, and then it also took some time to think of a fix. I ended 
up using the global boolean variable gamePlaying to check for this case, adding it to the "if" statement in the timer function (line 75).\
&nbsp; &nbsp; &nbsp; &nbsp; This caused another bug where sometimes if the end button was pressed during clue playback, or if the user made a wrong guess, the loseGame 
alert showed up, and when the user pressed "OK", it would pop up again immediately multiple times. Again, debugging this was tricky, and I still haven't figured out 
the precise cause of the bug or how to always replicate it, but I think I fixed it completely by adding an "else if" clause to do nothing if the game was over
(!gamePlaying, line 77), and clearing the timeout for the timer as well as the interval every time the timer is reset.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)\
&nbsp; &nbsp; &nbsp; &nbsp; I want to learn more about UI in general. Specifically, are there any good rules of thumb for making a website aesthetically pleasing?  
For this submission, I did a lot of trial-and-error and just picked what looked good to me after playing around with a few options. It would be helpful to know 
some design principles for website design. I'd also like to learn how to use popular libraries/frameworks like React.js and Bootstrap.\
&nbsp; &nbsp; &nbsp; &nbsp; I'd also love to learn more about incorporating audio into web development! This submission was my first time doing anything sound-related for a web app and 
playing around with the pitch values was really fun, but I still don't fully understand the code snippet relevant to sound.\
I'd also like to learn more about back-end related things:
    * The differences between client-side and server-side, and if/how coding should be different for the two
    * How can javascript handle more complex or "hefty" data structures/logic?
    * How to handle live inputs from different users on different computers, especially if those two user's data interact in some way (like an online chess game, a collaborative document on Google Docs, etc)

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)\
Small fixes:
    * Test out the timer to more thoroughly debug edge cases
    * Figure out how to get the buttons to stay in a 2x3 grid when page is resized, and how to get the start/end button and the volume slider on the same 
      horizontal line, but still on opposite sides of the page.\
Possible new features:
    * Add some preset clue patterns that correspond to different tunes (eg Twinkle Twinkle Little Star).
    * Add usernames, and save different usernames and corresponding best times in a leaderboard
    * Add a settings menu where user can adjust the length of the clue pattern, how much the clue playback speeds up, the number of buttons, etc

## Interview Recording URL Link

[My 5-minute Interview Recording](https://berkeley.zoom.us/rec/share/LD54VFnKLpnTwrAyGbzjXQlgNtqV5PEAAYdJinw1d8U_lkbflrauwRkLn2X4LQXt._zXEjN8kc8zZ_0XZ?startTime=1650677933000)


## License

    Copyright Niayesh Nasiri

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.