def printTwo(thing, anotherThing)
    puts "ulam 1: #{thing}, ulam 2: #{anotherThing}"
end

printTwo("siomai","hotdog")

def love(myGirlfriend)
    puts "I love you #{myGirlfriend}"
end

love("Christine")

def add(a,b)
    puts "Adding #{a} and #{b}..."
    return a + b
end

def sub(a,b)
    puts "Subtracting #{a} and #{b}..."
    return a - b
end

def mul(a,b)
    puts "Multiplying #{a} and #{b}..."
    #return a * b
end

def div(a,b)
    puts "Dividing #{a} and #{b}..."
    return a / b
end


height = add(12,34)
weight = sub(59,4)
iq = mul(9,11)

puts "Your height is #{height}, your weight is #{weight}, and your iq is #{iq}"