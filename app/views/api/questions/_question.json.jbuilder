json.extract! question, :title, :body, :id, :author_id, :created_at


json.answers question.answers do |answer|
  json.body answer.body
  json.author_id answer.author_id
  json.author answer.author.username
  json.created_at answer.created_at
end

json.author do
  json.username question.author.username
end
