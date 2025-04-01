$(document).ready(function(){
    let whatImg2 = ["PiperClothed", "", "", "", "", "", ""];
    
        // LOWER / RAISE PANTS
        $(document).on('click', '#lowerPants, #raisePants', function() {
            var $button = $(this);
            if ($button.text() === 'LOWER PANTS') {
                $button.text('RAISE PANTS').attr('id', 'raisePants');
                whatImg2[1] = "-PantsDown";
                $("#removePants").css("background-color", "darkgray");
                $("#removePants").prop("disabled", true);
                console.log(whatImg2);
            } else {
                $button.text('LOWER PANTS').attr('id', 'lowerPants');
                whatImg2[1] = "";
                $("#removePants").css("background-color", "white");
                $("#removePants").prop("disabled", false);
                console.log(whatImg2);
            }
            changeTheImage()
        });
    
        //OPEN / CLOSE JACKET
        $(document).on('click', '#openJacket, #closeJacket', function() {
            var $button = $(this);
            if ($button.text() === 'OPEN JACKET') {
                $button.text('CLOSE JACKET').attr('id', 'closeJacket');
                whatImg2[2] = "-OpenJacket";
                $("#removeJacket, #removeShirt").css("background-color", "darkgray");
                $("#removeJacket, #removeShirt").prop("disabled", true);
                console.log(whatImg2);
            } else {
                $button.text('OPEN JACKET').attr('id', 'openJacket');
                whatImg2[2] = "";
                $("#removeJacket, #removeShirt").css("background-color", "white");
                $("#removeJacket, #removeShirt").prop("disabled", false);
                console.log(whatImg2);
            }
            changeTheImage()
        });
    
        //ADD / REMOVE HAT
        $(document).on('click', '#removeHat, #addHat', function() {
            var $button = $(this);
            if ($button.text() === 'REMOVE HAT') {
                $button.text('ADD HAT').attr('id', 'addHat');
                whatImg2[3] = "-NoHat";
                console.log(whatImg2);
            } else {
                $button.text('REMOVE HAT').attr('id', 'removeHat');
                whatImg2[3] = "";
                console.log(whatImg2);
            }
            changeTheImage()
        });
    
        //ADD / REMOVE SHIRT
        $(document).on('click', '#removeShirt, #addShirt', function() {
            var $button = $(this);
            if ($button.text() === 'REMOVE SHIRT') {
                $button.text('ADD SHIRT').attr('id', 'removeShirt');
                whatImg2[4] = "-NoShirt";
                $("#removeJacket, #openJacket").css("background-color", "darkgray");
                $("#removeJacket, #openJacket").prop("disabled", true);
                console.log(whatImg2);
            } else {
                $button.text('REMOVE SHIRT').attr('id', 'addShirt');
                whatImg2[4] = "";
                $("#removeJacket, #openJacket").css("background-color", "white");
                $("#removeJacket, #openJacket").prop("disabled", false);
                console.log(whatImg2);
            }
            changeTheImage()
        });

        //ADD / REMOVE GLOVES
        $(document).on('click', '#removeGloves, #addGloves', function() {
            var $button = $(this);
            if ($button.text() === 'REMOVE GLOVES') {
                $button.text('ADD GLOVES').attr('id', 'addGloves');
                whatImg2[5] = "-NoGloves";
                console.log(whatImg2);
            } else {
                $button.text('REMOVE GLOVES').attr('id', 'removeGloves');
                whatImg2[5] = "";
                console.log(whatImg2);
            }
            changeTheImage()
        });

        //ADD / REMOVE BOOTS
        $(document).on('click', '#removeBoots, #addBoots', function() {
            var $button = $(this);
            if ($button.text() === 'REMOVE BOOTS') {
                $button.text('ADD BOOTS').attr('id', 'addBoots');
                whatImg2[6] = "-NoBoots";
                console.log(whatImg2);
            } else {
                $button.text('REMOVE BOOTS').attr('id', 'removeBoots');
                whatImg2[6] = "";
                console.log(whatImg2);
            }
            changeTheImage()
        });

        //ADD / REMOVE JACKET
        $(document).on('click', '#removeJacket, #addJacket', function() {
            var $button = $(this);
            if ($button.text() === 'REMOVE JACKET') {
                $button.text('ADD JACKET').attr('id', 'addJacket');
                whatImg2[0] = "PiperNoJacket";
                $("#openJacket, #removeShirt").css("background-color", "darkgray");
                $("#openJacket, #removeShirt").prop("disabled", true);
                console.log(whatImg2);
            } else {
                $button.text('REMOVE JACKET').attr('id', 'removeJacket');
                whatImg2[0] = "PiperClothed";
                $("#openJacket, #removeShirt").css("background-color", "white");
                $("#openJacket, #removeShirt").prop("disabled", false);
                console.log(whatImg2);
            }
            changeTheImage()
        });
    
        //ADD / REMOVE PANTS
        $(document).on('click', '#removePants, #addPants', function() {
            var $button = $(this);
            if ($button.text() === 'REMOVE PANTS') {
                $button.text('ADD PANTS').attr('id', 'addPants');
                whatImg2[1] = "-NoPants";
                $("#lowerPants").css("background-color", "darkgray");
                $("#lowerPants").prop("disabled", true);
                console.log(whatImg2);
            } else {
                $button.text('REMOVE PANTS').attr('id', 'removePants');
                whatImg2[1] = "";
                $("#lowerPants").css("background-color", "white");
                $("#lowerPants").prop("disabled", false);
                console.log(whatImg2);
            }
            changeTheImage()
        });
    
        function changeTheImage(){
            let whatImg = whatImg2.join("");
            $("body").css("background-image", "url('assets/media/" + whatImg + ".png')");
            console.log(whatImg);
        }
    });