puts "What's your name?"

name = gets.chomp

# .chomp removes /n of the input value

puts "How old are you?"

age = gets.chomp.to_i

# .to_i converts input value string into integer

puts "Hello #{name}! So you're already #{age}, it is nice to hear that."