import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, figureNames } from "./Figure";
import blackLogo from '../../assets/black-queen.png'
import whiteLogo from '../../assets/white-queen.png'

export class Queen extends Figure {
    
    constructor(color: Colors, cell: Cell) {
        super(color, cell)

        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = figureNames.QUEEN
    }
}