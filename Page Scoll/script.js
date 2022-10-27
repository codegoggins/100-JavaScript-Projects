const container = document.getElementById('container');
const scrollBar = document.getElementById('scroll-bar');
let containerHeight;

window.onscroll = () => {
   containerHeight = container.offsetHeight - window.innerHeight;
   containerPos = container.getBoundingClientRect();
   diff = containerHeight + containerPos.top;
   progressPercentage = diff / containerHeight * 100;
   cssWidth = Math.floor(100 - progressPercentage);
   scrollBar.style.width = cssWidth + "%";
};