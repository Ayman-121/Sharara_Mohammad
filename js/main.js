let click = document.querySelector("#click")
let nav = document.querySelector("#nav")

click.onclick = function () {
  nav.classList.toggle("none")
  nav.classList.toggle("styled-nav")
}

let vid1 = document.querySelector("#vid1")

vid1.onclick = function () {
  let overlay = document.createElement("div")
  overlay.classList.add("overlay")
  document.body.appendChild(overlay)

  let exit = document.createElement("div")
  exit.innerHTML = "X"
  exit.classList.add("exit")
  overlay.appendChild(exit)

  exit.onclick = function () {
    overlay.remove()
  }

  let video = document.createElement("video")
  video.src = "../videos/video(1).mp4"
  video.classList.add("video")
  video.play()
  video.controls = true;
  overlay.appendChild(video)

  let buttonsCont = document.createElement("div")
  buttonsCont.classList.add("buttonsCont")
  overlay.appendChild(buttonsCont)

  let startButton = document.createElement("button")
  startButton.innerHTML = '<i class="fa-solid fa-play"></i>'
  startButton.classList.add("startButton", "button")
  buttonsCont.appendChild(startButton)

  startButton.onclick = function () {
    video.play()
  }

  let pauseButton = document.createElement("button")
  pauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>'
  pauseButton.classList.add("pauseButton", "button")
  buttonsCont.appendChild(pauseButton)

  pauseButton.onclick = function () {
    video.pause()
  }
}

let vid2 = document.querySelector("#vid2")

vid2.onclick = function () {
  let overlay = document.createElement("div")
  overlay.classList.add("overlay")
  document.body.appendChild(overlay)

  let exit = document.createElement("div")
  exit.innerHTML = "X"
  exit.classList.add("exit")
  overlay.appendChild(exit)

  exit.onclick = function () {
    overlay.remove()
  }

  let video = document.createElement("video")
  video.src = "../videos/video(2).mp4"
  video.classList.add("video")
  video.play()
  video.controls = true;
  overlay.appendChild(video)

  let buttonsCont = document.createElement("div")
  buttonsCont.classList.add("buttonsCont")
  overlay.appendChild(buttonsCont)

  let startButton = document.createElement("button")
  startButton.innerHTML = '<i class="fa-solid fa-play"></i>'
  startButton.classList.add("startButton", "button")
  buttonsCont.appendChild(startButton)

  startButton.onclick = function () {
    video.play()
  }

  let pauseButton = document.createElement("button")
  pauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>'
  pauseButton.classList.add("pauseButton", "button")
  buttonsCont.appendChild(pauseButton)

  pauseButton.onclick = function () {
    video.pause()
  }
}

let vid3 = document.querySelector("#vid3")

vid3.onclick = function () {
  let overlay = document.createElement("div")
  overlay.classList.add("overlay")
  document.body.appendChild(overlay)

  let exit = document.createElement("div")
  exit.innerHTML = "X"
  exit.classList.add("exit")
  overlay.appendChild(exit)

  exit.onclick = function () {
    overlay.remove()
  }

  let video = document.createElement("video")
  video.src = "../videos/video(3).mp4"
  video.classList.add("video")
  video.play()
  video.controls = true;
  overlay.appendChild(video)

  let buttonsCont = document.createElement("div")
  buttonsCont.classList.add("buttonsCont")
  overlay.appendChild(buttonsCont)

  let startButton = document.createElement("button")
  startButton.innerHTML = '<i class="fa-solid fa-play"></i>'
  startButton.classList.add("startButton", "button")
  buttonsCont.appendChild(startButton)

  startButton.onclick = function () {
    video.play()
  }

  let pauseButton = document.createElement("button")
  pauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>'
  pauseButton.classList.add("pauseButton", "button")
  buttonsCont.appendChild(pauseButton)

  pauseButton.onclick = function () {
    video.pause()
  }
}

let vid4 = document.querySelector("#vid4")

vid4.onclick = function () {
  let overlay = document.createElement("div")
  overlay.classList.add("overlay")
  document.body.appendChild(overlay)

  let exit = document.createElement("div")
  exit.innerHTML = "X"
  exit.classList.add("exit")
  overlay.appendChild(exit)

  exit.onclick = function () {
    overlay.remove()
  }

  let video = document.createElement("video")
  video.src = "../videos/video(4).mp4"
  video.classList.add("video")
  video.play()
  video.controls = true;
  overlay.appendChild(video)

  let buttonsCont = document.createElement("div")
  buttonsCont.classList.add("buttonsCont")
  overlay.appendChild(buttonsCont)

  let startButton = document.createElement("button")
  startButton.innerHTML = '<i class="fa-solid fa-play"></i>'
  startButton.classList.add("startButton", "button")
  buttonsCont.appendChild(startButton)

  startButton.onclick = function () {
    video.play()
  }

  let pauseButton = document.createElement("button")
  pauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>'
  pauseButton.classList.add("pauseButton", "button")
  buttonsCont.appendChild(pauseButton)

  pauseButton.onclick = function () {
    video.pause()
  }
}

let vid5 = document.querySelector("#vid5")

vid5.onclick = function () {
  let overlay = document.createElement("div")
  overlay.classList.add("overlay")
  document.body.appendChild(overlay)

  let exit = document.createElement("div")
  exit.innerHTML = "X"
  exit.classList.add("exit")
  overlay.appendChild(exit)

  exit.onclick = function () {
    overlay.remove()
  }

  let video = document.createElement("video")
  video.src = "../videos/video(5).mp4"
  video.classList.add("video")
  video.play()
  video.controls = true;
  overlay.appendChild(video)

  let buttonsCont = document.createElement("div")
  buttonsCont.classList.add("buttonsCont")
  overlay.appendChild(buttonsCont)

  let startButton = document.createElement("button")
  startButton.innerHTML = '<i class="fa-solid fa-play"></i>'
  startButton.classList.add("startButton", "button")
  buttonsCont.appendChild(startButton)

  startButton.onclick = function () {
    video.play()
  }

  let pauseButton = document.createElement("button")
  pauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>'
  pauseButton.classList.add("pauseButton", "button")
  buttonsCont.appendChild(pauseButton)

  pauseButton.onclick = function () {
    video.pause()
  }
}

let vid6 = document.querySelector("#vid6")

vid6.onclick = function () {
  let overlay = document.createElement("div")
  overlay.classList.add("overlay")
  document.body.appendChild(overlay)

  let exit = document.createElement("div")
  exit.innerHTML = "X"
  exit.classList.add("exit")
  overlay.appendChild(exit)

  exit.onclick = function () {
    overlay.remove()
  }

  let video = document.createElement("video")
  video.src = "../videos/video(6).mp4"
  video.classList.add("video")
  video.play()
  video.controls = true;
  overlay.appendChild(video)

  let buttonsCont = document.createElement("div")
  buttonsCont.classList.add("buttonsCont")
  overlay.appendChild(buttonsCont)

  let startButton = document.createElement("button")
  startButton.innerHTML = '<i class="fa-solid fa-play"></i>'
  startButton.classList.add("startButton", "button")
  buttonsCont.appendChild(startButton)

  startButton.onclick = function () {
    video.play()
  }

  let pauseButton = document.createElement("button")
  pauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>'
  pauseButton.classList.add("pauseButton", "button")
  buttonsCont.appendChild(pauseButton)

  pauseButton.onclick = function () {
    video.pause()
  }
}

//////////////////////////////////
let date = new Date().getFullYear()

let dates = document.querySelectorAll(".date")

dates.forEach((ele) => {
  ele.innerHTML = date
})
///////////////////////////////////////////////////

function changeLang() {
  // Header To Arabic
  document.body.querySelector("#homeHeader").innerHTML = "الصفحة الرئيسية"
  document.body.querySelector("#skillHeader").innerHTML = "المهارات"
  document.body.querySelector("#videoHeader").innerHTML = "الفيديوهات"
  document.body.querySelector("#careerHeader").innerHTML = "المسيرة"
  document.body.querySelector("#photoHeader").innerHTML = "معرض الصور"
  document.body.querySelector("#wonHeader").innerHTML = "الجوائز"
  // Landing To Arabic
  document.body.querySelector("#birthLanding").innerHTML = "تاريخ الميلاد: 1997/12/30"
  document.body.querySelector("#ageLanding").innerHTML = "العمر: 24"
  document.body.querySelector("#posLanding").innerHTML = "المركز: مهاجم"
  document.body.querySelector("#curLanding").innerHTML = "الفريق الحالي: الترجي التونسي"
  // Skills To Arabic
  document.body.querySelector("#headSkills").innerHTML = "مهاراتي"
  document.body.querySelector("#p1Skills").innerHTML = "Nam fermentum ullamcorper luctus. Integer ultricies imperdiet rutrum. Donec vel ultrices purus. Vestibulum posuere eget magna eu blandit. Sed fermentum, est ut tincidunt luctus, urna tellus ullamcorper augue, quis tincidunt mi justo faucibus odio."
  document.body.querySelector("#p2Skills").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit nisi pulvinar faucibus."
  document.body.querySelector("#strSkills").innerHTML = "إستراتيجية"
  document.body.querySelector("#attSkills").innerHTML = "الهجوم"
  document.body.querySelector("#defSkills").innerHTML = "الدفاع"
  document.body.querySelector("#shoSkills").innerHTML = "التسديد"
  // Videos TO Arabic
  document.body.querySelector("#headerVideo").innerHTML = "الفيديوهات"
  document.body.querySelector("#tit1Videos").innerHTML = "عنوان الفيديو"
  document.body.querySelector("#tit2Videos").innerHTML = "عنوان الفيديو"
  document.body.querySelector("#tit3Videos").innerHTML = "عنوان الفيديو"
  document.body.querySelector("#tit4Videos").innerHTML = "عنوان الفيديو"
  document.body.querySelector("#tit5Videos").innerHTML = "عنوان الفيديو"
  document.body.querySelector("#tit6Videos").innerHTML = "عنوان الفيديو"
  document.body.querySelector("#par1Videos").innerHTML = "وصف الفيديو"
  document.body.querySelector("#par2Videos").innerHTML = "وصف الفيديو"
  document.body.querySelector("#par3Videos").innerHTML = "وصف الفيديو"
  document.body.querySelector("#par4Videos").innerHTML = "وصف الفيديو"
  document.body.querySelector("#par5Videos").innerHTML = "وصف الفيديو"
  document.body.querySelector("#par6Videos").innerHTML = "وصف الفيديو"
  document.body.querySelector("#vid1").innerHTML = "معاينة"
  document.body.querySelector("#vid2").innerHTML = "معاينة"
  document.body.querySelector("#vid3").innerHTML = "معاينة"
  document.body.querySelector("#vid4").innerHTML = "معاينة"
  document.body.querySelector("#vid5").innerHTML = "معاينة"
  document.body.querySelector("#vid6").innerHTML = "معاينة"
  // Card TO Arabic
  document.body.querySelector("#matCard").innerHTML = "مباريات دوري"
  document.body.querySelector("#gamCard").innerHTML = "مباريات دولية"
  document.body.querySelector("#wonCard").innerHTML = "الكؤوس"
  document.body.querySelector("#folCard").innerHTML = "متابعين فيسبوك"
  // Gallery To Arabic
  document.body.querySelector("#headerGallery").innerHTML = "معرض الصور"
  // Won TO Arabic
  document.body.querySelector("#headerWon").innerHTML = "الكوؤس"
  document.body.querySelector("#head1Won").innerHTML = "كأس"
  document.body.querySelector("#head2Won").innerHTML = "كأس"
  document.body.querySelector("#head3Won").innerHTML = "كأس"
  document.body.querySelector("#par1Won").innerHTML = "تفاصيل الكأس"
  document.body.querySelector("#par2Won").innerHTML = "تفاصيل الكأس"
  document.body.querySelector("#par3Won").innerHTML = "تفاصيل الكأس"
  // Career TO Arabic
  document.body.querySelector("#headerCareer").innerHTML = "المسيرة"
  document.body.querySelector("#oneCareer").innerHTML = "بدء مع فريق الرمثا"
  document.body.querySelector("#twoCareer").innerHTML = "اعير الى فريق السيلية"
  document.body.querySelector("#threeCareer").innerHTML = "لعب مع فريق السيلية"
  document.body.querySelector("#fourCareer").innerHTML = "رجع الى فريق الرمثا"
  document.body.querySelector("#fiveCareer").innerHTML = "اكمل مع فريق الرمثا"
  document.body.querySelector("#sixCareer").innerHTML = "انتقل الى فريق الاهلي طرابلس"
  document.body.querySelector("#sevenCareer").innerHTML = "لعب مع الاهلي طرابلس"
  document.body.querySelector("#eightCareer").innerHTML = "انتقل الى نادي الترجي"
  document.body.querySelector("#nineCareer").innerHTML = "لعب مع نادي الترجي"
  document.body.querySelector("#tenCareer").innerHTML = "يلعب الان بنادي الترجي"
  let button = document.querySelector("#lang")
  button.onclick = function changeLang2() {
    // Header To Arabic
    document.body.querySelector("#homeHeader").innerHTML = "الصفحة الرئيسية"
    document.body.querySelector("#skillHeader").innerHTML = "المهارات"
    document.body.querySelector("#videoHeader").innerHTML = "الفيديوهات"
    document.body.querySelector("#careerHeader").innerHTML = "المسيرة"
    document.body.querySelector("#photoHeader").innerHTML = "معرض الصور"
    document.body.querySelector("#wonHeader").innerHTML = "الجوائز"
    // Landing To Arabic
    document.body.querySelector("#birthLanding").innerHTML = "تاريخ الميلاد: 1997/12/30"
    document.body.querySelector("#ageLanding").innerHTML = "العمر: 24"
    document.body.querySelector("#posLanding").innerHTML = "المركز: مهاجم"
    document.body.querySelector("#curLanding").innerHTML = "الفريق الحالي: الترجي التونسي"
    // Skills To Arabic
    document.body.querySelector("#headSkills").innerHTML = "مهاراتي"
    document.body.querySelector("#p1Skills").innerHTML = "Nam fermentum ullamcorper luctus. Integer ultricies imperdiet rutrum. Donec vel ultrices purus. Vestibulum posuere eget magna eu blandit. Sed fermentum, est ut tincidunt luctus, urna tellus ullamcorper augue, quis tincidunt mi justo faucibus odio."
    document.body.querySelector("#p2Skills").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit nisi pulvinar faucibus."
    document.body.querySelector("#strSkills").innerHTML = "إستراتيجية"
    document.body.querySelector("#attSkills").innerHTML = "الهجوم"
    document.body.querySelector("#defSkills").innerHTML = "الدفاع"
    document.body.querySelector("#shoSkills").innerHTML = "التسديد"
    // Videos TO Arabic
    document.body.querySelector("#headerVideo").innerHTML = "الفيديوهات"
    document.body.querySelector("#tit1Videos").innerHTML = "عنوان الفيديو"
    document.body.querySelector("#tit2Videos").innerHTML = "عنوان الفيديو"
    document.body.querySelector("#tit3Videos").innerHTML = "عنوان الفيديو"
    document.body.querySelector("#tit4Videos").innerHTML = "عنوان الفيديو"
    document.body.querySelector("#tit5Videos").innerHTML = "عنوان الفيديو"
    document.body.querySelector("#tit6Videos").innerHTML = "عنوان الفيديو"
    document.body.querySelector("#par1Videos").innerHTML = "وصف الفيديو"
    document.body.querySelector("#par2Videos").innerHTML = "وصف الفيديو"
    document.body.querySelector("#par3Videos").innerHTML = "وصف الفيديو"
    document.body.querySelector("#par4Videos").innerHTML = "وصف الفيديو"
    document.body.querySelector("#par5Videos").innerHTML = "وصف الفيديو"
    document.body.querySelector("#par6Videos").innerHTML = "وصف الفيديو"
    document.body.querySelector("#vid1").innerHTML = "معاينة"
    document.body.querySelector("#vid2").innerHTML = "معاينة"
    document.body.querySelector("#vid3").innerHTML = "معاينة"
    document.body.querySelector("#vid4").innerHTML = "معاينة"
    document.body.querySelector("#vid5").innerHTML = "معاينة"
    document.body.querySelector("#vid6").innerHTML = "معاينة"
    // Card TO Arabic
    document.body.querySelector("#matCard").innerHTML = "مباريات دوري"
    document.body.querySelector("#gamCard").innerHTML = "مباريات دولية"
    document.body.querySelector("#wonCard").innerHTML = "الكؤوس"
    document.body.querySelector("#folCard").innerHTML = "متابعين فيسبوك"
    // Gallery To Arabic
    document.body.querySelector("#headerGallery").innerHTML = "معرض الصور"
    // Won TO Arabic
    document.body.querySelector("#headerWon").innerHTML = "الكوؤس"
    document.body.querySelector("#head1Won").innerHTML = "كأس"
    document.body.querySelector("#head2Won").innerHTML = "كأس"
    document.body.querySelector("#head3Won").innerHTML = "كأس"
    document.body.querySelector("#par1Won").innerHTML = "تفاصيل الكأس"
    document.body.querySelector("#par2Won").innerHTML = "تفاصيل الكأس"
    document.body.querySelector("#par3Won").innerHTML = "تفاصيل الكأس"
    // Career TO Arabic
    document.body.querySelector("#headerCareer").innerHTML = "المسيرة"
    document.body.querySelector("#oneCareer").innerHTML = "بدء مع فريق الرمثا"
    document.body.querySelector("#twoCareer").innerHTML = "اعير الى فريق السيلية"
    document.body.querySelector("#threeCareer").innerHTML = "لعب مع فريق السيلية"
    document.body.querySelector("#fourCareer").innerHTML = "رجع الى فريق الرمثا"
    document.body.querySelector("#fiveCareer").innerHTML = "اكمل مع فريق الرمثا"
    document.body.querySelector("#sixCareer").innerHTML = "انتقل الى فريق الاهلي طرابلس"
    document.body.querySelector("#sevenCareer").innerHTML = "لعب مع الاهلي طرابلس"
    document.body.querySelector("#eightCareer").innerHTML = "انتقل الى نادي الترجي"
    document.body.querySelector("#nineCareer").innerHTML = "لعب مع نادي الترجي"
    document.body.querySelector("#tenCareer").innerHTML = "يلعب الان بنادي الترجي"

    // .;z.z"Z>C:zc'.;c

    button.onclick = function () {

      // Header To Arabic
      document.body.querySelector("#homeHeader").innerHTML = "Home"
      document.body.querySelector("#skillHeader").innerHTML = "Skills"
      document.body.querySelector("#videoHeader").innerHTML = "Videos"
      document.body.querySelector("#careerHeader").innerHTML = "Career"
      document.body.querySelector("#photoHeader").innerHTML = "Photo Gallery"
      document.body.querySelector("#wonHeader").innerHTML = "Trophies"
      // Landing To Arabic
      document.body.querySelector("#birthLanding").innerHTML = "Date Of Birth: 1997/12/30"
      document.body.querySelector("#ageLanding").innerHTML = "Age: 24"
      document.body.querySelector("#posLanding").innerHTML = "Position: Attacker"
      document.body.querySelector("#curLanding").innerHTML = "Current Team: Esperance ST"
      // Skills To Arabic
      document.body.querySelector("#headSkills").innerHTML = "My Skills"
      document.body.querySelector("#p1Skills").innerHTML = "Nam fermentum ullamcorper luctus. Integer ultricies imperdiet rutrum. Donec vel ultrices purus. Vestibulum posuere eget magna eu blandit. Sed fermentum, est ut tincidunt luctus, urna tellus ullamcorper augue, quis tincidunt mi justo faucibus odio."
      document.body.querySelector("#p2Skills").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit nisi pulvinar faucibus."
      document.body.querySelector("#strSkills").innerHTML = "Strategy"
      document.body.querySelector("#attSkills").innerHTML = "Attack"
      document.body.querySelector("#defSkills").innerHTML = "Deffense"
      document.body.querySelector("#shoSkills").innerHTML = "Shooting"
      // Videos TO Arabic
      document.body.querySelector("#headerVideo").innerHTML = "Videos"
      document.body.querySelector("#tit1Videos").innerHTML = "Video Title"
      document.body.querySelector("#tit2Videos").innerHTML = "Video Title"
      document.body.querySelector("#tit3Videos").innerHTML = "Video Title"
      document.body.querySelector("#tit4Videos").innerHTML = "Video Title"
      document.body.querySelector("#tit5Videos").innerHTML = "Video Title"
      document.body.querySelector("#tit6Videos").innerHTML = "Video Title"
      document.body.querySelector("#par1Videos").innerHTML = "Video Discreption"
      document.body.querySelector("#par2Videos").innerHTML = "Video Discreption"
      document.body.querySelector("#par3Videos").innerHTML = "Video Discreption"
      document.body.querySelector("#par4Videos").innerHTML = "Video Discreption"
      document.body.querySelector("#par5Videos").innerHTML = "Video Discreption"
      document.body.querySelector("#par6Videos").innerHTML = "Video Discreption"
      document.body.querySelector("#vid1").innerHTML = "View"
      document.body.querySelector("#vid2").innerHTML = "View"
      document.body.querySelector("#vid3").innerHTML = "View"
      document.body.querySelector("#vid4").innerHTML = "View"
      document.body.querySelector("#vid5").innerHTML = "View"
      document.body.querySelector("#vid6").innerHTML = "View"
      // Card TO Arabic
      document.body.querySelector("#matCard").innerHTML = "League matches"
      document.body.querySelector("#gamCard").innerHTML = "International Games"
      document.body.querySelector("#wonCard").innerHTML = "Trophies Won"
      document.body.querySelector("#folCard").innerHTML = "Facebook Followers"
      // Gallery To Arabic
      document.body.querySelector("#headerGallery").innerHTML = "Photo Gallery"
      // Won TO Arabic
      document.body.querySelector("#headerWon").innerHTML = "Trophies"
      document.body.querySelector("#head1Won").innerHTML = "A Trophy"
      document.body.querySelector("#head2Won").innerHTML = "A Trophy"
      document.body.querySelector("#head3Won").innerHTML = "A Trophy"
      document.body.querySelector("#par1Won").innerHTML = "This is A Trophy"
      document.body.querySelector("#par2Won").innerHTML = "This is A Trophy"
      document.body.querySelector("#par3Won").innerHTML = "This is A Trophy"
      // Career TO Arabic
      document.body.querySelector("#headerCareer").innerHTML = "Career"
      document.body.querySelector("#oneCareer").innerHTML = "Started with Al Ramtha SC"
      document.body.querySelector("#twoCareer").innerHTML = "loaned To Al Sailiya SC"
      document.body.querySelector("#threeCareer").innerHTML = "Started with Al Sailiya SC"
      document.body.querySelector("#fourCareer").innerHTML = "Returned To Al Ramtha SC"
      document.body.querySelector("#fiveCareer").innerHTML = "Continued with Al Ramtha SC"
      document.body.querySelector("#sixCareer").innerHTML = "Transfered To Alahly Tripoli"
      document.body.querySelector("#sevenCareer").innerHTML = "Started with Alahly Tripoli"
      document.body.querySelector("#eightCareer").innerHTML = "Transfered To Esperance ST"
      document.body.querySelector("#nineCareer").innerHTML = "Started with Esperance ST"
      document.body.querySelector("#tenCareer").innerHTML = "Now with Esperance ST"
      button.onclick = window.location.reload()
    }
  }
}