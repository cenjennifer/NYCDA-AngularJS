angular.module('MyApp', [])
// hello
.controller('MyController', function(resetGame, Round, ComparingArrays, ColorsEffect, Yellow, Blue, Green, Red, $timeout, SimonResults, $interval, SimonColors, PlayerColors){
    var self = this;
    //self.colors = Colors;
    self.yellow = Yellow;
    self.red = Red;
    self.green = Green;
    self.blue = Blue;
    
    self.buttonMessage = "Start Game"
    self.round = false;
    self.playGame = function(){

        self.simonArray = SimonColors.addRandomColor();
        ColorsEffect.displayArray(self.simonArray);
        console.log(self.simonArray);
    };
    self.startGame = function() {
        self.round = true;
        self.gameMessage = ""
        self.player = new PlayerColors();
        if ((self.buttonMessage == "Play Again!") || (self.buttonMessage == 'Reset Game' && Round >=1)){
            self.buttonMessage = "Reset Game"
            Round = 1;
            self.roundCount = Round;
            self.simonArray.length = 0;
            self.player.selectedColors.length = 0;
            ComparingArrays.currentIndex = 0;
        } else {
            self.roundCount = Round;
        }
        self.buttonMessage = 'Reset Game'
        self.playGame();
    };

    self.clicked = function (color){
        ColorsEffect.toggleColor(color);
        self.player.addColors(color);

        var isUserCorrect = ComparingArrays.compareColors(self.simonArray, color);
    
        if (!isUserCorrect) {
           alert('You got the wrong answer');
            self.gameMessage = "Game Over!"
            self.buttonMessage = "Play Again!"

            return;
        }

        if (self.simonArray.length == self.player.selectedColors.length) {
            self.player.selectedColors = [];
            self.playGame();
            Round++;
            self.roundCount = Round;
        }
    };
});
        