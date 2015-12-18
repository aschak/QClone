json.extract! answer, :body, :id, :author_id, :created_at


json.author do
  json.username answer.author.username
end
