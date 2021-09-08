function scrollActive(){
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && ( scrollY <= sectionTop + sectionHeight )){
            console.log(document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link'));
        }else{
            console.log(document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link'));
        }
    })
}


export { scrollActive };
