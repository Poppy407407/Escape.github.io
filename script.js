var y_hum=1
var x_hum=2
var shovel=false
bedDD=document.getElementById("pole2_10")
wardrobee=document.getElementById("pole3_10")
pole1_2.src="img/front.png";
document.addEventListener('keydown',hum_move);
function hum_move(event){
        switch(event.key){
            case 'w':
                if(y_hum==1){
                    y_hum=1
                }else{
                    
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    y_hum--;
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    if(shovel==false){
                        idImg.src='img/back.png';
                    }else{
                        idImg.src='img/back_sh.png';
                    }
                    bedDD.src="img/bed.png"
                    wardrobee.src="img/wardrobe.png"
                } 
            break;
            case 'W':
                if(y_hum==1){
                    y_hum=1
                }else{
                    
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    y_hum--;
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    if(shovel==false){
                        idImg.src='img/back.png';
                    }else{
                        idImg.src='img/back_sh.png';
                    }
                    bedDD.src="img/bed.png"
                    wardrobee.src="img/wardrobe.png"
                } 
            break;
            case 'ц':
                if(y_hum==1){
                    y_hum=1
                }else{
                    
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    y_hum--;
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    if(shovel==false){
                        idImg.src='img/back.png';
                    }else{
                        idImg.src='img/back_sh.png';
                    }
                    bedDD.src="img/bed.png"
                    wardrobee.src="img/wardrobe.png"
                } 
            break;
            case 'Ц':
                if(y_hum==1){
                    y_hum=1
                }else{
                    
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    y_hum--;
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    if(shovel==false){
                        idImg.src='img/back.png';
                    }else{
                        idImg.src='img/back_sh.png';
                    }
                    bedDD.src="img/bed.png"
                    wardrobee.src="img/wardrobe.png"
                } 
            break;
            case 's':
                if(y_hum==4){
                    y_hum=4
                }else{
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    y_hum++;
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    if(shovel==false){
                        idImg.src='img/front.png';
                    }else{
                        idImg.src='img/front_sh.png';
                    }
                    bedDD.src="img/bed.png"
                    wardrobee.src="img/wardrobe.png"
                } 
            break;
            case 'S':
                if(y_hum==4){
                    y_hum=4
                }else{
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    y_hum++;
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    if(shovel==false){
                        idImg.src='img/front.png';
                    }else{
                        idImg.src='img/front_sh.png';
                    }
                    bedDD.src="img/bed.png"
                    wardrobee.src="img/wardrobe.png"
                } 
            break;
            case 'Ы':
                if(y_hum==4){
                    y_hum=4
                }else{
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    y_hum++;
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    if(shovel==false){
                        idImg.src='img/front.png';
                    }else{
                        idImg.src='img/front_sh.png';
                    }
                    bedDD.src="img/bed.png"
                    wardrobee.src="img/wardrobe.png"
                } 
            break;
            case 'ы':
                if(y_hum==4){
                    y_hum=4
                }else{
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    y_hum++;
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    if(shovel==false){
                        idImg.src='img/front.png';
                    }else{
                        idImg.src='img/front_sh.png';
                    }
                    bedDD.src="img/bed.png"
                    wardrobee.src="img/wardrobe.png"
                } 
            break;
            case 'a':
                if(x_hum==2){
                    x_hum=2
                }else{
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    x_hum--;
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    if(shovel==false){
                        idImg.src='img/left.png';
                    }else{
                        idImg.src='img/left_sh.png';
                    }
                    bedDD.src="img/bed.png"
                    wardrobee.src="img/wardrobe.png"
                } 
            break;
            case 'A':
                if(x_hum==2){
                    x_hum=2
                }else{
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    x_hum--;
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    if(shovel==false){
                        idImg.src='img/left.png';
                    }else{
                        idImg.src='img/left_sh.png';
                    }
                    bedDD.src="img/bed.png"
                    wardrobee.src="img/wardrobe.png"
                } 
            break;
            case 'Ф':
                if(x_hum==2){
                    x_hum=2
                }else{
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    x_hum--;
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    if(shovel==false){
                        idImg.src='img/left.png';
                    }else{
                        idImg.src='img/left_sh.png';
                    }
                    bedDD.src="img/bed.png"
                    wardrobee.src="img/wardrobe.png"
                } 
            break;
            case 'ф':
                if(x_hum==2){
                    x_hum=2
                }else{
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    x_hum--;
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    if(shovel==false){
                        idImg.src='img/left.png';
                    }else{
                        idImg.src='img/left_sh.png';
                    }
                    bedDD.src="img/bed.png"
                    wardrobee.src="img/wardrobe.png"
                } 
            break;
            case 'd':
                if(x_hum==9){
                    x_hum=9
                }else{
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    x_hum++;
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    if(shovel==false){
                        idImg.src='img/right.png';
                    }else{
                        idImg.src='img/right_sh.png';
                    }
                    bedDD.src="img/bed.png"
                    wardrobee.src="img/wardrobe.png"
                } 
            break;
            case 'D':
                if(x_hum==9){
                    x_hum=9
                }else{
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    x_hum++;
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    if(shovel==false){
                        idImg.src='img/right.png';
                    }else{
                        idImg.src='img/right_sh.png';
                    }
                    bedDD.src="img/bed.png"
                    wardrobee.src="img/wardrobe.png"
                } 
            break;
            case 'В':
                if(x_hum==9){
                    x_hum=9
                }else{
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    x_hum++;
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    if(shovel==false){
                        idImg.src='img/right.png';
                    }else{
                        idImg.src='img/right_sh.png';
                    }
                    bedDD.src="img/bed.png"
                    wardrobee.src="img/wardrobe.png"
                } 
            break;
            case 'в':
                if(x_hum==9){
                    x_hum=9
                }else{
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    x_hum++;
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    if(shovel==false){
                        idImg.src='img/right.png';
                    }else{
                        idImg.src='img/right_sh.png';
                    }
                    bedDD.src="img/bed.png"
                    wardrobee.src="img/wardrobe.png"
                } 
            break;
            case 'e':
                if(x_hum==9 && y_hum==2){
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    bedDD.src="img/bed_hum.png"
                }if(x_hum==9 && y_hum==3){
                    shovel=true
                }if(x_hum==9 && y_hum==4 && shovel==true){
                    window.open('podeg.html')
                    window.close()
                }
            break;
            case 'E':
                if(x_hum==9 && y_hum==2){
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    bedDD.src="img/bed_hum.png"
                }if(x_hum==9 && y_hum==3){
                    shovel=true
                }if(x_hum==9 && y_hum==4 && shovel==true){
                    window.open('podeg.html')
                    window.close()
                }
            break;
            case 'у':
                if(x_hum==9 && y_hum==2){
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    bedDD.src="img/bed_hum.png"
                }if(x_hum==9 && y_hum==3){
                    shovel=true
                }if(x_hum==9 && y_hum==4 && shovel==true){
                    window.open('podeg.html')
                    window.close()
                }
            break;
            case 'У':
                if(x_hum==9 && y_hum==2){
                    idImg=document.getElementById('pole'+y_hum+'_'+x_hum);
                    idImg.src="img/Empty.png";
                    bedDD.src="img/bed_hum.png"
                }if(x_hum==9 && y_hum==3){
                    shovel=true
                }if(x_hum==9 && y_hum==4 && shovel==true){
                    window.open('podeg.html')
                    window.close()
                }
            break;  
            }
}