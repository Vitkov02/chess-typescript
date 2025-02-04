import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, figureNames } from "./Figure";
import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'

export class King extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell)

        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = figureNames.KING
    }
}