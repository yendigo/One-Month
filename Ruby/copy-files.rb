#copy files

print "What's the name of the file you want to copy? "

filename = gets.chomp

file = open(filename).read


print "Where do you want to copy it to? "
newFilename = gets.chomp

newFile = open(newFilename, 'w')

newFile.write(file)

newFile.close