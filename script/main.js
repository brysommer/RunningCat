const el = document.querySelector('.cat');
let i = 1;
console.log(el);

el.addEventListener('mouseenter', e => {
    if (i % 2 === 0) {
        console.log('left');
        el.style.left = '50px';        
    };
    if (i % 2 > 0) {
        console.log('right');
        el.style.left = '850px';
    }
    i +=1;
    console.log(i);
})