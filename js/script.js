var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var item5 = document.getElementById("item5");
var item6 = document.getElementById("item6");
var item7 = document.getElementById("item7");
var item8 = document.getElementById("item8");
var item9 = document.getElementById("item9");
var info = document.getElementById("info");

var allItems = [item1, item2, item3, item4, item5, item6, item7, item8, item9];

function choose(){
    var flag = 0;

    allItems.map((v)=>{
        v.innerHTML = "";
        v.style.color = "white";
        v.style.pointerEvents = 'auto';
        
        v.addEventListener('click',()=>{
            
            if(flag == 0)
            {
                v.innerHTML = "0";
                v.style.pointerEvents = 'none';
                flag = 1;
            }
            else{
                v.innerHTML = "X";
                v.style.pointerEvents = 'none';
                flag = 0;
            }
            
            // Conditions for 0
            if(item1.innerHTML == "0" && item2.innerHTML == "0" && item3.innerHTML == "0"){
                item1.style.color = "#2fc3ff";
                item2.style.color = "#2fc3ff";
                item3.style.color = "#2fc3ff";
                info.innerHTML = "0 is winner";
                isWin();
            }
            else if(item4.innerHTML == "0" && item5.innerHTML == "0" && item6.innerHTML == "0"){
                item4.style.color = "#2fc3ff";
                item5.style.color = "#2fc3ff";
                item6.style.color = "#2fc3ff";
                info.innerHTML = "0 is winner";
                isWin();
            }
            else if(item7.innerHTML == "0" && item8.innerHTML == "0" && item9.innerHTML == "0"){
                item7.style.color = "#2fc3ff";
                item8.style.color = "#2fc3ff";
                item9.style.color = "#2fc3ff";
                info.innerHTML = "0 is winner";
                isWin();
            }
            else if(item1.innerHTML == "0" && item4.innerHTML == "0" && item7.innerHTML == "0"){
                item1.style.color = "#2fc3ff";
                item4.style.color = "#2fc3ff";
                item7.style.color = "#2fc3ff";
                info.innerHTML = "0 is winner";
                isWin();
            }
            else if(item2.innerHTML == "0" && item5.innerHTML == "0" && item8.innerHTML == "0"){
                item2.style.color = "#2fc3ff";
                item5.style.color = "#2fc3ff";
                item8.style.color = "#2fc3ff";
                info.innerHTML = "0 is winner";
                isWin();
            }
            else if(item3.innerHTML == "0" && item6.innerHTML == "0" && item9.innerHTML == "0"){
                item3.style.color = "#2fc3ff";
                item6.style.color = "#2fc3ff";
                item9.style.color = "#2fc3ff";
                info.innerHTML = "0 is winner";
                isWin();
            }
            else if(item1.innerHTML == "0" && item5.innerHTML == "0" && item9.innerHTML == "0"){
                item1.style.color = "#2fc3ff";
                item5.style.color = "#2fc3ff";
                item9.style.color = "#2fc3ff";
                info.innerHTML = "0 is winner";
                isWin();
            }
            else if(item3.innerHTML == "0" && item5.innerHTML == "0" && item7.innerHTML == "0"){
                item3.style.color = "#2fc3ff";
                item5.style.color = "#2fc3ff";
                item7.style.color = "#2fc3ff";
                info.innerHTML = "0 is winner";
                isWin();
            }
            
            //Conditions for X
            else if(item1.innerHTML == "X" && item2.innerHTML == "X" && item3.innerHTML == "X"){
                item1.style.color = "#2fc3ff";
                item2.style.color = "#2fc3ff";
                item3.style.color = "#2fc3ff";
                info.innerHTML = "X is winner";
                isWin();
            }
            else if(item4.innerHTML == "X" && item5.innerHTML == "X" && item6.innerHTML == "X"){
                item4.style.color = "#2fc3ff";
                item5.style.color = "#2fc3ff";
                item6.style.color = "#2fc3ff";
                info.innerHTML = "X is winner";
                isWin();
            }
            else if(item7.innerHTML == "X" && item8.innerHTML == "X" && item9.innerHTML == "X"){
                item7.style.color = "#2fc3ff";
                item8.style.color = "#2fc3ff";
                item9.style.color = "#2fc3ff";
                info.innerHTML = "X is winner";
                isWin();
            }
            else if(item1.innerHTML == "X" && item4.innerHTML == "X" && item7.innerHTML == "X"){
                item1.style.color = "#2fc3ff";
                item4.style.color = "#2fc3ff";
                item7.style.color = "#2fc3ff";
                info.innerHTML = "X is winner";
                isWin();
            }
            else if(item2.innerHTML == "X" && item5.innerHTML == "X" && item8.innerHTML == "X"){
                item2.style.color = "#2fc3ff";
                item5.style.color = "#2fc3ff";
                item8.style.color = "#2fc3ff";
                info.innerHTML = "X is winner";
                isWin();
            }
            else if(item3.innerHTML == "X" && item6.innerHTML == "X" && item9.innerHTML == "X"){
                item3.style.color = "#2fc3ff";
                item6.style.color = "#2fc3ff";
                item9.style.color = "#2fc3ff";
                info.innerHTML = "X is winner";
                isWin();
            }
            else if(item1.innerHTML == "X" && item5.innerHTML == "X" && item9.innerHTML == "X"){
                item1.style.color = "#2fc3ff";
                item5.style.color = "#2fc3ff";
                item9.style.color = "#2fc3ff";
                info.innerHTML = "X is winner";
                isWin();
            }
            else if(item3.innerHTML == "X" && item5.innerHTML == "X" && item7.innerHTML == "X"){
                item3.style.color = "#2fc3ff";
                item5.style.color = "#2fc3ff";
                item7.style.color = "#2fc3ff";
                info.innerHTML = "X is winner";
                isWin();
            }
            else if(
                (item1.innerHTML == "X" || item1.innerHTML == "0") &&
                (item2.innerHTML == "X" || item2.innerHTML == "0") &&
                (item3.innerHTML == "X" || item3.innerHTML == "0") &&
                (item4.innerHTML == "X" || item4.innerHTML == "0") &&
                (item4.innerHTML == "X" || item4.innerHTML == "0") &&
                (item6.innerHTML == "X" || item6.innerHTML == "0") &&
                (item7.innerHTML == "X" || item7.innerHTML == "0") &&
                (item8.innerHTML == "X" || item8.innerHTML == "0") &&
                (item9.innerHTML == "X" || item9.innerHTML == "0")
                ){
                    info.innerHTML = ("Match Tie")
                }
                else{
                    if(flag == 0)
                    {
                        info.innerHTML = ("Player 0 Turn")
                    }
                    else{
                        info.innerHTML = ("Player X Turn")
                    }
                }
                
            })
        })
    }
choose();

function restartMatch(){
    info.innerHTML = "Player 0 Turn";
    choose();
}

function isWin(){
    allItems.map((v)=>{
        v.style.pointerEvents = 'none';
    }) 
}