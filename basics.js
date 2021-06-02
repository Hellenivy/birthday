
let x=0;

let imgs=[];
  imgs[0]='pic1.jpeg';
  imgs[1]='pic2.jpg';
  imgs[2]='pic3.jpeg';
  imgs[3]='pic4.jpeg';
  imgs[4]='pic5.jpeg';
  imgs[5]='pic6.jpeg';
  function imageSlide(){
      document.slide.src=imgs[x]

      if (x <imgs.length){
        x++
      }

      else{
          x=0;
      } 
      setTimeout("imageSlide()",1000);

  }

  window.onload=imageSlide;




  



