import * as piece from "../Data/pieces.js";
import { ROOT_DIV } from "../Helper/constants.js";
import { globalState } from "../index.js";

// use when you want to render pieces on board
function pieceRender(data) {
  data.forEach((row) => {
    row.forEach((square) => {
      // if square has piece
      if (square.piece) {
        const squareEl = document.getElementById(square.id);

        // create piece
        const piece = document.createElement("img");
        piece.src = square.piece.img;
        piece.classList.add("piece");

        // insert piece into square element
        squareEl.appendChild(piece);
      }
    });
  });
}

// use when you want to render board for first time when game start
function initGameRender(data) {
  data.forEach((element) => {
    const rowEl = document.createElement("div");
    element.forEach((square) => {
      const squareDiv = document.createElement("div");
      squareDiv.id = square.id;
      squareDiv.classList.add(square.color, "square");
      
      // render blackpawn
      if (square.id[1] == 7) {
        square.piece = piece.blackPawn(square.id);
        globalPiece.black_pawn = square.piece
      }

      // render black rook
      if (square.id == "h8" || square.id == "a8") {
        square.piece = piece.blackRook(square.id);
        if(globalPiece.black_rook_1) {
          globalPiece.black_rook_2 = square.piece
        } else {
          globalPiece.black_rook_1 = square.piece
        }
      }

      // render black knight
      if (square.id == "b8" || square.id == "g8") {
        square.piece = piece.blackKnight(square.id);
        if(globalPiece.black_knight_1) {
          globalPiece.black_knight_2 = square.piece
        } else {
          globalPiece.black_knight_1 = square.piece
        }
      }
      // render black knight
      if (square.id == "c8" || square.id == "f8") {
        square.piece = piece.blackBishop(square.id);
        if(globalPiece.black_bishop_1) {
          globalPiece.black_bishop_2 = square.piece
        } else {
          globalPiece.black_bishop_1 = square.piece
        }
      }
      // render black knight
      if (square.id == "d8") {
        square.piece = piece.blackQueen(square.id);
        globalPiece.black_queen = square.piece
      }
      // render black knight
      if (square.id == "e8") {
        square.piece = piece.blackKing(square.id);
        globalPiece.black_king = square.piece;
      }

      // render white pawn
      if (square.id[1] == 2) {
        square.piece = piece.whitePawn(square.id);
        globalPiece.white_pawn = square.piece
      }
      // render white queen
      if (square.id == "d1") {
        square.piece = piece.whiteQueen(square.id);
        globalPiece.white_queen = square.piece
      }

      // render white king
      if (square.id == "e1") {
        square.piece = piece.whiteKing(square.id);
        globalPiece.white_king = square.piece;
      }

      // render white rook
      if (square.id == "h1" || square.id == "a1") {
        square.piece = piece.whiteRook(square.id);
        if(globalPiece.white_rook_1) {
          globalPiece.white_rook_2 = square.piece
        } else {
          globalPiece.white_rook_1 = square.piece
        }
      }

      // render black knight
      if (square.id == "b1" || square.id == "g1") {
        square.piece = piece.whiteKnight(square.id);
        if(globalPiece.white_knight_1) {
          globalPiece.white_knight_2 = square.piece
        } else {
          globalPiece.white_knight_1 = square.piece
        }
      }

      // render black bishop
      if (square.id == "c1" || square.id == "f1") {
        square.piece = piece.whiteBishop(square.id);
        if(globalPiece.white_bishop_1) {
          globalPiece.white_bishop_2 = square.piece
        } else {
          globalPiece.white_bishop_1 = square.piece
        }
      }

      rowEl.appendChild(squareDiv);
    });
    rowEl.classList.add("squareRow");
    ROOT_DIV.appendChild(rowEl);
  });

  pieceRender(data);
}

export { initGameRender };
