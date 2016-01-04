# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


#Create Users, starting with guest account

User.create!(username: 'Guest_Seeker', password: 'AlwaysSeeking')

6.times do
  name = Faker::Name.name
  password = Faker::Internet.password
  User.create!(username: name, password: password )
end

#Create Tags
Tag.create!(tag_name: "sports") #1
Tag.create!(tag_name: "politics") #2
Tag.create!(tag_name: "technology") #3
Tag.create!(tag_name: "life") #4
Tag.create!(tag_name: "food") #5
Tag.create!(tag_name: "music") #6



#1
Question.create!(
  title: "What are Arsenal’s chances of winning the Premier League?",
  body: "Arsenal FC have had an outstanding run of form thus far in this season but they are traditionally known to fall into a second half slump. This has been a tumultous season for everyone so far however, with only Arsenal and Manchester City looking like real title contenders. Given the setbacks suffered by Manchester United and Chelsea, it looks like Arsenal need only to best City to have a crack at the title.",
  author_id: rand(1..7)
)

Answer.create!(
  body: "It definitely does look that way but you have to give credit to City’s depth. They have so much more talent on their bench! When faced with an injury crisis they stand a much better chance of lasting longer than Arsenal under the same conditions.",
  author_id: rand(1..7),
  question_id: 1
)

Answer.create!(
  body: "They have the best chance of anyone in the league right now, if Cazorla and Sanchez can make an impact when they return from injury then I think Arsenal has all they need to clinch the title this season. ",
  author_id: rand(1..7),
  question_id: 1
)

Tagging.create!(question_id: 1, tag_id: 1)

#2
Question.create!(
  title: "What are computer hackers really capable of doing?",
  body: "Hollywood has done an immense job of convincing me that computer hackers can access essentially any of the information about a person, from their phone logs to emails to bank accounts. More so, they seem to be capable of single handely taking down government or corporate security systems with relative ease. Let’s clear up the stereotype, what can they really do?",
  author_id: rand(1..7)
)

Answer.create!(
  body: "One thing most people don't suspect is Rogue Access Points, for wifi you set up an access point using your own insecure protocols and you put it at a mall and call it 'Free wifi or 'Starbucks' and people when connect you can steal session cookies, personal information etc.",
  author_id: rand(1..7),
  question_id: 2
)

Tagging.create!(question_id: 2, tag_id: 3)


#3

Question.create!(
  title: "What exactly are the 1% doing?",
  body: "Bernie Sanders has repeatedly mentioned the top 1% of Americans across his entire presidential campaign. I’m still confused about what exactly happened in 2008, what the role of the 1% was, and what the average American should do about it. ",
  author_id: rand(1..7)
)

Tagging.create!(question_id: 3, tag_id: 2)

Answer.create!(
  body: "The important thing is to know what you’re looking for when you mention the 1%. A CEO of a major corporation can make $10 million in yearly salary, but that’s still taxable. The trouble with the 1% is that there are a lot of ways to acquire wealth that do not qualify as taxable income as far as the IRS is concerned. Bonuses are a prime example of this. ",
  author_id: rand(1..7),
  question_id: 3
)

Answer.create!(
  body: "I think the biggest issue Sanders has with the 1% is the way many of them influence government through campaign contributions. Through a variety of loopholes, exemptions, and laws, the 1% is employing lobbyists to influence Congress for their own benefit.",
  author_id: rand(1..7),
  question_id: 3
)

#4

Question.create!(
  title: "Why isn’t Election Day a holiday in the United States?",
  body: "Every time Americans go to the polls, we are celebrating our continued success as a democracy yet the government doesn’t recognize this celebration as a holiday? Yes we have the 4th of July but that is more a celebration of our independence from the British. ",
  author_id: rand(1..7)
)

Tagging.create!(question_id:4, tag_id: 2)
Tagging.create!(question_id: 3, tag_id: 4)

Answer.create!(
  body: "Well for one, businesses aren’t required to shutdown on federal holidays. Most businesses that close on national holidays are more white-collar businesses that have employees who can afford to miss some time off work. Places like hospitals, restaurants, retail shops, etc don’t usually close for holidays and their employees can’t afford to take the day off, even to vote.",
  author_id: rand(1..7),
  question_id: 4
)

Answer.create!(
  body: "What purpose would that help serve though? If you want to make voting at the polls more accessible to the American voter, voting early through an absentee-ballot is the way to go. ",
  author_id: rand(1..7),
  question_id: 4
)

#5

Question.create!(
  title: "What is the best way to prevent wrist injury while snowboarding?",
  body: "I often hurt myself while snowboarding, I’ve suffered multiple wrist injuries on the slopes - is there anyway to protect my wrists specifically? ",
  author_id: rand(1..7)
)

Tagging.create!(question_id: 5, tag_id: 1)
Tagging.create!(question_id: 5, tag_id: 4)

Answer.create!(
  body: "Wear wrist pads! Find wrist pads that are made specifically for snowboarding. There are even special gloves you can find that have a wrist protector built into the lining of it. ",
  author_id: rand(1..7),
  question_id: 5
)

Answer.create!(
  body: "This may sound counterintuitive, but learn how to fall properly. When you lose your balance on a snowboard, the body’s natural response is to “catch” yourself on the ground with your hands. This is how most slope injuries occur. Instead, just hold out your hands in closed fists and bring in your arms close to your chest as you fall forward on your knees. ",
  author_id: rand(1..7),
  question_id: 5
)


#6

Question.create!(
  title: "Why does resetting a malfunctioning router cause it to work again?",
  body: "I would imagine that router manufacturers would be able to track down this sort of error but I’ve found it to be an issue with every brand I’ve owned. ",
  author_id: rand(1..7)
)

Tagging.create(question_id: 6, tag_id: 3)
Tagging.create(question_id: 6, tag_id: 4)

Answer.create!(
  body: "This could be an issue with your routers overheating. Make sure you’re positioning them in a cool dry place that has plenty of airflow around it. I used to suffer from the same problem!",
  author_id: rand(1..7),
  question_id: 6
)

Answer.create!(
  body: "A lot of cheaper quality routers can be prone to memory leaks in the firmware. It’s unfortunate but the only solution I know of is to invest in a higher end router. ",
  author_id: rand(1..7),
  question_id: 6
)

#7

Question.create!(
  title: "Who are some feel good hip hop artists?",
  body: "Hip hop and rap seem to get such a bad reputation and affiliations with violence, are there any artists out there who don’t exemplify this stereotype?",
  author_id: rand(1..7)
)

Tagging.create!(question_id: 7, tag_id: 6)

Answer.create!(
  body: "Absolutely! Brother Ali is one of my favorites. He’s known for his positive vibes and message, not to mention some incredible skill on the microphone! ",
  author_id: rand(1..7),
  question_id: 7
)

Answer.create!(
  body: "Murs or Del the Funky Homosapien. Both have very unique styles that don’t ever really touch on gang violence or drugs. Both of them have very funky sounds in their productions and are pretty funny on top that as well. ",
  author_id: rand(1..7),
  question_id: 7
)

#8

Question.create!(
  title: "How do you prevent stir-fried rice from coming out too dry?",
  body: " I love the flavor that comes from ground spices versus diced/minced ingredients, but whenever I try making fried rice with them, the meat and vegetables always come out tasting dry.",
  author_id: rand(1..7)
)

Tagging.create!(question_id: 8, tag_id: 5)
Tagging.create!(question_id: 8, tag_id: 3)

Answer.create!(
body: "I would suggest investing in a wok to use for making your stir fry, but first try cooking your meat and vegetables separately in small batches to add at the end. Rice is very absorbent and can soak in the juices from your other ingredients. ",
author_id: rand(1..7),
question_id: 8
)

#9

Question.create!(
  title: "Who is the world’s best athlete?",
  body: "We idolize our athletes over a variety of both team and individual sports. But who has been the best at what they do? This can apply to individual minded sports, like sprinting and cycling, or team sports like football and cricket. ",
  author_id: rand(1..7)
)

Tagging.create!(question_id: 9, tag_id: 1)

Answer.create!(
  body: "I'd say Lebron James. Even in an off year for him, he managed to change the landscape of the NBA by bringing the Cavs into the fold of top teams while the Heat suffered at his absence. ",
  author_id: rand(1..7),
  question_id: 9
)

Answer.create!(
  body: "Lionel Messi. Bar none. He’s won everything he is capable of winning bar the World Cup. More so, he’s won all these titles multiple times! Just watch a Barcelona game where Messi isn’t playing versus when he is. He completely changes their style of play with his tactical presence and skill. ",
  author_id: rand(1..7),
  question_id: 9
)


#10

Question.create!(
  title: "Could humans today survive in the Jurassic Period?",
  body: "I was reading Bradbury’s A Sound of Thunder when I got to thinking. If a group of people were sent back in time 60 million years, could they make it and even build up a civilization?",
  author_id: rand(1..7)
)

Tagging.create!(question_id: 10, tag_id: 1)
Tagging.create!(question_id: 10, tag_id: 3)

Answer.create!(
  body: "This would depend heavily upon on where you were dropped and what time of year it was. If you sent people back to modern day Canada during the winter, then it’s doubtful they would get very far. But people in the tropics might stand a chance at thriving, despite having to face a whole new range of flora and (potentially aggressive) fauna. ",
  author_id: rand(1..7),
  question_id: 10
)

30.times do
  comment = Faker::Hacker.say_something_smart
  author_id = rand(1..5)
  answer_id = rand(1..15)

  Comment.create!(
    body: comment,
    author_id: author_id,
    answer_id: answer_id
  )
end


User.all.each do |user|
  tag_id = rand(1..5)
  user_id = user.id

  ProfileTag.create!(
    tag_id: tag_id,
    user_id: user_id
  )

end
