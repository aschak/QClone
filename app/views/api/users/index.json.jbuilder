json.array! @users do |user|
  json.partial! user, partial: './user'
end
