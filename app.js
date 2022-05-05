const endDate = "9 May 2022 10:00 PM"
document.getElementById('end-date').innerText = endDate;
const inputs = document.querySelectorAll("input")
function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;
    console.log(diff)
    if (diff < 0) return;
        
    
    //convert in dayes
    inputs[0].value =Math.floor(diff/3600/24);
    //convert in houre
    inputs[1].value = Math.floor(diff/3600)%24;
    // in minutes
     inputs[2].value = Math.floor(diff/60)%60;
     inputs[3].value = Math.floor(diff)%60;
    
}
clock()

setInterval(
    () => {
    clock()
}, 1000
);