json.extract! answer, :body, :id, :author_id, :created_at, :comments, :question_id

json.comments answer.comments do |comment|
  json.body comment.body
  json.author_id comment.author_id
  json.id comment.id
  json.author comment.author.username
  json.created_at comment.created_at
end


json.author do
  json.username answer.author.username
end
