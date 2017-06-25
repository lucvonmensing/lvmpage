(function () {
    'use strict';

    const images = document.querySelectorAll('.instagram .content__preload');

    if (!images.length) {
        return;
    }

    const request = new XMLHttpRequest();
    request.open('GET', '/api/instagram/', true);
    request.onload = function () {
        if (request.status !== 200) {
            return
        }

        const response = JSON.parse(request.responseText);

        if (response.error) {
            image.setAttribute('href', 'https://www.instagram.com/p/' + id);
            image.setAttribute('title', 'Explore Image on Instagram');
            image.innerHTML = 'Explore Image on Instagram';
            image.classList.remove('content__preload');
            return;
        }

        for (let i = 0; i < 6; i++) {
            const data = response.items[i];
            images[i].classList.add('instagram__item');
            images[i].setAttribute('href', data.link);
            images[i].setAttribute('target', "_blank");
            images[i].innerHTML = '<img src="' + data.images.standard_resolution.url + '"><div class="instagram__content"><span class="instagram__likes"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#ffffff" d="M8,13L2.941,8.211C1.774,7.107,1.68,5.217,2.729,3.99c1.05-1.228,2.847-1.327,4.014-0.223L8,4.957 l1.256-1.19c1.166-1.103,2.964-1.005,4.014,0.223c1.052,1.227,0.956,3.117-0.211,4.222L8,13z"/></svg>' + data.likes.count + '</span><span class="instagram__comments"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#ffffff" d="M13,4v3c0,1.654-1.346,3-3,3H6.914l-1,1H8.5l3.5,3.5V11h1c1.104,0,2-0.896,2-2V6 C15,4.896,14.104,4,13,4z"/><path fill="#ffffff" d="M10,2H2C0.896,2,0,2.896,0,4v3c0,1.104,0.896,2,2,2h1v3.5L6.5,9H10c1.104,0,2-0.896,2-2V4 C12,2.896,11.104,2,10,2z"/></svg>' + data.comments.count + '</span></div></a>';
            images[i].classList.remove('content__preload');
        }
    };

    request.send();
})();