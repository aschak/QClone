json.extract! question, :title, :body, :id, :author_id, :created_at


json.answers question.answers do |answer|
  json.body answer.body
  json.author_id answer.author_id
  json.author answer.author.username
  json.question_id answer.question_id
  json.id answer.id
  json.created_at answer.created_at

  json.comments answer.comments do |comment|
    json.body comment.body
    json.author_id comment.author_id
    json.author comment.author.username
    json.id comment.id
    json.created_at comment.created_at

  end

end

json.author do
  json.username question.author.username
end
