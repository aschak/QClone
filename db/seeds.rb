# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


5.times do
  name = Faker::Name.name
  password = Faker::Internet.password
  User.create!(username: name, password: password )
end

User.create!(username: 'Guest_Seeker', password: 'AlwaysSeeking')


15.times do
  question = Faker::Hacker.say_something_smart
  body = Faker::Lorem.paragraph(5)
  author_id = rand(1..6)
  Question.create!(title: question, author_id: author_id, body: body)
end

20.times do
  answer = Faker::Lorem.paragraph(2)
  author_id = rand(1..5)
  question_id = rand(1..10)

  Answer.create!(
    body: answer,
    author_id: author_id,
    question_id: question_id
  )
end

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

5.times do
  tag_name = Faker::Team.creature

  Tag.create!(
    tag_name: tag_name
  )
end


i = 1
while i < 15

  tag_id = rand(1..5)
  question_id = i

  Tagging.create!(
  question_id: question_id,
  tag_id: tag_id
  )

  i += 1
end


5.times do
  tag_id = rand(1..5)
  question_id = rand(1..15)

  Tagging.create!(
    question_id: question_id,
    tag_id: tag_id
  )

end
