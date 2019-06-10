---
layout: default
title:  "Writing my first web application."
date:   2019-06-09 10:44:00 -0700
categories: fullstack development-process webdev
---
<br>
#### What is this stuff anyway?
Web development. Wow. I have to admit I was unprepared. I live in the embedded world -
regularly programming in assembly, with the highest level language I really touch being C++.
I always viewed it as some fuzzy, in-between melding of design and programming. Which is entirely
true. It takes a huge breadth of skills to be good at this, from backend server knowledge to actually
having an eye for design and astetics. I didn't quite expect the level of difficulty involved.

The best part though is just how massive and inclusive the industry is. For a simple problem,
there were _hundreds_ of people with solutions. And they were all so nice! It's an unfortunate
side of tech that some niche areas can be extremely gatekeeping and unfriendly to newcomers.
But I never noticed that here - it was a wonderful community to step into.

<br>
#### My first real application.
For my WebDev class at PSU we had a term project - build a fullstack web application. As an
undergrad I was only required to create a frontend but I (luckily) paired with a grad student
who needed to write a backend, and we created a fully functional web app.

We made a multiplayer [game of Go][go-game], the ancient board game. Our implementation can be
found [hosted on Heroku here][game-hosted]. Our main stack (a word which still means [call stack][call-stack]
to me) is based on [Node.js][node], using the [Express][express] and [Socket.io][socket] frameworks. For
front-end prettify-ing, I also used [Bootstrap] and some [jQuery][jquery].

<br>
#### Troubles
Aside from using a new set of languages, the most difficulty I had was actually around socket and
asynchronous calls. I've worked in event-driven environments before, but I feel like I had a better
understanding there of _when_ my events would get called and _how_. An interrupt service routine
happens on a voltage change. An RTOS task happens when the scheduler raises it. This is such a
larger space and has more complex interactions that I didn't correctly plan for my async calls
getting called, well, at **any** time and by **any** user.

That said, once I got those interactions nailed down and game states into a good event-flow, the game really
came together.

<br>
#### Future Work
Moving forward there's a few things I'd like to clean up. Right now the game only holds state
for two players, and if either of them disconnects, all game state is lost and it forcibly
resets. I would like a save and load game button that allows someone to save and load the game
board across multiple sessions. This could be implemented with a single file download.

Moving onto more complex changes, I would like to support more than two players at once. This
could be done with node Passport. Tying two player's state together and leaving new connections
open to new games could be done by passport ID and a "search for available players" button.

Taking that a step further, players could have permanent server-side accounts that stored game
history, win/loss rates, and gave a central "meeting area" where all available players were
listed. A bit like a game lobby, where everyone could chat and choose their opponent.

<br>
#### Conclusion
There's always a lot to improve with these things, and in general it could be an ever evolving
project. But I'm happy with what we did. This came out way better than I expected, and taught
me so much about the world of web based development.

[go-game]: https://en.wikipedia.org/wiki/Go_(game)
[game-hosted]: https://fullstack-project-go.herokuapp.com/
[call-stack]: https://en.wikipedia.org/wiki/Call_stack
[express]: https://expressjs.com/
[socket]: https://socket.io/
[bootstrap]: https://getbootstrap.com/
[node]: https://nodejs.org/en/
[jquery]: https://jquery.com/
