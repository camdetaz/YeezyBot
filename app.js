#!/usr/bin/env nodejs
const express = require('express')
const app = express()

app.post('/', function (req, res) {
  var quotes = ["When you’re the absolute best, you get hated on the most. - Kanye",
    "My greatest pain in life is that I will never be able to see myself perform live. -Kanye",
    "I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle. -Kanye",
    "You should only believe about 90 percent of what I say. As a matter of fact, don’t even believe anything that I’m saying at all. I could be completely fucking with you, and the world, the entire time. -Kanye",
    "I don't even listen to rap. My apartment is too nice to listen to rap in.  -Kanye",
    "I'm a pop enigma. I live and breathe every element in life. I rock a bespoke suit and I go to Harold's for fried chicken. It's all these things at once, because, as a taste maker, I find the best of everything. -Kanye",
    "I jog in Lanvin. -Kanye",
    "Visiting my mind is like visiting the Hermès factory. Sh*t is real. -Kanye",
    "Fur pillows are hard to actually sleep on. -Kanye",
    "Having money isn\'t everything, not having it is. -Kanye",
    "Success is the best revenge. -Kanye",
    "The prettiest people do the ugliest things. -Kanye",
    "George Bush doesn't care about black people. -Kanye",
    "Nothing in life is promised except death. -Kanye",
    "My message isn't perfectly defined. I have, as a human being, fallen to peer pressure. -Kanye",
    "Fashion breaks my heart. -Kanye",
    "I don't know what's better; gettin' laid or gettin' paid. -Kanye",
    "Kate Upton ain’t Marilyn Monroe, Kim is Marilyn Monroe, you know that. -Kanye",
    "As a man I am flawed, but my music is perfect. -Kanye",
    "Look at Gaga. She’s the creative director of Polaroid. I like some of the Gaga songs. What the f*** does she know about cameras? -Kanye",
    "I've reached a point in my life where my Truman Show boat has hit the painting. -Kanye",
    "I was wearing like, a Juicy Couture men’s polo shirt. We weren’t there, like, ready for war. -Kanye",
    "Restraining order, can't see my daughter, her mother, brother, grandmother hate me in that order. -Kanye",
    "If I fuck this model, and she just bleached her asshole, and I get bleach on my t-shirt, imma feel like an asshole. -Kanye",
    "And what's a black beatle anyway, a fucking roach. I guess that's why they got me sitting in fucking coach. -Kanye",
    "Your titties, let em out, free at last. Thank God almighty, they free at last! -Kanye",
    "The plan was to drink until the pain was over, but what's worse, the pain or the hangover? -Kanye",
    "Mayonnaise colored Benz, I push Miracle Whips. -Kanmye",
    "I treat the cash the way the government treats AIDS - I won't be satisfied until all my niggas get it, get it? -Kanye",
    "No more drugs for me, pussy and religion that's all I need. -Kanye",
    "Head of the class and she just won a swallowship. -Kanye",
    "You see there's leaders, and there's followers, but I'd rather be a dick than a swallower. -Kanye"
  ];
  var rand = Math.floor(Math.random()*quotes.length);

  res.json({
    "color": "green",
    "message": quotes[rand],
    "notify": false,
    "message_format": "text"
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
