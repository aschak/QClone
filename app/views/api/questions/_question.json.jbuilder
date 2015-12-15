json.extract! question, :title, :body


json.author do
  json.username question.author.username
end
