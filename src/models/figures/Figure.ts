import logo from '../../assets/black-king.png'
import { Cell } from '../Cell'
import { Colors } from '../Colors'

export enum figureNames{
    FIGURE = 'Фигура',
    KING = 'Король',
    QUEEN = 'Королева',
    PAWN = 'Пешка',
    KNIGHT = 'Конь',
    ROOK = 'Ладья',
    BISHOP = 'Слон',
}

export class Figure {
    color: Colors
    cell: Cell
    logo: typeof logo | null
    name: figureNames
    id: number

    constructor(color: Colors, cell: Cell) {
        this.color = color
        this.cell = cell
        this.cell.figure = this
        this.logo = null
        this.name = figureNames.FIGURE
        this.id = Math.random()
    }

    canMove(target: Cell) : boolean {
        if(target.figure?.color === this.color) {
            return false
        }
        if(target.figure?.name === figureNames.KING) {
            return false
        }
        return true
    }

    moveFigure(target: Cell) {}
}
