document.documentElement.scrollTop = 0;

// Scroll Event on the entire document
document.addEventListener('scroll', changePageState);

// Event listener on the navbar icons
document.querySelector('.main-navbar').addEventListener('click', changeScrollY);

// Event Listener on the plus icon in the projects section
document.querySelector('.section-f').addEventListener('click', displayModal);

document.querySelector('.circles').addEventListener('click', changeTestimonial);

document.querySelector('.menu-icon').addEventListener('click', openMenu);

// Change background and color of home icon
document.querySelector('.fa-home').style.background = '#333';
document.querySelector('.fa-home').style.color = '#fff';

document.querySelector('.circle-1').style.background = '#fff';

window.addEventListener('resize', () => {
  if (window.innerWidth > 640) {
    document.querySelector('.main-navbar').style.transform = 'translateX(0)';
  }
});

// Below is the type writer function and all of its variables
let word = 'Web Developer';
let printCount = 0;
let printEnd = 0;
let index = 0;

setInterval(() => {
  if (index < word.length) {
    document.querySelector('.showcase-txt').textContent += word[index];
    index++;
  } else {
    // setTimeout(() => {
    let textContent = document.querySelector('.showcase-txt').textContent;
    textContent = textContent.substr(0, textContent.length - 1);
    document.querySelector('.showcase-txt').textContent = textContent;
    printEnd++;
    if (printEnd === word.length) {
      printEnd = 0;
      printCount++;
      if (printCount === 1) {
        word = 'Photographer';
        index = 0;
      } else if (printCount === 2) {
        word = 'UI/UX Designer';
        index = 0;
      } else {
        word = 'Web Developer';
        printCount = 0;
        index = 0;
      }
    }
    // }, 3000);
  }
}, 300);

let runCounter = false;

// Change the state
function changePageState() {
  // Get the scrollY position of the document
  let scrollY = window.scrollY;

  // console.log(window.innerWidth);

  /* If scoll position is greater than 10 than change the background and
  color of the home icon */

  if (scrollY > 581) {
    document.querySelector('.fa-home').style.background = '#fff';
    document.querySelector('.fa-home').style.color = '#333';

    /* If scroll position is not geater than 581 then change the background and
    color of the home icon to default */
  } else {
    document.querySelector('.fa-home').style.background = '#333';
    document.querySelector('.fa-home').style.color = '#fff';
  }

  /* When we scroll to the about section then change the background and color
  of the about icon and display the about section */

  if (scrollY >= 10 && scrollY <= 819) {
    // Display the about section
    document.querySelector('.section-b').style.opacity = '1';

    /* Change the background and color of the about icon when we reach this
    position */
    if (scrollY >= 511) {
      // Change the background and color of the about icon
      document.querySelector('.fa-user').style.background = '#333';
      document.querySelector('.fa-user').style.color = '#fff';
    } else {
      document.querySelector('.fa-user').style.background = '#fff';
      document.querySelector('.fa-user').style.color = '#333';
    }

    /* If scroll position is greater than 1026 then do the following */
  } else if (scrollY > 1026) {
    document.querySelector('.fa-user').style.background = '#fff';
    document.querySelector('.fa-user').style.color = '#333';
  }

  /* Display the skills section and when we scroll down to it */
  if (scrollY >= 574 && scrollY <= 1230) {
    document.querySelector('.skills').style.display = 'block';
  }

  /* Display the achievements section and when we scroll down to it */
  if (scrollY >= 1247 && scrollY <= 1514) {
    document.querySelector('.achievements').style.opacity = '1';

    if (!runCounter) {
      runCounter = true;

      let totalClients = 0;
      let clear1 = setInterval(function () {
        totalClients++;
        document.querySelector('.number-1').textContent = totalClients;
        if (totalClients == 412) {
          clearInterval(clear1);
        }
      }, 1);

      let totalProjects = 0;
      let clear2 = setInterval(function () {
        totalProjects++;
        document.querySelector('.number-2').textContent = totalProjects;
        if (totalProjects == 322) {
          clearInterval(clear2);
        }
      }, 1);

      let hoursWorked = 0;
      let clear3 = setInterval(function () {
        hoursWorked++;
        document.querySelector('.number-3').textContent = hoursWorked;
        if (hoursWorked == 1132) {
          clearInterval(clear3);
        }
      }, 1);

      let totalAwards = 0;
      let clear4 = setInterval(function () {
        totalAwards++;
        document.querySelector('.number-4').textContent = totalAwards;
        if (totalAwards == 47) {
          clearInterval(clear4);
        }
      }, 50);
    }
  }

  /* Display the resume section and when we scroll down to it and 
  change the background and color of the resume icon  */

  if (scrollY >= 1507 && scrollY <= 2295) {
    document.querySelector('.section-d').style.opacity = '1';

    /* Change the background and color of the resume icon when we reach this
    position */
    if (scrollY >= 1983 && scrollY <= 2464) {
      document.querySelector('.fa-file').style.background = '#333';
      document.querySelector('.fa-file').style.color = '#fff';
    } else {
      document.querySelector('.fa-file').style.background = '#fff';
      document.querySelector('.fa-file').style.color = '#333';
    }

    /* If scroll position is greater than 2464 then do the following */
  } else if (scrollY > 2664) {
    document.querySelector('.fa-file').style.background = '#fff';
    document.querySelector('.fa-file').style.color = '#333';
  }

  /* Display the testimonials section and when we scroll down to it and 
  change the background and color of the testimonial icon  */

  if (scrollY >= 2223 && scrollY <= 2780) {
    document.querySelector('.section-e').style.opacity = '1';

    /* Change the background and color of the testimonials icon when we reach this
    position */
    if (scrollY >= 2668 && scrollY <= 2968) {
      document.querySelector('.fa-comment-dots').style.background = '#333';
      document.querySelector('.fa-comment-dots').style.color = '#fff';
    } else {
      document.querySelector('.fa-comment-dots').style.background = '#fff';
      document.querySelector('.fa-comment-dots').style.color = '#333';
    }

    /* If scroll position is greater than 3068 then do the following */
  } else if (scrollY > 3068) {
    document.querySelector('.fa-comment-dots').style.background = '#fff';
    document.querySelector('.fa-comment-dots').style.color = '#333';
  }

  /* Display the projects section when we scroll down to it and 
  change the background and color of the project icon  */

  if (scrollY >= 2727 && scrollY <= 3730) {
    document.querySelector('.section-f').style.opacity = '1';

    /* Change the background and color of the project icon when we reach this
    position */
    if (scrollY >= 3100 && scrollY <= 4047) {
      document.querySelector('.fa-project-diagram').style.background = '#333';
      document.querySelector('.fa-project-diagram').style.color = '#fff';
    } else {
      document.querySelector('.fa-project-diagram').style.background = '#fff';
      document.querySelector('.fa-project-diagram').style.color = '#333';
    }

    /* If scroll position is greater than 4047 then do the following */
  } else if (scrollY > 4047) {
    document.querySelector('.fa-project-diagram').style.background = '#fff';
    document.querySelector('.fa-project-diagram').style.color = '#333';
  }

  /* Display the contact section when we scroll down to it and 
  change the background and color of the contact icon  */

  if (scrollY >= 3824 && scrollY <= 4239) {
    document.querySelector('.section-g').style.opacity = '1';
    document.querySelector('.lets-start').style.opacity = '1';
    document.querySelector('.main-footer').style.opacity = ' 1';

    /* Change the background and color of the contact icon when we reach this
    position */
    if (scrollY >= 4047 && scrollY <= 4324) {
      document.querySelector('.fa-address-book').style.background = '#333';
      document.querySelector('.fa-address-book').style.color = '#fff';
    } else {
      document.querySelector('.fa-address-book').style.background = '#fff';
      document.querySelector('.fa-address-book').style.color = '#333';
    }

    /* If scroll position is greater than 4324 then do the following */
  } else if (scrollY > 4324) {
    document.querySelector('.fa-address-book').style.background = '#fff';
    document.querySelector('.fa-address-book').style.color = '#333';
  }
}

let isOpen = false;
function openMenu() {
  if (!isOpen) {
    document.querySelector('.main-navbar').style.transform = 'translateX(0)';
    isOpen = true;
  } else {
    document.querySelector('.main-navbar').style.transform =
      'translateX(-300px)';
    isOpen = false;
  }
}

function changeScrollY(e) {
  document.querySelector('.main-navbar').style.transform = 'translateX(-300px)';
  if (window.innerWidth > 600) {
    if (e.target.classList.contains('fa-home')) {
      window.scrollTo(0, 0);
    } else if (e.target.classList.contains('fa-user')) {
      window.scrollTo(0, 550);
    } else if (e.target.classList.contains('fa-file')) {
      window.scrollTo(0, 2400);
    } else if (e.target.classList.contains('fa-comment-dots')) {
      window.scrollTo(0, 2900);
    } else if (e.target.classList.contains('fa-project-diagram')) {
      window.scrollTo(0, 3840);
    } else if (e.target.classList.contains('fa-address-book')) {
      window.scrollTo(0, 4324);
    }
  } else {
    if (e.target.classList.contains('fa-home')) {
      window.scrollTo(0, 0);
    } else if (e.target.classList.contains('fa-user')) {
      window.scrollTo(0, 830);
    } else if (e.target.classList.contains('fa-file')) {
      window.scrollTo(0, 3390);
    } else if (e.target.classList.contains('fa-comment-dots')) {
      window.scrollTo(0, 4600);
    } else if (e.target.classList.contains('fa-project-diagram')) {
      window.scrollTo(0, 5310);
    } else if (e.target.classList.contains('fa-address-book')) {
      window.scrollTo(0, 7520);
    }
  }
}

function displayModal(e) {
  let className = e.target.classList[0];

  let number;

  if (
    className === 'plus-1' ||
    className === 'plus-2' ||
    className === 'plus-3' ||
    className === 'plus-4' ||
    className === 'plus-5' ||
    className === 'plus-6' ||
    className === 'plus-7' ||
    className === 'plus-8' ||
    className === 'plus-9'
  ) {
    number = e.target.classList[0];
    number = number.split('-');
    number = number[1];

    document
      .querySelector('.modal-img')
      .setAttribute('src', `./images/Projects/item${number}.png`);
    document.querySelector('.modal').style.display = 'block';
  }

  if (e.target.className === 'modal') {
    document.querySelector('.modal').style.display = 'none';
  }
}

function changeTestimonial(e) {
  let nodeList = document.querySelector('.circles').childNodes;

  let className;

  let className2;

  nodeList = Array.from(nodeList);

  nodeList.forEach(function (circle, index) {
    if (index == 1 || index == 3 || index == 5 || index == 7 || index == 9) {
      if (circle.style.background === 'rgb(255, 255, 255)') {
        className = circle.classList[1];
      }
    }
  });

  className = className.split('-');
  className = className[1];

  className2 = e.target.classList[1];
  className2 = className2.split('-');
  className2 = className2[1];

  document.querySelector(`.testimonial-${className}`).style.display = 'none';
  document.querySelector(`.testimonial-${className2}`).style.display = 'block';
  document.querySelector(`.circle-${className}`).style.background =
    'rgb(112, 112, 112)';
  e.target.style.background = '#fff';
}
