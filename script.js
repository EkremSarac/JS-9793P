const buttonCount = document.getElementById("count-button")
buttonCount.addEventListener("click", function() {
  const counter = document.getElementById("counter")
  let countNumber = Number(counter.innerHTML)
  countNumber++
  counter.innerHTML = countNumber
  if(countNumber === 5) {
    alert("Telefonla Çok vakit geçiriyorsunuzz!!") 
  }
  })

  const rainPlay = document.getElementById("rainPlay")
  const rainIcon = document.getElementById("rainIcon")
  rainIcon.addEventListener("click", function() {
if (rainPlay.paused) {
  rainPlay.play()
  rainIcon.className = "fa-solid fa-music"
} else {
  rainPlay.pause()
  rainIcon.className = "fa-solid fa-cloud-rain"
}
  })

  const birdPlay = document.getElementById("birdPlay")
  const birdIcon = document.getElementById("birdIcon")
  birdIcon.addEventListener("click", function() {
if (birdPlay.paused) {
  birdPlay.play()
  birdIcon.className = "fa-solid fa-music"
} else {
  birdPlay.pause()
  birdIcon.className = "fa-solid fa-dove"
}
  })
  

  const guitarPlay = document.getElementById("guitarPlay")
  const guitarIcon = document.getElementById("guitarIcon")
  guitarIcon.addEventListener("click", function() {
if (guitarPlay.paused) {
  guitarPlay.play()
  guitarIcon.className = "fa-solid fa-music"
} else {
  guitarPlay.pause()
  guitarIcon.className = "fa-solid fa-guitar"
}
  }) 


const volumeInput = document.getElementById("volume-input")
volumeInput.addEventListener("input", function() {
  birdPlay.volume = volumeInput.value / 100
  guitarPlay.volume = volumeInput.value / 100
  rainPlay.volume = volumeInput.value / 100
})
