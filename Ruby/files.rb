#reading and writing a file

print "What's the filename? "

filename = gets.chomp

file = open(filename,'a+')

#modes: r,r+,w,w+,a+

print "What should I put in the file? "
line1 = gets.chomp

print "What's the second thing I should put in the file? "
line2 = gets.chomp


file.write(line1)
file.write("\n")
file.write(line2)

file.close