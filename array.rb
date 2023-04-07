ulam = ["adobo", "sinigang", "tinola"]
bigas = ["dinorado", "jasmin", "malagkit"]
mema = ['kahitAno', true, bigas]

(1..10)
#.to_a = to array
numm = (1..10).to_a


puts "Gusto ko ng #{ulam[2]} at ng #{bigas[2]} mong sipon"

# Adding something to an array
mema << "One more thing..."
puts "This is things now: #{mema}"

# Turning a sentence into an array of words
sentence = "Ain't nobody got time for that"
words = sentence.split
shuffledWords = words.shuffle

puts "The words are: #{words}"
puts "The shuffled words are: #{shuffledWords}"
