
//---------------variable-------------------------------------------

let colorList = [];
let cir_list = document.querySelectorAll(".circler")
let cirNum = cir_list.length;
let score = 0;
let desigRgb = document.querySelector(".designated");



//-------------function -------------------------------------





function randomRgb () {
  let code = "#"
  // let strCode = []
  for (let i = 0; i < 6; i++) {
    let a = Math.floor(Math.random() * 16)
    code += a.toString(16)
    // strCode.push(a)
  }
  // let strstr = 'rgb (${strCode[0]},${strCode[1]},${strCode[2]})' //왜 안되지
  return [code]
} 




function newStage () {
  colorList = [];
  console.log("new")
  let a = function ()  {
    for ( let i = 0; i < cirNum; i++) {
      colorList.push(randomRgb()[0])
      cir_list[i].style.backgroundColor = colorList[i]
    }}
  let b = function () {
    desigRgb.textContent = cir_list[Math.floor(Math.random()*cirNum)].style.backgroundColor
}
a(); b();
  }




function circularEvent () {
    for (let i = 0; i < cirNum; i++) {
    cir_list[i].addEventListener("click", function() {



      if (cir_list[i].style.backgroundColor === desigRgb.textContent) {
        score ++;
        document.querySelector(".score").textContent = score.toString();
        console.log(score);
        newStage();
        document.querySelector(".modal_right").style.backgroundColor = randomRgb()[0];
        document.querySelector(".modal_right").classList.add("show")




      } else {
         score = 0;
         document.querySelector(".score").textContent = score.toString();
         document.querySelector(".modal_wrong").style.backgroundColor = randomRgb()[0];
         document.querySelector(".modal_wrong").classList.add("show")
          newStage();
        
        
        
        
        
        
        
        }




    })
    }
}





//--------------iniial------------------------------------------------------

// window.addEventListener("load", function () {
//   cirNum = prompt ("how much?", 3)
// })


// window.addEventListener("load", function () {
//   for ( let i = 0; i < cirNum; i++) {
//     colorList.push(randomRgb()[0])
//     cir_list[i].style.backgroundColor = colorList[i]
//   }
// })


// window.addEventListener("load", function () {
//   desigRgb.textContent = cir_list[Math.floor(Math.random()*cirNum)].style.backgroundColor
// })

window.addEventListener("load", newStage())



//----------------------addEvent--------------------------

circularEvent()

document.querySelector(".next").addEventListener("click", function () {
  document.querySelector(".modal_right").classList.remove("show")
})

document.querySelector(".try").addEventListener("click", function () {
  document.querySelector(".modal_wrong").classList.remove("show")
})