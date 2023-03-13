
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor="red"

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 1}px`;
    }else if(event.key ==="ArrowRight"){

        const RightNumbers = dodger.style.right.replace("px", "");
      const right = parseInt(RightNumbers, 10);
    }





  });
  
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }



  function moveDodgerRight() {
    
    let dodger = document.getElementById("dodger");
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }


  }
