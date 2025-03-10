let menuBtn = document.querySelector ("#menu-open");
let navbar = document.querySelector (".navbar");

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height ) {
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuBtn.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}