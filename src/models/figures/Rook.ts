import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, figureNames } from "./Figure";
import blackLogo from '../../assets/black-rook.png'
import whiteLogo from '../../assets/white-rook.png'

export class Rook extends Figure {
    
    constructor(color: Colors, cell: Cell) {
        super(color, cell)

        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = figureNames.ROOK
    }
}