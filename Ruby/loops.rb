kulay = ["asul", "berde", "kahel", "puti"]

kulay.each do |mema|
    puts "ang kulay na nais mo ay #{mema}"
end

(1..10).each do |number|
    puts "#{number} squared is #{number * number}"
end
  
(1..10).each { |number| puts "#{number} squared is #{number * number}" }