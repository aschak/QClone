json.extract! comment, :body, :id, :author_id, :created_at

json.author do
  json.username comment.author.username
end
