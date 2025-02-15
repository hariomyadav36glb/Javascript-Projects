function timing()
{
const timer = document.getElementById('head');
const now = new Date();
const indianTime = now.toLocaleTimeString();
timer.innerHTML= indianTime;
}
// setInterval(timing,1000);
const timer = document.getElementById('head');
timer.style.fontSize="200px";
timer.style.display="flex";
timer.style.justifyContent="Center";
timer.style.alignItems="center";

