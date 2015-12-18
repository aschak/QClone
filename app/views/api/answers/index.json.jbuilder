json.array! @answers do |answer|
  json.partial! answer, partial: './answer'
end
