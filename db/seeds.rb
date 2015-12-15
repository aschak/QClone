# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


5.times do
  name = Faker::Name.name
  pass_digest = Faker::Internet.password
  User.create!(username: name, password_digest: pass_digest )
end

10.times do
  question = Faker::Hacker.say_something_smart
  author_id = rand(1..5)
  Question.create!(title: question, author_id: author_id)
end
