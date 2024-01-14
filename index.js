const btn1 = document.querySelector(".btn-danger")
const btn2 = document.querySelector(".btn-warning")
const btn3 = document.querySelector(".btn-success")
const winningScoreSelect = document.querySelector("#playto")

btn1.setAttribute("disabled", "")
btn2.setAttribute("disabled", "")

let winningScore
let isGameOver = false

const player1Score = document.querySelector("#player1")
const player2Score = document.querySelector("#player2")
let player1CurrentScore = 0
let player2CurrentScore = 0
player1Score.innerHTML = player1CurrentScore
player2Score.innerHTML = player2CurrentScore

btn1.addEventListener("click", () => {
  if (!isGameOver) {
    player1CurrentScore++
    if (player1CurrentScore === winningScore) {
      isGameOver = true
      player1Score.classList.add("text-success")
      player2Score.classList.add("text-danger")
      btn1.setAttribute("disabled", "")
      btn2.setAttribute("disabled", "")
    }
    player1Score.innerHTML = player1CurrentScore
  }
})

btn2.addEventListener("click", () => {
  if (!isGameOver) {
    player2CurrentScore++
    if (player2CurrentScore === winningScore) {
      isGameOver = true
      player2Score.classList.add("text-success")
      player1Score.classList.add("text-danger")
      btn1.setAttribute("disabled", "")
      btn2.setAttribute("disabled", "")
    }
    player2Score.innerHTML = player2CurrentScore
  }
})

winningScoreSelect.addEventListener("change", function () {
  btn1.removeAttribute("disabled")
  btn2.removeAttribute("disabled")
  winningScore = parseInt(this.value)
  reset1()
})

btn3.addEventListener("click", reset2)

function reset1() {
  player1CurrentScore = 0
  player2CurrentScore = 0
  player1Score.innerHTML = 0
  player2Score.innerHTML = 0
  isGameOver = false
  player1Score.classList.remove("text-success", "text-danger")
  player2Score.classList.remove("text-success", "text-danger")
}

function reset2() {
  player1CurrentScore = 0
  player2CurrentScore = 0
  player1Score.innerHTML = 0
  player2Score.innerHTML = 0
  isGameOver = false
  player1Score.classList.remove("text-success", "text-danger")
  player2Score.classList.remove("text-success", "text-danger")
  winningScoreSelect.selectedIndex = 0
}
