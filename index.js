setInterval(() => {
    
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    
    
    }, 1000);

    function shownav (){
        document.getElementById('navlist').style.marginTop=('0px')
        document.getElementById('times').style.visibility=('visible')
        document.getElementById('bars').style.visibility=('hidden')

    }

    function hidenav (){
        document.getElementById('navlist').style.marginTop=('-200px')
        document.getElementById('times').style.visibility=('hidden')
        document.getElementById('bars').style.visibility=('visible')

    }
