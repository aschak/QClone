json.extract! user, :username, :id, :tags


json.questions user.questions do |question|
  json.title question.title
  json.id question.id
end

json.answers user.answers do |answer|
  json.question_title answer.question.title 
  json.question_id answer.question_id
end
