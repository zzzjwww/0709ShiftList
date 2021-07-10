let lastChecked;

function handleCheck (e){
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkBoxes.forEach(checkbox =>{
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
      }
      if (inBetween){
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
};

const checkBoxes = document.querySelectorAll(`.inbox input[type="checkbox"]`);
checkBoxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck))