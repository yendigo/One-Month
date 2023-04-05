// PUSH - add new elements to an array
        
document.querySelector(".input").addEventListener('keyup',function(e){
    var names = ['Yen <br>', 'Christine <br>']; 
    var input = document.querySelector("input").value;
    var add = names.push(input); 
    var list = document.querySelector("h4");    
    console.log(e);

    if(e.which === 13){

        var num = names.length;
        
        
        for(i=0; i<num;i++){

            list.innerHTML = names + "<br>";
        }
    
    }
    else if(e.which===8){

        // POP - remove last element of an array   

        
        var remove = names.pop(input);
        list.innerHTML = names;

    }

    else if(e.which===20){

        // SHIFT - removes the first element of an array  

        var first = names.shift(input);
        list.innerHTML = names;
    }
    
    else if(e.which===16){

        // REVERSE - reverses the array
        var first = names.reverse(input);
        list.innerHTML = names;
    }
});