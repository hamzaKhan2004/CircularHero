let tl = gsap.timeline();

let rotate = () =>{
    tl.to('.bCircle',{
        rotate:"360deg",
    },'first')
    
    tl.to('#page1 > .smCircle',{
        duration:3,
        rotate:"-360deg",
    },'first')
    
    tl.to('#page1 > .mnCircle',{
        duration:3.5,
        rotate:"360deg",
    },'first')
}

let rotate2 = () =>{
    tl.to('#page2 > .bCircle',{
        rotate:"540deg",
    },'sec')
    
    tl.to('#page2 > .smCircle',{
        duration:3.5,
        rotate:"540deg",
    },'sec')
    
    tl.to('#page2 > .mnCircle',{
        duration:4.2,
        rotate:"-540deg",
    },'sec')
}

let rotate3 = () =>{
    tl.to('#page3 > .bCircle',{
        delay:1,
        duration:4.5,
        rotate:"-720deg",
    },'thrid')
    
    tl.to('#page3 > .smCircle',{
        delay:1,
        duration:4.2,
        rotate:"720deg",
    },'thrid')
    
    tl.to('#page3 > .mnCircle',{
        delay:1,
        duration:4.8,
        rotate:"-720deg",
    },'thrid')
}

let rotate4 = () =>{
    tl.to('#page4 > .bCircle',{
        duration:4.5,
        rotate:"-720deg",
    },'forth')
    
    tl.to('#page4 > .smCircle',{
        duration:4.2,
        rotate:"720deg",
    },'forth')
    
    tl.to('#page4 > .mnCircle',{
        duration:4.8,
        rotate:"-720deg",
    },'forth')
}

let current = 0;
let page = document.querySelectorAll(".page");

let button = document.querySelector('#rghtbtn');

button.addEventListener('click',() =>{
        
            if(page[0] == page[current]){
                page1();
                current++;
            }
            else if(page[1] == page[current]){
                page2();
                    tl.to(page[1], {
                        opacity: 0,
                    },'p2same')
                    tl.to(page[2], {
                        opacity: 0,
                    },'p2same')
                current++;
            }
        
            else if(page[2] == page[current]){
                page3();
                tl.to(page[2], {
                    opacity: 0,
                },'p3same')
                tl.to(page[3], {
                    opacity: 0,
                },'p3same')
                current++;
            }
            else{
                current = 0;
            }
            if(page[0] == page[current]){
                page1();
                current++;
            }
            else if(page[1] == page[current]){
                page2();
                    tl.to(page[1], {
                        opacity: 0,
                    },'p2same')
                    tl.to(page[2], {
                        opacity: 0,
                    },'p2same')
                current++;
            }
        
            else if(page[2] == page[current]){
                page3();
                tl.to(page[2], {
                    opacity: 0,
                },'p3same')
                tl.to(page[3], {
                    opacity: 0,
                },'p3same')
                current++;
            }
        
})

let page1 = () => {
    tl.to(page[0], {
        duration:.02,
        opacity: 0,
    },rotate(),'same')
    tl.from(page[1], {
        opacity: 1,
        duration:.2,
    },'same')
}

let page2 = () => {
    
    tl.to(page[1], {
        duration:.02,
        opacity: 0,
    },rotate2(),'change')

    tl.from(page[2], {
        delay:0.05,
        opacity: 1,
        duration:.02,
    },'change')
}

let page3 = () => {
    tl.from(page[2], {
        duration:.02,
   
        opacity: 0,
    },rotate3(),'last')

    tl.from(page[3], {
        delay:0.05,
        opacity: 1,
        duration:.02,
    },'last')
    rotate4()
}

