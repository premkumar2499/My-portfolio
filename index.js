const navDown = ()=>{
    const burger = document.querySelector('.menu');
    const nav = document.querySelector('.nav-ul');
    console.log(nav);
    burger.addEventListener('click',()=>{
        nav.classList.toggle('active');
    });
}

const navlink = ()=>{
    const nav = document.querySelector('.nav-ul');
    console.log(nav);
    var elements = document.querySelectorAll('.nav-link');
    console.log(elements);
    for(var i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener('click',()=>{
            nav.classList.toggle('active');
        });
    }
}

let projects = [
    {
        "project-name":"bluar",
        "project-img":"./ardiuno.jpg",
        "project-desc":"It is a etooth controlled  device which controls the home appliances based on bluetooth signals.The main part is Arduino which connects to bluetooth and to any home appliance through relay which is a magnetic switch.We designed a mobile application which controlls the device and switches the appliance ON/OFF.",
    },
    {
        "project-name":"book",
        "project-img":"./book_store.jpg",
        "project-desc":"It is a etooth controlled  device which controls the home appliances based on bluetooth signals.The main part is Arduino which connects to bluetooth and to any home appliance through relay which is a magnetic switch.We designed a mobile application which controlls the device and switches the appliance ON/OFF.",
    },
    {
        "project-name":"sih",
        "project-img":"./sih.jpg",
        "project-desc":"It is a etooth controlled  device which controls the home appliances based on bluetooth signals.The main part is Arduino which connects to bluetooth and to any home appliance through relay which is a magnetic switch.We designed a mobile application which controlls the device and switches the appliance ON/OFF.",
    },
    {
        "project-name":"price",
        "project-img":"./house.jpg",
        "project-desc":"It is a etooth controlled  device which controls the home appliances based on bluetooth signals.The main part is Arduino which connects to bluetooth and to any home appliance through relay which is a magnetic switch.We designed a mobile application which controlls the device and switches the appliance ON/OFF.",
    },
    {
        "project-name":"egg",
        "project-img":"./Eggheads.png",
        "project-desc":"It is a etooth controlled  device which controls the home appliances based on bluetooth signals.The main part is Arduino which connects to bluetooth and to any home appliance through relay which is a magnetic switch.We designed a mobile application which controlls the device and switches the appliance ON/OFF.",
    }

]

const toggle_proj = ()=>{
    const bluar = document.querySelector('#bluar');
    const book = document.querySelector('#book');
    const sih = document.querySelector('#sih');
    const price = document.querySelector('#price');
    const egg = document.querySelector('#egg');
    bluar.addEventListener('click',()=>{
        document.querySelector('.pro-img').src = "./ardiuno.jpg";
        document.querySelector('.project-head').innerHTML = "<h4>BLUAR Device</h4>";
        document.querySelector('.project-text').innerHTML = "<p>It is a bluetooth controlled  device which controls the home appliances based on bluetooth signals.The main part is Arduino which connects to bluetooth and to any home appliance through relay which is a magnetic switch.We designed a mobile application which controlls the device and switches the appliance ON/OFF.</p>"
    });
    book.addEventListener('click',()=>{
        document.querySelector('.pro-img').src = "./book_store.jpg";
        document.querySelector('.project-head').innerHTML = "<h4>Book Store</h4>";
        document.querySelector('.project-text').innerHTML = "<p>It is a online book store application which is built using Python flask framework which is a very popular framework for beginers.</p>"
    });
    sih.addEventListener('click',()=>{
        document.querySelector('.pro-img').src = "./sih.jpg";
        document.querySelector('.project-head').innerHTML = "<h4>Smart India Hackathon</h4>";
        document.querySelector('.project-text').innerHTML = "<p>Participated in SMART INDIA HACKATHON SOFTWARE EDITION</p>"
    });
    price.addEventListener('click',()=>{
        document.querySelector('.pro-img').src = "./house.jpg";
        document.querySelector('.project-head').innerHTML = "<h4>Price Prediction</h4>";
        document.querySelector('.project-text').innerHTML = "<p>It is a bluetooth controlled  device which controls the home appliances based on bluetooth signals.The main part is Arduino which connects to bluetooth and to any home appliance through relay which is a magnetic switch.We designed a mobile application which controlls the device and switches the appliance ON/OFF.</p>"
    });
    egg.addEventListener('click',()=>{
        document.querySelector('.pro-img').src = "./Eggheads.png";
        document.querySelector('.project-head').innerHTML = "<h4>Eggheads App</h4>";
        document.querySelector('.project-text').innerHTML = "<p>It is a bluetooth controlled  device which controls the home appliances based on bluetooth signals.The main part is Arduino which connects to bluetooth and to any home appliance through relay which is a magnetic switch.We designed a mobile application which controlls the device and switches the appliance ON/OFF.</p>"
    });
}
console.log('prem');
navDown();
toggle_proj();
navlink();