const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach((toggle) => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(clicked) {
    if (good.checked && cheap.checked & fast.checked) {
        if (good === clicked) {
            cheap.checked = false
        }
        if (cheap === clicked) {
            fast.checked = false
        }
        if (fast === clicked) {
            good.checked = false
        }
    }
}
