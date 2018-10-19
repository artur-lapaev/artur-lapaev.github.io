
(function () {
    let arrayImg = ["about", "skills", "projects", "socials"];
    let number = 1;
    let item = 0;
    let oldSrc = ["url(./assets/img/about.jpg)"];
    //checking desktop or tablet or phone
    let typeDevice = window.navigator.userAgent;
    let typeEvent = "";
    let osLinux = typeDevice.indexOf("Linux");
    let osWindows = typeDevice.indexOf("Windows");
    let mobile = typeDevice.indexOf("Mobile");

    if (osLinux) {
        typeEvent = "whell";
    }
    if (osWindows) {
        typeEvent = "whell";
    }
    if (mobile > osLinux) {
        typeEvent = "touchend";
    }

    if (typeEvent === "whell") {
        document.body.addEventListener("wheel", () => {

            createAnimationBackground();

        }, false);
    } else {
        let startX,
            startY,
            threshold = 150,
            distX,
            distY;
        document.body.addEventListener("touchstart", (e) => {
            let touchobj = e.changedTouches[0];
            distX = 0;
            distY = 0;
            startX = touchobj.pageX;
            startY = touchobj.pageY;
            e.preventDefault();
        }, false);
        document.body.addEventListener("touchmove", (e) => {
            e.preventDefault();
        }, false);
        document.body.addEventListener("touchend", (e) => {
            let touchobj = e.changedTouches[0];
            distX = touchobj.pageX - startX;
            distY = touchobj.pageY - startY;
            if (distY < 40 && distY > -50 && distX !== 0) {

                createAnimationBackground();
            }

            e.preventDefault();
        }, false);
    }

    function createAnimationBackground() {
        
        document.body.style.backgroundImage = "url()";
        let findElem = document.querySelector(".image-div");
        let findOldElem = document.querySelector(".image-div-old");
        if (findElem !== null && findOldElem !== null) {
            document.body.removeChild(findElem);
            document.body.removeChild(findOldElem);
        }
        
        let createElemForBG = document.createElement("div");
        createElemForBG.setAttribute("class", "image-div");
        createElemForBG.style.backgroundImage = `url(./assets/img/${arrayImg[number]}.jpg)`;
                
        let currentSrc = createElemForBG.style.backgroundImage;
        if (oldSrc.length == 0 && oldSrc[item] !== currentSrc) {
            oldSrc.push(createElemForBG.style.backgroundImage);
        } else {
            oldSrc.push(createElemForBG.style.backgroundImage);
            item++;
        }

        document.body.appendChild(createElemForBG);
        
        let createOldElement = document.createElement("div");
        createOldElement.setAttribute("class", "image-div-old");
        for (let i = 0; i < 11; i++) {
            let createElement = document.createElement("div");
            createElement.setAttribute("class", "part");
            createElement.style.backgroundImage = oldSrc[item - 1];
            createOldElement.appendChild(createElement);
        }
        document.body.appendChild(createOldElement);

        let findAllPartElement = document.querySelectorAll(".part");
        let allPartElement = findAllPartElement;

        randomSwitchHeight(allPartElement);
        
        if (number >= arrayImg.length - 1) {
            number = 0;
            if (oldSrc.length >= 5) {
                oldSrc = ["url(./assets/img/about.jpg)"];
                item = 0;
            }
        } else {
            number++;
            if (oldSrc.length >= 5) {
                oldSrc = ["url(./assets/img/about.jpg)"];
                item = 0;
            }
        }
    }
    function randomSwitchHeight(elems) {
        let ements = elems;
        let animate = ["pyramid", "topLeft", "topRight", "bottomPyramid"];
        let randomElementChoose = Math.floor(Math.random() * (4 - 0)) + 0;

        return generateAnimate(animate[randomElementChoose], ements);

    }

    function generateAnimate(animate, elems) {
        switch (animate) {
            case "pyramid":
                //animation block
                {
                    let duration = 900;
                    for (let i = 0; i < elems.length; i++) {
                        let animation = elems[i].animate([
                            { transform: 'translate(0)' },
                            { transform: 'translateY(-100%)' }
                        ], duration);

                        animation.addEventListener('finish', function () {
                            elems[i].style.transform = 'translateY(-100%)';
                        });
                        if (i == 4) {
                            duration = 300;
                            duration = duration - 175;
                        } else if (i > 4) {
                            if (duration <= 0) {
                                duration = 100;
                            }
                            duration = duration + 100;
                        } else {
                            duration = duration - 175;
                        }
                    }
                }
                break;
            case "topLeft":
                // ainimation block
                {
                    let duration = 100;
                    for (let i = 0; i < elems.length; i++) {
                        let animation = elems[i].animate([
                            { transform: 'translate(0)' },
                            { transform: 'translateY(-100%)' }
                        ], duration);

                        animation.addEventListener('finish', function () {
                            elems[i].style.transform = 'translateY(-100%)';
                        });

                        duration = duration + 175;
                    }
                }
                break;
            case "topRight":
                // ainimation block
                {
                    let duration = 100;
                    for (let i = elems.length - 1; i >= 0; i--) {
                        let animation = elems[i].animate([
                            { transform: 'translate(0)' },
                            { transform: 'translateY(-100%)' }
                        ], duration);

                        animation.addEventListener('finish', function () {
                            elems[i].style.transform = 'translateY(-100%)';
                        });

                        duration = duration + 175;
                    }
                }
                break;
            case "bottomPyramid":
                //animation block
                {
                    let duration = 300;
                    for (let i = 0; i < elems.length; i++) {
                        let animation = elems[i].animate([
                            { transform: 'translate(0)' },
                            { transform: 'translateY(-100%)' }
                        ], duration);

                        animation.addEventListener('finish', function () {
                            elems[i].style.transform = 'translateY(-100%)';
                        });
                        if (i >= 2) {
                            if (i > 6) {
                                duration = 300;
                                duration = duration + 175;
                            } else if (i === 5 || i > 5) {
                                duration = duration - 500;
                            } else {
                                duration = duration + 500;
                            }
                        } else {
                            duration = 300;
                            duration = duration + 175;
                        }
                    }
                }
                break;
        }

    }

}());
