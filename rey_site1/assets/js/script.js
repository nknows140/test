$(document).ready(function(){
    let whatImg2 = ["ReyTraining", "", "", "", "", "", ""];
    
        // LOWER / RAISE PANTS
        $(document).on('click', '#lowerPants, #lowerPants2, #lowerPants3, #raisePants', function() {
            var $button = $(this);
            if ($button.text() === 'LOWER PANTS') {
                $button.text('LOWER PANTS 2').attr('id', 'lowerPants2');
                whatImg2[6] = "-PantsDown1";
                $("#removePants").css("background-color", "darkgray");
                $("#removePants").prop("disabled", true);
                console.log(whatImg2);
            } else if ($button.text() === 'LOWER PANTS 2'){
                $button.text('LOWER PANTS 3').attr('id', 'lowerPants3');
                whatImg2[6] = "-PantsDown2";
            } else if ($button.text() === 'LOWER PANTS 3'){
                $button.text('RAISE PANTS').attr('id', 'raisePants');
                whatImg2[6] = "-PantsDown3";
            } else {
                $button.text('LOWER PANTS').attr('id', 'lowerPants');
                whatImg2[6] = "";
                $("#removePants").css("background-color", "white");
                $("#removePants").prop("disabled", false);
                console.log(whatImg2);
            }
            changeTheImage()
        });
    
        //OPEN / CLOSE VEST
        $(document).on('click', '#openVest, #closeVest', function() {
            var $button = $(this);
            if ($button.text() === 'OPEN VEST') {
                $button.text('CLOSE VEST').attr('id', 'closeVest');
                whatImg2[2] = "-OpenVest";
                $("#removeVest").css("background-color", "darkgray");
                $("#removeVest").prop("disabled", true);
                console.log(whatImg2);
            } else {
                $button.text('OPEN VEST').attr('id', 'openVest');
                whatImg2[2] = "";
                $("#removeVest").css("background-color", "white");
                $("#removeVest").prop("disabled", false);
                console.log(whatImg2);
            }
            changeTheImage()
        });
    
        //ADD / REMOVE BELT
        $(document).on('click', '#removeBelt, #addBelt', function() {
            var $button = $(this);
            if ($button.text() === 'REMOVE BELT') {
                $button.text('ADD BELT').attr('id', 'addBelt');
                whatImg2[5] = "-NoBelt";
                console.log(whatImg2);
            } else {
                $button.text('REMOVE BELT').attr('id', 'removeBelt');
                whatImg2[5] = "";
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
                console.log(whatImg2);
            } else {
                $button.text('REMOVE SHIRT').attr('id', 'addShirt');
                whatImg2[4] = "";
                console.log(whatImg2);
            }
            changeTheImage()
        });

        //ADD / REMOVE ARM WRAPS
        $(document).on('click', '#removeArmWraps, #addArmsWraps', function() {
            var $button = $(this);
            if ($button.text() === 'REMOVE ARM WRAPS') {
                $button.text('ADD ARM WRAPS').attr('id', 'addArmsWraps');
                whatImg2[3] = "-NoArmWraps";
                console.log(whatImg2);
            } else {
                $button.text('REMOVE ARM WRAPS').attr('id', 'removeArmWraps');
                whatImg2[3] = "";
                console.log(whatImg2);
            }
            changeTheImage()
        });

        //ADD / REMOVE BOOTS
        $(document).on('click', '#removeBoots, #addBoots', function() {
            var $button = $(this);
            if ($button.text() === 'REMOVE BOOTS') {
                $button.text('ADD BOOTS').attr('id', 'addBoots');
                whatImg2[7] = "-NoBoots";
                console.log(whatImg2);
            } else {
                $button.text('REMOVE BOOTS').attr('id', 'removeBoots');
                whatImg2[7] = "";
                console.log(whatImg2);
            }
            changeTheImage()
        });

        //ADD / REMOVE VEST
        $(document).on('click', '#removeVest, #addVest', function() {
            var $button = $(this);
            if ($button.text() === 'REMOVE VEST') {
                $button.text('ADD VEST').attr('id', 'addVest');
                whatImg2[2] = "-NoVest";
                $("#openVest, #removeVest").css("background-color", "darkgray");
                $("#openVest, #removeVest").prop("disabled", true);
                console.log(whatImg2);
            } else {
                $button.text('REMOVE VEST').attr('id', 'removeVest');
                whatImg2[2] = "";
                $("#openVest, #removeVest").css("background-color", "white");
                $("#openVest, #removeVest").prop("disabled", false);
                console.log(whatImg2);
            }
            changeTheImage()
        });
    
        //ADD / REMOVE PANTS
        $(document).on('click', '#removePants, #addPants', function() {
            var $button = $(this);
            if ($button.text() === 'REMOVE PANTS') {
                $button.text('ADD PANTS').attr('id', 'addPants');
                whatImg2[6] = "-NoPants";
                $("#lowerPants").css("background-color", "darkgray");
                $("#lowerPants").prop("disabled", true);
                console.log(whatImg2);
            } else {
                $button.text('REMOVE PANTS').attr('id', 'removePants');
                whatImg2[6] = "";
                $("#lowerPants").css("background-color", "white");
                $("#lowerPants").prop("disabled", false);
                console.log(whatImg2);
            }
            changeTheImage()
        });

        //LOOSE / TIED HAIR
        $(document).on('click', '#looseHair, #tiedHair', function() {
            var $button = $(this);
            if ($button.text() === 'LOOSE HAIR') {
                $button.text('TIED HAIR').attr('id', 'tiedHair');
                whatImg2[1] = "-LooseHair";
                console.log(whatImg2);
            } else {
                $button.text('LOOSE HAIR').attr('id', 'looseHair');
                whatImg2[1] = "";
                console.log(whatImg2);
            }
            changeTheImage()
        });

        function changeTheImage() {
            let whatImg = whatImg2.join("");
            let img = new Image();
            img.src = "assets/media/" + whatImg + ".png";
            console.log(whatImg);
            img.onload = function () {
                $("body").css("background-image", "url('" + img.src + "')");
            };
            img.onerror = function () {
                console.error("Image not found:", img.src);
                alert(whatImg);
                $("body").css("background-image", "url('assets/media/fallback.png')"); // Use a fallback image
            };
        }
    });