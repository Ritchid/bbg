
let allPara = document.querySelectorAll('.paras')
let btn = document.querySelector('.more')
let arrPara = Array.from(allPara);
arrPara.forEach((para, i) => {
  para.style.display = "none";
});

let start = arrPara.splice(0, 2).forEach(res => res.style.display = 'block')

console.log(start)
console.log(arrPara)

btn.addEventListener('click', () => {
    arrPara.forEach((res) => (res.style.display = "block"));
    setTimeout(()=>btn.style.display = 'none')
}, 500)

