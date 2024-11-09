

function randomText(){

    var userName = ["― Oscar Wilde" , "― Frank Zappa" , "― Mahatma Gandhi" , "― Mae West" , "― Robert Frost"];
    var text = [`       
        “Be yourself; everyone else is already taken.”`,

        `“So many books, so little time.”` ,

        `“Be the change that you wish to see in the world.”`,

        `“You only live once, but if you do it right, once is enough.”`,
        
        `“In three words I can sum up everything I've learned about life: it goes on.”`];
    
    
    var num = Math.floor( Math.random() * userName.length )
    
   
   document.getElementById("dimo").innerHTML = text[ num ];
   document.getElementById("authorOutput").innerHTML = userName[ num ];

}




