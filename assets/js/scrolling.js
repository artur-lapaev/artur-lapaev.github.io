
(function () {
    let arrayImg = ["about", "skills", "projects", "socials"];
    let number = 1;
    let item = 0;
    let oldSrc = ["url(./assets/img/about.jpg)"];
    //display block settings by defaulting
    let className = ["name-block", "project-block", "skills-block", "contact-block"];
    let defaultBlockShow = className[0];
    let area = document.querySelector(".content__header");
    area.classList.add(defaultBlockShow);
    generateBlock('', true);
    //////////////////////////////////////////////////////////////////////////
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

        let deletePopup = document.querySelector(".popup__message");
        if (deletePopup) {
            document.body.removeChild(deletePopup);
        }

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

        showNextBlock(className, number);
        generateBlock(className[number], false);

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

    function showNextBlock(className, item) {
        if (area.classList[1] === "contact-block") {
            area.classList.remove(className[3]);
        } else {
            area.classList.remove(className[item - 1]);
        }
        area.classList.add(className[item]);
    }
    function generateBlock(className, setDefault) {
        let classNameNameBlock = ["header__author-name", "header__author-profession", "header__author-dev-text"];
        let textDataNameBlock = ["ARTUR LAPAEV", "FRONT-END", "DevelopeR"];

        if (setDefault === true) {
            for (let i = 0; i < classNameNameBlock.length; i++) {
                let elem = document.createElement("div");
                elem.classList.add(classNameNameBlock[i]);
                if (i === 2) {
                    for (let s = 0; s < textDataNameBlock[i].length; s++) {
                        let element = document.createElement("div");
                        let randomDelayForRotateAnimation = Math.floor(Math.random() * (8 - 0)) + 0;
                        element.innerHTML = textDataNameBlock[i].charAt(s);
                        element.style.animationDelay = "" + randomDelayForRotateAnimation + "s";
                        elem.appendChild(element);
                    }

                    setInterval(function () {
                        for (let a = 0; a != elem.childNodes.length;) {
                            elem.removeChild(elem.childNodes[a]);
                        }
                        for (let s = 0; s < textDataNameBlock[i].length; s++) {
                            let element = document.createElement("div");
                            let randomDelayForRotateAnimation = Math.floor(Math.random() * (8 - 0)) + 0;
                            element.innerHTML = textDataNameBlock[i].charAt(s);
                            element.style.animationDelay = "" + randomDelayForRotateAnimation + "s";
                            elem.appendChild(element);
                        }
                    }, 4000);

                } else {
                    elem.innerHTML = textDataNameBlock[i];
                }
                area.appendChild(elem);
            }
        } else {
            for (let i = 0; i != area.childNodes.length;) {
                area.removeChild(area.childNodes[i]);
            }
        }

        switch (className) {
            case "name-block": {
                generateBlock('', true);
            }
                break;
            case "project-block": {
                let classNameProjectBlock = ["project-caption",
                    { className: "bananaBEM", link: "https://bananabem-7967d.firebaseapp.com/", nameProject: "bananaBEM" }
                ];
                let containerBlock = document.createElement("div");
                containerBlock.classList.add("header__project");
                area.appendChild(containerBlock);

                for (let i = 0; i < classNameProjectBlock.length; i++) {
                    let elem = document.createElement("div");
                    let linkElem = document.createElement("a");
                    let textElem = document.createElement("div");
                    if (i !== 0) {
                        elem.classList.add("container__project");
                        elem.classList.add(classNameProjectBlock[i].className);
                        linkElem.setAttribute("href", classNameProjectBlock[i].link);
                        linkElem.setAttribute("target", "_blank");
                        linkElem.innerHTML = classNameProjectBlock[i].nameProject
                        elem.classList.add(classNameProjectBlock[i].className);
                        textElem.classList.add("text-hover");

                        textElem.appendChild(linkElem);
                        elem.appendChild(textElem);
                    } else {
                        elem.classList.add(classNameProjectBlock[i]);
                    }

                    containerBlock.appendChild(elem);
                }
                containerBlock.childNodes[0].innerHTML = "PROJECTS: ";
            }
                break;
            case "skills-block": {
                let classNameSkillsBlock = ["skills-caption", "angular", "css", "html", "js", "git", "nodejs"];
                let containerBlock = document.createElement("div");
                containerBlock.classList.add("header__skills");
                area.appendChild(containerBlock);

                for (let i = 0; i < classNameSkillsBlock.length; i++) {
                    let elem = document.createElement("div");
                    if (i !== 0) {
                        elem.classList.add("skills-icon");
                    }
                    elem.classList.add(classNameSkillsBlock[i]);
                    containerBlock.appendChild(elem);
                }
                containerBlock.childNodes[0].innerHTML = "Work with:";

            }
                break;
            case "contact-block": {
                let classNameContactBlock = ["contact-caption",
                    { className: "vk", link: "https://vk.com/id183164093" },
                    { className: "skype", link: "skype:artur.lapaev?add" },
                    { className: "google", link: "mailto:mr.sed1337@gmail.com" },
                    { className: "linkedin", link: "https://www.linkedin.com/in/artur-lapaev-b88a07134/" },
                    { className: "github", link: "https://github.com/artur-lapaev" },
                ];
                if (osLinux > 0) {
                    for (let i = 0; i < classNameContactBlock.length; i++) {
                        if (typeof (classNameContactBlock[i]) === "object" && classNameContactBlock[i].className === "google" || classNameContactBlock[i].className === "mail") {
                            classNameContactBlock[i].link = "event";
                        }
                    }
                }
                let containerBlock = document.createElement("div");
                containerBlock.classList.add("header__contact");
                area.appendChild(containerBlock);

                for (let i = 0; i < classNameContactBlock.length; i++) {
                    let elem = document.createElement("div");
                    let linkElem = document.createElement("a");
                    if (i !== 0) {
                        elem.classList.add("contact-icon");
                        elem.classList.add(classNameContactBlock[i].className);

                        if (typeof (classNameContactBlock[i]) === "object" && classNameContactBlock[i].link === "event") {
                            linkElem.addEventListener("click", () => {
                                alert('You use linux system, copy my email: mr.sed1337@gmail.com');
                            }, false);
                        } else {
                            linkElem.setAttribute("href", classNameContactBlock[i].link);
                        }
                        elem.appendChild(linkElem);
                    } else {
                        elem.classList.add(classNameContactBlock[i]);
                    }

                    containerBlock.appendChild(elem);
                }
                containerBlock.childNodes[0].innerHTML = "My contacts:";
            }
                break;
        }
    }
}());
