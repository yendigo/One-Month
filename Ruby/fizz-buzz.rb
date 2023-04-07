(1..100).each do |loop|
    if (loop % 3 == 0) && (loop % 5 == 0)
        # modulo (%) tells what's the remainder when you divide two numbers
        # in order to know that multiplies of 3 and 5, use module so if the remainder is 0, then it is divisible by that number
         # divisible by 3 and 5
        puts "FizzBuzz"
    elsif loop % 3 == 0
        # divisible by 3
        puts "Fizz"
    elsif loop % 5 == 0
        # divisible by 5
        puts "Buzz"
    else
         # display the number if it is not divisible by 3 or 5 or 3 and 5
        puts loop
    end
end