document.addEventListener('DOMContentLoaded', function() { 

    const el = document.querySelectorAll('.section-title');  

    const cb = function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const ta = new TextAnimation(entry.target);
                ta.animate();
                observer.unobserve(entry.target);
            }        
        });
    }

    const options = {
        root:null,
        rootMargin: "10px 0px",
        threshold: [0, 0.5, 1]
    }

    const io = new IntersectionObserver(cb, options);
    el.forEach(el => io.observe(el));
    new MobileMenu();
});









