let utc = document.querySelector(".time")
function update(){
const time = new Date();
const newTime = time.toISOString();
utc.innerHTML = newTime
console.log(newTime)
}
update()


