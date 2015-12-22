json.array! @tags do |tag|
  json.partial! tag, partial: './tag'
end
