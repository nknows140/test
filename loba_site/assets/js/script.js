$(document).ready(function(){
let whatImg2 = ["lobaClothed", "", "", "", "", "", ""];

    // ADD / REMOVE CORSET
    $(document).on('click', '#addCorset, #removeCorset', function() {
        var $button = $(this);
        if ($button.text() === 'REMOVE CORSET') {
            $button.text('ADD CORSET').attr('id', 'addCorset');
            whatImg2[1] = "-noCorset";
            console.log(whatImg2);
        } else {
            $button.text('REMOVE CORSET').attr('id', 'removeCorset');
            whatImg2[1] = "";
            console.log(whatImg2);
        }
        changeTheImage()
    });

    //ADD / REMOVE ACCESSORIES
    $(document).on('click', '#removeAccessories, #addAccessories', function() {
        var $button = $(this);
        if ($button.text() === 'REMOVE ACCESSORIES') {
            $button.text('ADD ACCESSORIES').attr('id', 'addAccessories');
            whatImg2[6] = "-noAccessories";
            console.log(whatImg2);
        } else {
            $button.text('REMOVE ACCESSORIES').attr('id', 'removeAccessories');
            whatImg2[6] = "";
            console.log(whatImg2);
        }
        changeTheImage()
    });

    //ADD / REMOVE COAT
    $(document).on('click', '#removeCoat, #addCoat', function() {
        var $button = $(this);
        if ($button.text() === 'REMOVE COAT') {
            $button.text('ADD COAT').attr('id', 'addCoat');
            whatImg2[2] = "-noCoat";
            console.log(whatImg2);
        } else {
            $button.text('REMOVE COAT').attr('id', 'removeCoat');
            whatImg2[2] = "";
            console.log(whatImg2);
        }
        changeTheImage()
    });

    //ADD / REMOVE GLOVES
    $(document).on('click', '#removeGloves, #addGloves', function() {
        var $button = $(this);
        if ($button.text() === 'REMOVE GLOVES') {
            $button.text('ADD GLOVES').attr('id', 'removeGloves');
            whatImg2[3] = "-noGloves";
            console.log(whatImg2);
        } else {
            $button.text('REMOVE GLOVES').attr('id', 'addGloves');
            whatImg2[3] = "";
            console.log(whatImg2);
        }
        changeTheImage()
    });

    //ADD / REMOVE PANTS
    $(document).on('click', '#removePants, #addPants', function() {
        var $button = $(this);
        if ($button.text() === 'REMOVE PANTS') {
            $button.text('ADD PANTS').attr('id', 'addPants');
            whatImg2[0] = "lobaNoPants";
            console.log(whatImg2);
        } else {
            $button.text('REMOVE PANTS').attr('id', 'removePants');
            whatImg2[0] = "lobaClothed";
            console.log(whatImg2);
        }
        changeTheImage()
    });

    //ADD / REMOVE BELT
    $(document).on('click', '#removeBelt, #addBelt', function() {
        var $button = $(this);
        if ($button.text() === 'REMOVE BELT') {
            $button.text('ADD BELT').attr('id', 'addBelt');
            whatImg2[4] = "-noBelt";
            console.log(whatImg2);
        } else {
            $button.text('REMOVE BELT').attr('id', 'removeBelt');
            whatImg2[4] = "";
            console.log(whatImg2);
        }
        changeTheImage()
    });

    //ADD / REMOVE BOOTS
    $(document).on('click', '#removeBoots, #addBoots', function() {
        var $button = $(this);
        if ($button.text() === 'REMOVE BOOTS') {
            $button.text('ADD BOOTS').attr('id', 'addBoots');
            whatImg2[5] = "-noBoots";
            console.log(whatImg2);
        } else {
            $button.text('REMOVE BOOTS').attr('id', 'removeBoots');
            whatImg2[5] = "";
            console.log(whatImg2);
        }
        changeTheImage()
    });

    function changeTheImage(){
        let whatImg = whatImg2.join("");
        $("#theImage").attr("src", "assets/media/" + whatImg + ".png");
        console.log(whatImg);
    }
});