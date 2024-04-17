const bookmark = document.querySelector('.bmk');
const modal_success = document.querySelector('.modal-success');
const reward_1 =  document.querySelector('.reward1');
const got_it =  document.querySelector('.got-it');
const open = document.querySelector('.hambugger');
const nav = document.querySelector('nav');

bookmark.onclick =()=>{
    bookmark.textContent = 'bookmarked';
}
reward_1.addEventListener('click', ()=>{
    modal_success.style.display  =  'flex';
});
got_it.addEventListener('click', ()=>{
    modal_success.style.display = 'none';
})
open.onclick =()=>{
    nav.style.display = 'block';
}