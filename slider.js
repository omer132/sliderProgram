var models=[
{
    name : 'bmw',
    image :'img/bmw.jpg',
    link :'https://www.bmw.com.tr/tr/index.html'
},
{
    name : 'skoda superB',
    image :'img/superb.jpg',
    link :'https://www.skoda.com.tr'
},
{
    name : 'honda',
    image :'img/honda.jpg',
    link :'https://www.honda.com.tr'
},
{
    name : 'xc90',
    image :'img/xc90.jpg',
    link :'https://www.volvocars.com/tr/?utm_source=google&utm_medium=cpc&utm_campaign=tr_masterbrand_range_consideration-action_alwayson_bgn_alon_mxd_tur&gad_source=1&gclid=CjwKCAiAjp-7BhBZEiwAmh9rBYCQPWBnKd18jmLzIGu-ReMqrd0u9_bFaezWpPyEHDglpYRQyTiDURoC7IQQAvD_BwE&gclsrc=aw.ds'
},
{
    name : 'cupra',
    image :'img/cupra.jpg',
    link :'https://www.cupraofficial.com.tr'
}
]

var index = 0;
var slaytCount=models.length;
var interval;
var setting={
    duration:'1000',
    random:false
}

init(setting);

document.querySelector('.rightButton').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});


document.querySelector('.leftButton').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
});


document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(setting);
    })
})

function init(x){

    var prev;

    interval= setInterval(function(){

        if(setting.random){
            do{index=Math.floor(Math.random()*slaytCount);
            }
            while(index==prev){prev=index;}
            index=Math.floor(Math.random()*slaytCount);
        }
        else{

            if(slaytCount==index+1){
                index=-1 ;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        
        showSlide(index);
    },setting.duration)
}

function showSlide(i){
    
    index = i;

    if(i<0){
        index=slaytCount-1;
    }
    if(i>=slaytCount){
        index=0;
    }


document.querySelector('.card-title').textContent = models[index].name;

document.querySelector('.card-img-top').setAttribute('src',models[index].image);

document.querySelector('.card-link').setAttribute('href',models[index].link);
}

