const $board = document.getElementById('gameboard')
const $rows = $board.getElementsByClassName('row')
const $cols = Array.from($board.getElementsByClassName('col'))

const placements = `[null,null,null,null,null,null,null,null,null,null,null,null,"boat-5","boat-5","boat-5","boat-5","boat-5",null,null,null,null,null,null,null,null,null,null,null,null,null,null,"boat-3",null,"boat-4",null,null,"boat-2","boat-2","boat-2",null,null,"boat-3",null,"boat-4",null,null,null,null,null,null,null,"boat-3",null,"boat-4",null,null,"boat-1",null,null,null,null,null,null,"boat-4",null,null,"boat-1",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]`
const gridData = Array.from(JSON.parse(placements))
