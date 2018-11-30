const $board = document.getElementById('gameboard')
const $rows = $board.getElementsByClassName('row')
const $cols = Array.from($board.getElementsByClassName('col'))

const placements = localStorage.grid
const gridData = Array.from(JSON.parse(placements))


function buildGrid() {
  for (let i = 0; i < 10; i++) {
    const row = document.createElement('div')
    row.classList.add('row')
    const rowData = gridData.splice(0, 10)
    for (const data of rowData) {
      const col = document.createElement('div')
      col.classList.add('col')
      col.classList.add(data)
      row.appendChild(col)
    }
    $board.appendChild(row)
  }
}

buildGrid()