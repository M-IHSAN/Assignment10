function cal(){

let c1 =Number(document.getElementById("crhr1").value)
let c2 =Number(document.getElementById("crhr2").value)
let c3 =Number(document.getElementById("crhr3").value)
let c4 =Number(document.getElementById("crhr4").value)
let c5 =Number(document.getElementById("crhr5").value)
let c6 =Number(document.getElementById("crhr6").value)
let c7 =Number(document.getElementById("crhr7").value)
let c8 =Number(document.getElementById("crhr8").value)
let c9 =Number(document.getElementById("crhr9").value)
let c10 =Number(document.getElementById("crhr10").value)
let c11 =Number(document.getElementById("crhr11").value)
let c12 =Number(document.getElementById("crhr12").value)
let c13 =Number(document.getElementById("crhr13").value)
let c14 =Number(document.getElementById("crhr14").value)


let m1 =document.getElementById("marks1").value
let m2 =document.getElementById("marks2").value
let m3 =document.getElementById("marks3").value
let m4 =document.getElementById("marks4").value
let m5 =document.getElementById("marks5").value
let m6 =document.getElementById("marks6").value
let m7 =document.getElementById("marks7").value

let m8 =document.getElementById("marks8").value
let m9 =document.getElementById("marks9").value
let m10 =document.getElementById("marks10").value
let m11 =document.getElementById("marks11").value
let m12 =document.getElementById("marks12").value
let m13 =document.getElementById("marks13").value
let m14 =document.getElementById("marks14").value

//=SUM(H21:H23)/J24



let p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14=0






                                                                        //mark1


if(m1>=88&&m1<=100){
    document.getElementById("Grade1").innerHTML="A"
    document.getElementById("Points1").innerHTML=4;
    p1=4
}
else if(m1>=81&&m1<=87){


    document.getElementById("Grade1").innerHTML="B+"
   document.getElementById("Points1").innerHTML=3.5;
   p1=3.5
}
else if (m1>=74&&m1<=80){

    document.getElementById("Grade1").innerHTML="B"
    document.getElementById("Points1").innerHTML=3;
    p1=3;
}

else if (m1>=68&&m1<=74){

    document.getElementById("Grade1").innerHTML="C+"
    p1=document.getElementById("Points1").innerHTML=2.5
}


else if (m1>=60&&m1<=68){

    document.getElementById("Grade1").innerHTML="C"
    p1=document.getElementById("Points1").innerHTML=2
}


else if (m1<=59){

    document.getElementById("Grade1").innerHTML=" "
   p1= document.getElementById("Points1").innerHTML=0

}



                                                        //mark 2



if(m2>=88&&m2<=100){
    document.getElementById("Grade2").innerHTML="A"
    p2= document.getElementById("Points2").innerHTML=4
}
else if(m2>=81&&m2<=87){


    document.getElementById("Grade2").innerHTML="B+"
    p2= document.getElementById("Points2").innerHTML=3.5
}
else if (m2>=74&&m2<=80){

    document.getElementById("Grade2").innerHTML="B"
    p2= document.getElementById("Points2").innerHTML=3
}

else if (m2>=68&&m2<=74){

    document.getElementById("Grade2").innerHTML="C+"
    p2= document.getElementById("Points2").innerHTML=2.5
}


else if (m2>=60&&m2<=68){

    document.getElementById("Grade2").innerHTML="C"
     document.getElementById("Points2").innerHTML=2
     p2=2
}


else if (m2<=59){

     document.getElementById("Grade2").innerHTML=" "
   p2=  document.getElementById("Points2").innerHTML=0

}







if(m3>=88&&m3<=100){
    document.getElementById("Grade3").innerHTML="A"
    p3= document.getElementById("Points3").innerHTML=4
}
else if(m3>=81&&m3<=87){


    document.getElementById("Grade3").innerHTML="B+"
    p3= document.getElementById("Points3").innerHTML=3.5
}
else if (m3>=74&&m3<=80){

    document.getElementById("Grade3").innerHTML="B"
    p3= document.getElementById("Points3").innerHTML=3
}

else if (m3>=68&&m3<=74){

    document.getElementById("Grade3").innerHTML="C+"
    p3= document.getElementById("Points3").innerHTML=2.5
}


else if (m3>=60&&m3<=68){

    document.getElementById("Grade3").innerHTML="C"
    p3=  document.getElementById("Points3").innerHTML=2
}


else if (m3<=59){

     document.getElementById("Grade3").innerHTML=" "
    p3=   document.getElementById("Points3").innerHTML=0

}



                                                                //mark 4



if(m4>=88&&m4<=100){
    document.getElementById("Grade4").innerHTML="A"
    p4=  document.getElementById("Points4").innerHTML=4
}
else if(m4>=81&&m4<=87){


    document.getElementById("Grade4").innerHTML="B+"
    p4= document.getElementById("Points4").innerHTML=3.5
}
else if (m4>=74&&m4<=80){

    document.getElementById("Grade4").innerHTML="B"
    p4=document.getElementById("Points4").innerHTML=3
}

else if (m4>=68&&m4<=74){

    document.getElementById("Grade4").innerHTML="C+"
    p4= document.getElementById("Points4").innerHTML=2.5
}


else if (m4>=60&&m4<=68){

    document.getElementById("Grade4").innerHTML="C"
    p4=  document.getElementById("Points4").innerHTML=2
}


else if (m4<=59){

    document.getElementById("Grade4").innerHTML=" "
    p4=    document.getElementById("Points4").innerHTML=0

}



                                                            //mark5



if(m5>=88&&m5<=100){
    document.getElementById("Grade5").innerHTML="A"
    p5=   document.getElementById("Points5").innerHTML=4
}
else if(m5>=81&&m5<=87){


    document.getElementById("Grade5").innerHTML="B+"
    p5=  document.getElementById("Points5").innerHTML=3.5
}
else if (m5>=74&&m5<=80){

    document.getElementById("Grade5").innerHTML="B"
    p5=  document.getElementById("Points5").innerHTML=3
}

else if (m5>=68&&m5<=74){

    document.getElementById("Grade5").innerHTML="C+"
    p5=   document.getElementById("Points5").innerHTML=2.5
}


else if (m5>=60&&m5<=68){

    document.getElementById("Grade5").innerHTML="C"
    p5=  document.getElementById("Points5").innerHTML=2
}


else if (m5<=59){

    document.getElementById("Grade5").innerHTML=" "
  p5=  document.getElementById("Points5").innerHTML=0

}




                                                        //mark 6


if(m6>=88&&m6<=100){
    document.getElementById("Grade6").innerHTML="A"
    p6=   document.getElementById("Points6").innerHTML=4
}
else if(m6>=81&&m6<=87){


    document.getElementById("Grade6").innerHTML="B+"
    p6=  document.getElementById("Points6").innerHTML=3.5
}
else if (m6>=74&&m6<=80){

    document.getElementById("Grade6").innerHTML="B"
    p6=  document.getElementById("Points6").innerHTML=3
}

else if (m6>=68&&m6<=74){

    document.getElementById("Grade6").innerHTML="C+"
    p6=   document.getElementById("Points6").innerHTML=2.5
}


else if (m6>=60&&m6<=68){

    document.getElementById("Grade6").innerHTML="C"
    p6=   document.getElementById("Points6").innerHTML=2
}


else if (m6<=59){

    document.getElementById("Grade6").innerHTML=" "
    p6=   document.getElementById("Points6").innerHTML=0

}


                                                                //mark7




if(m7>=88&&m7<=100){
    document.getElementById("Grade7").innerHTML="A"
    p7=   document.getElementById("Points7").innerHTML=4
}
else if(m7>=81&&m7<=87){


    document.getElementById("Grade7").innerHTML="B+"
    p7=   document.getElementById("Points7").innerHTML=3.5
}
else if (m7>=74&&m7<=80){

    document.getElementById("Grade7").innerHTML="B"
    p7=   document.getElementById("Points7").innerHTML=3
}

else if (m7>=68&&m7<=74){

    document.getElementById("Grade7").innerHTML="C+"
    p7=   document.getElementById("Points7").innerHTML=2.5
}


else if (m7>=60&&m7<=68){

    document.getElementById("Grade7").innerHTML="C"
    p7=  document.getElementById("Points7").innerHTML=2
}


else if (m7<=59){

    document.getElementById("Grade7").innerHTML=" "
   p7=   document.getElementById("Points7").innerHTML=0

}



                                                        //mark8



if(m8>=88&&m8<=100){
    document.getElementById("Grade8").innerHTML="A"
    p8=  document.getElementById("Points8").innerHTML=4
}
else if(m8>=81&&m8<=87){


    document.getElementById("Grade8").innerHTML="B+"
    p8=   document.getElementById("Points8").innerHTML=3.5
}
else if (m8>=74&&m8<=80){

    document.getElementById("Grade8").innerHTML="B"
    p8=  document.getElementById("Points8").innerHTML=3
}

else if (m8>=68&&m8<=74){

    document.getElementById("Grade8").innerHTML="C+"
    p8=  document.getElementById("Points8").innerHTML=2.5
}


else if (m8>=60&&m18<=68){

    document.getElementById("Grade8").innerHTML="C"
    p8=   document.getElementById("Points8").innerHTML=2
}


else if (m8<=59){

    document.getElementById("Grade8").innerHTML=" "
   p8=   document.getElementById("Points8").innerHTML=0

}


                                                        //mark9




if(m9>=88&&m9<=100){
    document.getElementById("Grade9").innerHTML="A"
    p9=   document.getElementById("Points9").innerHTML=4
}
else if(m9>=81&&m9<=87){


    document.getElementById("Grade9").innerHTML="B+"
    p9=   document.getElementById("Points9").innerHTML=3.5
}
else if (m9>=74&&m9<=80){

    document.getElementById("Grade9").innerHTML="B"
    p9=   document.getElementById("Points9").innerHTML=3
}

else if (m9>=68&&m9<=74){

    document.getElementById("Grade9").innerHTML="C+"
    p9=  document.getElementById("Points9").innerHTML=2.5
}


else if (m9>=60&&m9<=68){

    document.getElementById("Grade9").innerHTML="C"
    p9=  document.getElementById("Points9").innerHTML=2
}


else if (m9<=59){

       document.getElementById("Grade9").innerHTML=" "
   p9=  document.getElementById("Points9").innerHTML=0

}




                                                                    //mark10


if(m10>=88&&m10<=100){
    document.getElementById("Grade10").innerHTML="A"
    p10=  document.getElementById("Points10").innerHTML=4
}
else if(m10>=81&&m10<=87){


    document.getElementById("Grade10").innerHTML="B+"
    p10=  document.getElementById("Points10").innerHTML=3.5
}
else if (m10>=74&&m10<=80){

    document.getElementById("Grade10").innerHTML="B"
    p10=  document.getElementById("Points10").innerHTML=3
}

else if (m10>=68&&m10<=74){

    document.getElementById("Grade10").innerHTML="C+"
    p10=  document.getElementById("Points10").innerHTML=2.5
}


else if (m10>=60&&m10<=68){

    document.getElementById("Grade10").innerHTML="C"
    p10=  document.getElementById("Points10").innerHTML=2
}


else if (m10<=59){

    document.getElementById("Grade10").innerHTML=" "
    p10=  document.getElementById("Points10").innerHTML=0

}


                                                            //mark11




if(m11>=88&&m11<=100){
    document.getElementById("Grade11").innerHTML="A"
    p11=  document.getElementById("Points11").innerHTML=4
}
else if(m11>=81&&m11<=87){


    document.getElementById("Grade11").innerHTML="B+"
    p11= document.getElementById("Points11").innerHTML=3.5
}
else if (m11>=74&&m11<=80){

    document.getElementById("Grade11").innerHTML="B"
    p11=  document.getElementById("Points11").innerHTML=3
}

else if (m11>=68&&m11<=74){

    document.getElementById("Grade11").innerHTML="C+"
    p11=  document.getElementById("Points11").innerHTML=2.5
}


else if (m11>=60&&m11<=68){

    document.getElementById("Grade11").innerHTML="C"
    p11= document.getElementById("Points11").innerHTML=2
}


else if (m11<=59){

     document.getElementById("Grade11").innerHTML=" "
  p11=  document.getElementById("Points11").innerHTML=0

}



                                                                        //mark12



if(m12>=88&&m12<=100){
    document.getElementById("Grade12").innerHTML="A"
    p12=   document.getElementById("Points12").innerHTML=4
}
else if(m12>=81&&m12<=87){


    document.getElementById("Grade12").innerHTML="B+"
   p12= document.getElementById("Points12").innerHTML=3.5
}
else if (m12>=74&&m12<=80){

    document.getElementById("Grade12").innerHTML="B"
    p12=  document.getElementById("Points12").innerHTML=3
}

else if (m12>=68&&m12<=74){

    document.getElementById("Grade12").innerHTML="C+"
    p12=  document.getElementById("Points12").innerHTML=2.5
}


else if (m12>=60&&m12<=68){

    document.getElementById("Grade12").innerHTML="C"
    p12= document.getElementById("Points12").innerHTML=2
}


else if (m12<=59){

     document.getElementById("Grade12").innerHTML=" "
    p12=   document.getElementById("Points12").innerHTML=0

}




                                                                    //mark13


if(m13>=88&&m13<=100){
    document.getElementById("Grade13").innerHTML="A"
    p13= document.getElementById("Points13").innerHTML=4
}
else if(m13>=81&&m13<=87){


    document.getElementById("Grade13").innerHTML="B+"
    p13=  document.getElementById("Points13").innerHTML=3.5
}
else if (m13>=74&&m13<=80){

    document.getElementById("Grade13").innerHTML="B"
    p13= document.getElementById("Points13").innerHTML=3
}

else if (m13>=68&&m13<=74){

    document.getElementById("Grade13").innerHTML="C+"
    p13=  document.getElementById("Points13").innerHTML=2.5
}


else if (m13>=60&&m13<=68){

    document.getElementById("Grade13").innerHTML="C"
    p13=  document.getElementById("Points13").innerHTML=2
}


else if (m13<=59){

   document.getElementById("Grade13").innerHTML=" "
   p13=  document.getElementById("Points13").innerHTML=0

}




                                                             //   mark14


if(m14>=88&&m14<=100){
    document.getElementById("Grade14").innerHTML="A"
    p14= document.getElementById("Points14").innerHTML=4
}
else if(m14>=81&&m14<=87){


    document.getElementById("Grade14").innerHTML="B+"
    p14=  document.getElementById("Points14").innerHTML=3.5
}
else if (m14>=74&&m14<=80){

    document.getElementById("Grade14").innerHTML="B"
    p14=  document.getElementById("Points14").innerHTML=3
}

else if (m14>=68&&m14<=74){

    document.getElementById("Grade14").innerHTML="C+"
    p14=  document.getElementById("Points14").innerHTML=2.5
}


else if (m14>=60&&m14<=68){

    document.getElementById("Grade14").innerHTML="C"
    p14=   document.getElementById("Points14").innerHTML=2
}


else if (m14<=59){

    document.getElementById("Grade14").innerHTML=" "
    p14=   document.getElementById("Points14").innerHTML=0

}





let poin=(c1*p1)+(c2*p2)+(c3*p3)+(c4*p4)+(c5*p5)+(c6*p6)+(c7*p7)+(c8*p8)+(c9*p9)+(c10*p10)+(c11*p11)+(c12*p12)+(c13*p13)+(c14*p14)
let totalcr=c1+c2+c3+c4+c5+c6+c7+c8+c9+c10+c11+c12+c13+c14
const result=( poin/totalcr);

var result1=("Your GPA is   "+"  :"+result );
var result2=("Total Cr. Hr.   "+"  :"+totalcr )
document.getElementById("result1").innerHTML=result1
document.getElementById("result2").innerHTML=result2



p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14=0
}