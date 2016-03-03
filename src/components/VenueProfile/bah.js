



// calls server 
//server.init = function (){

 
}

// puts a single chunk
// server.put = 

// term terminates transfer 
// sever.term 

var canvas = {

    getPixel: function(x, y){
        var initialPixelColor = color,  
        pixelColor =  color, 
        adjacentPixels = [];  

        adjacentPixels.push(x +1, y);
        adjacentPixels.push(x -1 , y);
        adjacentPixels.push(x  , y -1)
        adjacentPixels.push(x  , y +1); 

        this.getAdjacentPixels(pixelColor, initialPixelColor, adjacentPixels ); 

    }

    getAdjacentPixels: function (pixelColor, initialPixelColor, adjacentPixels) {
        var currentPixelColor = color; 

        for (i = 0; i < adjacentPixels.length; i++){
            if (initialPixelColor === currentPixelColor) {
                getPixel(adjacentPixels[])
            }            
        }
    }
}

