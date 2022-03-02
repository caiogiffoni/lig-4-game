//import {Board} from '../models/board-models.js'

let board = new Board(6,6,[1,2])
const container = document.getElementById('table')
board.renderMap(container)