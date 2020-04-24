const scrollHeight = document.scrollingElement.scrollTop;
const progressbar  = document.querySelector(`.progress-bar`);
const progressbarWidth = progressbar.style.width;
const progressbarHeight = progressbar.style.height;
//console.log(scrollHeight);
if(scrollHeight != 0){
    this.window.scrollTo(0,0);
//    console.log('Height of scroll' + scrollHeight);
}
//
//(function (){
//    progressbar.style.width = 0 + 'px';
//    window.scrollTo(0,0);
//    
//})();
document.addEventListener(`load`, () =>{
    this.window.scrollTo(0,0);
});
document.addEventListener(`scroll`, () =>{
    
    const scrollHeight = document.scrollingElement.scrollTop;
    progressbar.style.width = scrollHeight*.68 + 'px';
    
    
});

document.body.addEventListener(`load`, () =>{
    this.window.scrollTo(0,0);
})



