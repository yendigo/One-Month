person = {name: "Yen", age: 21, eyes: "black"}

# access parts of a hash using a :symbol 
puts person[:name]
puts person[:age]
puts person[:eyes]

person.each do |key, value|
    puts "Your #{key} is #{value}"
end