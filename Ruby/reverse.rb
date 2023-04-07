puts "Please input your name and I will reverse it!"

# name = gets.chomp

# puts name.reverse

def capReverse(text)
    cap = text.upcase
    rev = cap.reverse
    return rev
end

puts capReverse("sinaing")