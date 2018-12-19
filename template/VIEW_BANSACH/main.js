$(function(){
    $('.main-menu li').mousemove(function(){
        x=$(this).index();
        x=x+1;
        $('.extra-menu div').removeClass('hienthi');
        $('.extra-menu div:nth-child('+x+')').addClass('hienthi');
    })
    $('.menu').mouseleave(function(){
        $('.extra-menu div').removeClass('hienthi');
    })
})

sliderindex=0;
slider()
function slider(){
    x=$('.banner img').length;
    for(i=0;i<=x;i++){
        $('.banner img:nth-child('+i+')').css('visibility', 'hidden');
    }
    sliderindex++;
    if(sliderindex>3){
        sliderindex=1;
    }
    k=sliderindex;
    $('.banner img:nth-child('+k+')').css('visibility', 'visible');
    setTimeout(slider,2000);
}


$(function(){
    bd=3;
    kt=6;
    $('.splienquan').css('display','none') ;
    t=$('.splienquan').length+2;
    $('.btnpre').click(function(){
    $('.splienquan').css('display','none') ;
        bd++;
        kt++;
        if(kt>t){bd=3;kt=6}
        for(j=bd;j<=kt;j++){
            console.log(j);
            $('.splienquan:nth-child('+j+')').css('display','inline-block'); 
            //$('.splienquan:nth-child('+bd+')').css('display','none'); 
        }
        
    })
    for(i=3;i<7;i++){
        $('.splienquan:nth-child('+i+')').css('display','inline-block'); 
    }
 })  
 $(function(){
    bd=2;
    kt=5;
    $('#kmtn .sp').css('display','none') ;
    tt=$('#kmtn .sp').length;
    $('#kmtn .btn_sp_click').click(function(){
    $('#kmtn .sp').css('display','none') ;
        bd++;
        kt++;
        if(kt>tt){
            if(bd<=tt){
                for(j=bd;j<=tt;j++){
                    $('#kmtn .sp:nth-child('+j+')').css('display','inline-block');  
                }
                for(j=1;j<=kt-tt;j++){
                    $('#kmtn .sp:nth-child('+j+')').css('display','inline-block');  
                }
            }else{
                bd=1;
                kt=4;
                for(j=bd;j<=kt;j++){
                    $('#kmtn .sp:nth-child('+j+')').css('display','inline-block');  
                }
            }
        }else{
            for(j=bd;j<=kt;j++){
                $('#kmtn .sp:nth-child('+j+')').css('display','inline-block');  
            }
        }
    })
    for(i=1;i<5;i++){
        $('#kmtn .sp:nth-child('+i+')').css('display','inline-block'); 
    }
 })  
 $(function(){
    spnbbd=1;
    spnbkt=4;
    $('#spnb .sp').css('display','none') ;
    spnbt=$('#spnb .sp').length+1;
    $('#spnb .btn_sp_click_left').click(function(){
    $('#spnb .sp').css('display','none') ;
        spnbbd++;
        spnbkt++;
        spnbt=$('#spnb .sp').length;
        if(spnbkt>spnbt){

            if(spnbbd<=spnbt){
                for(pj=spnbbd;pj<=spnbt;pj++){
                    console.log(pj)    
                    $('#spnb .sp:nth-child('+pj+')').css('display','inline-block');  
                }
                for(pj=1;pj<=(spnbkt-spnbt);pj++){
                    console.log(pj)
                    $('#spnb .sp:nth-child('+pj+')').css('display','inline-block');  
                }
            }else{
                spnbbd=1;
                spnbkt=4;
                for(pj=spnbbd;pj<=spnbkt;pj++){
                    console.log(pj)
                    $('#spnb .sp:nth-child('+pj+')').css('display','inline-block');  
                }
            }
        }else{
            for(pj=spnbbd;pj<=spnbkt;pj++){
                console.log(pj)
                $('#spnb .sp:nth-child('+pj+')').css('display','inline-block');  
            }
        }
        console.log('-----------------')
    })
    for(i=1;i<5;i++){
        $('#spnb .sp:nth-child('+i+')').css('display','inline-block'); 
    }
 })  

 $(function(){
    spm_bd=1;
    spm_kt=4;
    $('#spm .sp').css('display','none') ;
    spm_t=$('#spm_b .sp').length+1;
    $('#spm .btn_sp_click_right').click(function(){
    $('#spm .sp').css('display','none') ;
        spm_bd++;
        spm_kt++;
        spm_t=$('#spm .sp').length;
        
        console.log(spm_bd+'bd');
        console.log(spm_kt+'kt');
        console.log(spm_t+'t');
        if(spm_kt>spm_t){
            if(spm_bd<=spm_t){
                
        console.log(spm_bd+'bd');
        console.log(spm_kt+'kt');
        console.log(spm_t+'t');
                for(mj=spm_bd;mj<=spm_t;mj++){
                    console.log(mj)    
                    $('#spm .sp:nth-child('+mj+')').css('display','inline-block');  
                }
                for(mj=1;mj<=(spm_kt-spm_t);mj++){
                    console.log(mj)
                    $('#spm .sp:nth-child('+mj+')').css('display','inline-block');  
                }
            }else{
                spm_bd=1;
                spm_kt=4;
                for(mj=spm_bd;mj<=spm_kt;mj++){
                    console.log(mj)
                    $('#spm .sp:nth-child('+mj+')').css('display','inline-block');  
                }
            }
        }else{
            for(mj=spm_bd;mj<=spm_kt;mj++){
                console.log(mj)
                $('#spm .sp:nth-child('+mj+')').css('display','inline-block');  
            }
        }
        console.log('-----------------')
    })
    for(i=1;i<5;i++){
        $('#spm .sp:nth-child('+i+')').css('display','inline-block'); 
    }
 })  

function dangnhap(){
    // var t=
    alert(prompt('Email')+ prompt('Mật khẩu :'));
}
$(function(){
    ht=2;
    $('.anhsp').css('display','none') ;
    $('.anhsp:nth-child('+ht+')').css('display','inline-block');
    t=$('.splienquan').length+2;
    $('.btnnext').click(function(){
    $('.anhsp').css('display','none') ;
        ht++;
        if(ht>$('.anhsp').length+1){ht=2};
        $('.anhsp:nth-child('+ht+')').css('display','inline-block');
    })
 })  
$(function(){
    $('.model_container').css('display','none');
    $('.model_signin').click(function(){
        console.log("dagoi");
        $('.model_container').css('display','flex');
        $('.model_container_login').css('display','none');
    })
    $('.tat').click(function(){
        $('.model_container').css('display','none');
    })
})
$(function(){
    $('.model_container_login').css('display','none');
    $('.model_login').click(function(){
        $('.model_container_login').css('display','flex');
        $('.model_container').css('display','none');
    })
    $('.tat').click(function(){
        $('.model_container_login').css('display','none');
    })
})