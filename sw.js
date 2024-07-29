var isStop = true;
var ms = 0;
var s = 0;
var min = 0;
var hr = 0;

function start()
{
    if(isStop == true)
        {
            isStop = false;
            timer();
        }
}

function timer()
{
    if(isStop == false)
        {
            ms++;
            ms = parseInt(ms);
            s = parseInt(s);
            min = parseInt(min);
            hr = parseInt(hr);
            if(ms == 110)
                {
                    ms = 0;
                    s++;
                }
            if(s == 60)
                {
                    s = 0;
                    min++;
                }    
            if(min == 60)
                {
                    min = 0;
                    hr++;
                } 
                
                
            if(ms < 100)
                {
                    ms = "0" + ms;
                }
            if(ms < 10)
                {
                    ms = "0" + ms;
                }    
            if(s < 10)
                {
                    s = "0" + s;
                }    
            if(min < 10)
                {
                    min = "0" + min;
                }
            if(hr < 10)
                {
                    hr = "0" + hr;
                }          

            stopwatch.innerHTML = hr +" : "+ min +" : "+ s +" : "+ ms;
            setTimeout("timer()",1);
        }
}


function stop()
{
    isStop = true;
}

function reset()
{
    isStop = true;
    ms = 0;
    s = 0;
    min = 0;
    hr = 0;

    stopwatch.innerHTML = "00 : 00 : 00 : 000";
}