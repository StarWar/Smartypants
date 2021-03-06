json.id annotation.id
json.body annotation.body
json.referent_start_index annotation.referent_start_index
json.referent_end_index annotation.referent_end_index
json.author annotation.author
json.track annotation.track

json.comments annotation.comments do |comment|
  json.partial! 'api/comments/comment', comment: comment
end

json.score annotation.tally_score
