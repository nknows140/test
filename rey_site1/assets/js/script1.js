$(document).ready(function(){
    let whatImg = "PiperClothed";

    // OPEN / CLOSE JACKET
    $(document).on('click', '#openJacket, #closeJacket', function() {
        var $button = $(this);
        if ($button.text() === 'OPEN JACKET') {
            $button.text('CLOSE JACKET').attr('id', 'closeJacket');
            switch(whatImg){
                case "PiperClothed":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-OpenJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-OpenJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-OpenJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-OpenJacket-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-OpenJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-OpenJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-PantsDown-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-PantsDown-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-OpenJacket-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
            }
        } else {
            $button.text('OPEN JACKET').attr('id', 'openJacket');
            switch(whatImg){
                case "PiperClothed-OpenJacket":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-PantsDown-NoShirt-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoPants-NoShirt-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    whatImg = "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
            }
        }
    });

    //ADD / REMOVE HAT
    $(document).on('click', '#removeHat, #addHat', function() {
        var $button = $(this);
        if ($button.text() === 'REMOVE HAT') {
            $button.text('ADD HAT').attr('id', 'removeHat');
            switch(whatImg){
                case "PiperClothed":
                    whatImg = "PiperClothed-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoGloves":
                    whatImg = "PiperClothed-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoBoots":
                    whatImg = "PiperClothed-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket":
                    whatImg = "PiperClothed-OpenJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoGloves":
                    whatImg = "PiperClothed-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoBoots":
                    whatImg = "PiperClothed-OpenJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoGloves-NoBoots":
                    whatImg = "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt":
                    whatImg = "PiperClothed-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoGloves":
                    whatImg = "PiperClothed-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoBoots":
                    whatImg = "PiperClothed-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket":
                    whatImg = "PiperNoJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoGloves":
                    whatImg = "PiperNoJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoBoots":
                    whatImg = "PiperNoJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown":
                    whatImg = "PiperClothed-PantsDown-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoGloves":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoBoots":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown":
                    whatImg = "PiperNoJacket-PantsDown-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoGloves":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants":
                    whatImg = "PiperClothed-NoPants-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoGloves":
                    whatImg = "PiperClothed-NoPants-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoGloves":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoBoots":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt":
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt-NoGloves":
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants":
                    whatImg = "PiperNoJacket-NoPants-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoGloves":
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoBoots":
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
            }
        } else {
            $button.text('REMOVE HAT').attr('id', 'addHat');
            switch(whatImg){
                case "PiperClothed-NoHat":
                    whatImg = "PiperClothed";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoGloves":
                    whatImg = "PiperClothed-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoBoots":
                    whatImg = "PiperClothed-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat":
                    whatImg = "PiperClothed-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoGloves":
                    whatImg = "PiperClothed-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoBoots":
                    whatImg = "PiperClothed-OpenJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt":
                    whatImg = "PiperClothed-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoGloves":
                    whatImg = "PiperClothed-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoBoots":
                    whatImg = "PiperClothed-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat":
                    whatImg = "PiperNoJacket";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoGloves":
                    whatImg = "PiperClothed-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoBoots":
                    whatImg = "PiperClothed-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat":
                    whatImg = "PiperClothed-PantsDown";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat":
                    whatImg = "PiperClothed-PantsDown-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat-NoBoots":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt":
                    whatImg = "PiperClothed-PantsDown-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat":
                    whatImg = "PiperNoJacket-PantsDown";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoBoots":
                    whatImg = "PiperClothed-NoBoots-PantsDown";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat":
                    whatImg = "PiperClothed-NoPants";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoGloves":
                    whatImg = "PiperClothed-NoPants-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat":
                    whatImg = "PiperClothed-NoPants-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat-NoBoots":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt":
                    whatImg = "PiperClothed-NoPants-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt-NoGloves":
                    whatImg = "PiperClothed-NoPants-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat":
                    whatImg = "PiperNoJacket-NoPants";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoGloves":
                    whatImg = "PiperClothed-NoPants-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
            }
        }
    });

    //ADD / REMOVE SHIRT
    $(document).on('click', '#removeShirt, #addShirt', function() {
        var $button = $(this);
        if ($button.text() === 'REMOVE SHIRT') {
            $button.text('ADD SHIRT').attr('id', 'removeShirt');
            switch(whatImg){
                case "PiperClothed":
                    whatImg = "PiperClothed-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat":
                    whatImg = "PiperClothed-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoGloves":
                    whatImg = "PiperClothed-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoBoots":
                    whatImg = "PiperClothed-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoGloves":
                    whatImg = "PiperClothed-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoBoots":
                    whatImg = "PiperClothed-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown":
                    whatImg = "PiperClothed-PantsDown-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants":
                    whatImg = "PiperClothed-NoPants-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat":
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoGloves":
                    whatImg = "PiperClothed-NoPants-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoGloves":
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                }
            } else {
                $button.text('REMOVE SHIRT').attr('id', 'addShirt');
                switch(whatImg){
                    case "PiperClothed-NoShirt":
                        whatImg = "PiperClothed";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoHat-NoShirt":
                        whatImg = "PiperClothed-NoHat";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoShirt-NoGloves":
                        whatImg = "PiperClothed-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoShirt-NoBoots":
                        whatImg = "PiperClothed-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoHat-NoShirt-NoGloves":
                        whatImg = "PiperClothed-NoHat-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoHat-NoShirt-NoBoots":
                        whatImg = "PiperClothed-NoHat-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoShirt-NoGloves-NoBoots":
                        whatImg = "PiperClothed-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoHat-NoShirt-NoGloves-NoBoots":
                        whatImg = "PiperClothed-NoHat-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoShirt":
                        whatImg = "PiperClothed-PantsDown";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoHat-NoShirt":
                        whatImg = "PiperClothed-PantsDown-NoHat";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoShirt-NoGloves":
                        whatImg = "PiperClothed-PantsDown-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoShirt-NoBoots":
                        whatImg = "PiperClothed-PantsDown-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves":
                        whatImg = "PiperClothed-PantsDown-NoHat-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoHat-NoShirt-NoBoots":
                        whatImg = "PiperClothed-PantsDown-NoHat-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoShirt-NoGloves-NoBoots":
                        whatImg = "PiperClothed-PantsDown-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves-NoBoots":
                        whatImg = "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoShirt":
                        whatImg = "PiperClothed-NoPants";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoHat-NoShirt":
                        whatImg = "PiperClothed-NoPants-NoHat";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoShirt-NoGloves":
                        whatImg = "PiperClothed-NoPants-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoShirt-NoBoots":
                        whatImg = "PiperClothed-NoPants-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoHat-NoShirt-NoGloves":
                        whatImg = "PiperClothed-NoPants-NoHat-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoHat-NoShirt-NoBoots":
                        whatImg = "PiperClothed-NoPants-NoHat-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoShirt-NoGloves-NoBoots":
                        whatImg = "PiperClothed-NoPants-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoHat-NoShirt-NoGloves-NoBoots":
                        whatImg = "PiperClothed-NoPants-NoHat-NoShirt-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                }
            }
    });

    //ADD / REMOVE GLOVES
    $(document).on('click', '#removeGloves, #addGloves', function() {
        var $button = $(this);
        if ($button.text() === 'REMOVE GLOVES') {
            $button.text('ADD GLOVES').attr('id', 'removeGloves');
            switch(whatImg){
                case "PiperClothed":
                    whatImg = "PiperClothed-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat":
                    whatImg = "PiperClothed-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoBoots":
                    whatImg = "PiperClothed-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoBoots":
                    whatImg = "PiperClothed-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket":
                    whatImg = "PiperClothed-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat":
                    whatImg = "PiperClothed-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoBoots":
                    whatImg = "PiperClothed-OpenJacket-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoBoots":
                    whatImg = "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt":
                    whatImg = "PiperClothed-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt":
                    whatImg = "PiperClothed-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoBoots":
                    whatImg = "PiperClothed-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoBoots":
                    whatImg = "PiperClothed-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket":
                    whatImg = "PiperNoJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat":
                    whatImg = "PiperNoJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoBoots":
                    whatImg = "PiperNoJacket-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoBoots":
                    whatImg = "PiperNoJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoShirt-NoBoots":
                    whatImg = "PiperNoJacket-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown":
                    whatImg = "PiperClothed-PantsDown-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoBoots":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat-NoBoots":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt":
                    whatImg = "PiperClothed-PantsDown-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoShirt-noGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown":
                    whatImg = "PiperNoJacket-PantsDown-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoShirt-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants":
                    whatImg = "PiperClothed-NoPants-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat":
                    whatImg = "PiperClothed-NoPants-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoBoots":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat-NoBoots":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt":
                    whatImg = "PiperClothed-NoPants-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt":
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoShirt-noGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants":
                    whatImg = "PiperNoJacket-NoPants-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat":
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoBoots":
                    whatImg = "PiperNoJacket-NoPants-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoBoots":
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoShirt-NoBoots":
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
            }
        } else {
            $button.text('REMOVE GLOVES').attr('id', 'addGloves');
            switch(whatImg){
                case "PiperClothed-NoGloves":
                    whatImg = "PiperClothed";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoGloves":
                    whatImg = "PiperClothed-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoGloves":
                    whatImg = "PiperClothed-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoGloves":
                    whatImg = "PiperClothed-OpenJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoGloves-NoBoots":
                    whatImg = "PiperClothed-OpenJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-OpenJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoGloves":
                    whatImg = "PiperClothed-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoGloves":
                    whatImg = "PiperClothed-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoGloves":
                    whatImg = "PiperNoJacket";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoGloves":
                    whatImg = "PiperNoJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoGloves":
                    whatImg = "PiperClothed-PantsDown";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoGloves":
                    whatImg = "PiperClothed-PantsDown-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt-noGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoGloves":
                    whatImg = "PiperNoJacket-PantsDown";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoGloves":
                    whatImg = "PiperNoJacket-PantsDown-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoGloves":
                    whatImg = "PiperClothed-NoPants";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoGloves":
                    whatImg = "PiperClothed-NoPants-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoGloves":
                    whatImg = "PiperClothed-NoPants-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt-NoGloves":
                    whatImg = "PiperClothed-NoPants-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt-NoGloves":
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt-noGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoGloves":
                    whatImg = "PiperNoJacket-NoPants";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoGloves":
                    whatImg = "PiperNoJacket-NoPants-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
            }
        }
    });

    //ADD / REMOVE BOOTS
    $(document).on('click', '#removeBoots, #addBoots', function() {
        var $button = $(this);
        if ($button.text() === 'REMOVE BOOTS') {
            $button.text('ADD BOOTS').attr('id', 'removeBoots');
            switch(whatImg){
                case "PiperClothed":
                    whatImg = "PiperClothed-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat":
                    whatImg = "PiperClothed-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoGloves":
                    whatImg = "PiperClothed-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoGloves":
                    whatImg = "PiperClothed-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket":
                    whatImg = "PiperClothed-OpenJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat":
                    whatImg = "PiperClothed-OpenJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoGloves":
                    whatImg = "PiperClothed-OpenJacket-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoGloves":
                    whatImg = "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt":
                    whatImg = "PiperClothed-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt":
                    whatImg = "PiperClothed-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoGloves":
                    whatImg = "PiperClothed-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoGloves":
                    whatImg = "PiperClothed-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket":
                    whatImg = "PiperNoJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat":
                    whatImg = "PiperNoJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoGloves":
                    whatImg = "PiperNoJacket-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoGloves":
                    whatImg = "PiperNoJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoShirt-NoGloves":
                    whatImg = "PiperNoJacket-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown":
                    whatImg = "PiperClothed-PantsDown-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoGloves":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt":
                    whatImg = "PiperClothed-PantsDown-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown":
                    whatImg = "PiperNoJacket-PantsDown-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoGloves":
                    whatImg = "PiperNoJacket-PantsDown-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoGloves":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoShirt-NoGloves":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants":
                    whatImg = "PiperClothed-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat":
                    whatImg = "PiperClothed-NoPants-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoGloves":
                    whatImg = "PiperClothed-NoPants-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoGloves":
                    whatImg = "PiperClothed-NoPants-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoGloves":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt":
                    whatImg = "PiperClothed-NoPants-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt":
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt-NoGloves":
                    whatImg = "PiperClothed-NoPants-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt-NoGloves":
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants":
                    whatImg = "PiperNoJacket-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat":
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoGloves":
                    whatImg = "PiperNoJacket-NoPants-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoGloves":
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoShirt-NoGloves":
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
            }
        } else {
            $button.text('REMOVE BOOTS').attr('id', 'addBoots');
            switch(whatImg){
                case "PiperClothed-NoBoots":
                    whatImg = "PiperClothed";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoBoots":
                    whatImg = "PiperClothed-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoBoots":
                    whatImg = "PiperClothed-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoBoots":
                    whatImg = "PiperClothed-OpenJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoGloves-NoBoots":
                    whatImg = "PiperClothed-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirtNoBoots":
                    whatImg = "PiperClothed-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoBoots":
                    whatImg = "PiperClothed-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoBoots":
                    whatImg = "PiperNoJacket";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoBoots":
                    whatImg = "PiperNoJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoBoots":
                    whatImg = "PiperClothed-PantsDown";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoBoots":
                    whatImg = "PiperClothed-PantsDown-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat-NoBoots":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirtNoBoots":
                    whatImg = "PiperClothed-PantsDown-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoBoots":
                    whatImg = "PiperClothed-NoPants";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoBoots":
                    whatImg = "PiperClothed-NoPants-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat-NoBoots":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirtNoBoots":
                    whatImg = "PiperClothed-NoPants-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoBoots":
                    whatImg = "PiperNoJacket-NoPants";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoBoots":
                    whatImg = "PiperNoJacket-NoPants-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-NoPants-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
            }
        }
    });

    //ADD / REMOVE JACKET
    $(document).on('click', '#removeJacket, #addJacket', function() {
        var $button = $(this);
        if ($button.text() === 'REMOVE JACKET') {
            $button.text('ADD JACKET').attr('id', 'removeJacket');
            switch(whatImg){
                case "PiperClothed":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-PantsDown-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoShirt-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt-NoGloves":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoShirt-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "grey");
                    $("#closeJacket").css("background-color", "grey");
                    whatImg = "PiperClothed-NoJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
            }
        } else {
            $button.text('REMOVE JACKET').attr('id', 'addJacket');
            switch(whatImg){
                case "PiperNoJacket":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-OpenJacket":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-OpenJacket-NoHat":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-OpenJacket-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-OpenJacket-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-OpenJacket-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoShirt-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperNoJacket-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoShirt-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-OpenJacket":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-OpenJacket-NoHat":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-OpenJacket-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-OpenJacket-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-OpenJacket-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoShirt-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoShirt-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-PantsDown-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-OpenJacket":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-OpenJacket-NoHat":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-OpenJacket-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-OpenJacket-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-OpenJacket-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoShirt-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoGloves":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoPants-NoHat-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoPants-NoHat-NoShirt-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "#f8f9fa");
                    $("#openJacket").css("background-color", "#f8f9fa");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoPants-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoJacket-NoHat-NoGloves-NoBoots":
                    $("#removeShirt").css("background-color", "grey");
                    $("#openJacket").css("background-color", "grey");
                    $("#addShirt").css("background-color", "#f8f9fa");
                    $("#closeJacket").css("background-color", "#f8f9fa");
                    whatImg = "PiperClothed-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
            }
        }
    });

    //LOWER / RAISE PANTS
    $(document).on('click', '#lowerPants, #raisePants', function() {
        var $button = $(this);
        if ($button.text() === 'LOWER PANTS') {
            $button.text('RAISE PANTS').attr('id', 'raisePants');
            switch(whatImg){
                case "PiperClothed":
                    whatImg = "PiperClothed-PantsDown";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat":
                    whatImg = "PiperClothed-PantsDown-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket":
                    whatImg = "PiperClothed-PantsDown-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoGloves":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoBoots":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoBoots":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt":
                    whatImg = "PiperClothed-PantsDown-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoGloves":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket":
                    whatImg = "PiperNoJacket-PantsDown";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat":
                    whatImg = "PiperNoJacket-PantsDown-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoGloves":
                    whatImg = "PiperNoJacket-PantsDown-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoGloves":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoShirt-NoGloves":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoShirt-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperNoJacket-PantsDown-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots":
                    whatImg = "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                }
            } else {
                $button.text('LOWER PANTS').attr('id', 'lowerPants');
                switch(whatImg){
                    case "PiperClothed-PantsDown":
                        whatImg = "PiperClothed";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoHat":
                        whatImg = "PiperClothed-NoHat";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoGloves":
                        whatImg = "PiperClothed-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoBoots":
                        whatImg = "PiperClothed-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoHat-NoGloves":
                        whatImg = "PiperClothed-NoHat-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoHat-NoBoots":
                        whatImg = "PiperClothed-NoHat-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoGloves-NoBoots":
                        whatImg = "PiperClothed-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoHat-NoGloves-NoBoots":
                        whatImg = "PiperClothed-NoHat-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-OpenJacket":
                        whatImg = "PiperClothed-OpenJacket";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-OpenJacket-NoHat":
                        whatImg = "PiperClothed-OpenJacket-NoHat";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-OpenJacket-NoGloves":
                        whatImg = "PiperClothed-OpenJacket-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-OpenJacket-NoBoots":
                        whatImg = "PiperClothed-OpenJacket-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves":
                        whatImg = "PiperClothed-NoHat-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-OpenJacket-NoHat-NoBoots":
                        whatImg = "PiperClothed-NoHat-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoShirt":
                        whatImg = "PiperClothed-NoShirt";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoHat-NoShirt":
                        whatImg = "PiperClothed-NoHat-NoShirt";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoShirt-NoGloves":
                        whatImg = "PiperClothed-NoShirt-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoShirt-NoBoots":
                        whatImg = "PiperClothed-NoShirt-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves":
                        whatImg = "PiperClothed-NoHat-NoShirt-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoHat-NoShirt-NoBoots":
                        whatImg = "PiperClothed-NoHat-NoShirt-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoShirt-NoGloves-NoBoots":
                        whatImg = "PiperClothed-NoShirt-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-NoHat-NoShirt-NoGloves-NoBoots":
                        whatImg = "PiperClothed-NoHat-NoShirt-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-PantsDown":
                        whatImg = "PiperNoJacket";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-PantsDown-NoHat":
                        whatImg = "PiperNoJacket-NoHat";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-PantsDown-NoGloves":
                        whatImg = "PiperNoJacket-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-PantsDown-NoBoots":
                        whatImg = "PiperNoJacket-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-PantsDown-NoHat-NoBoots":
                        whatImg = "PiperNoJacket-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-PantsDown-NoHat-NoGloves":
                        whatImg = "PiperNoJacket-NoHat-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-PantsDown-NoGloves-NoBoots":
                        whatImg = "PiperNoJacket-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-PantsDown-NoHat-NoShirt-NoGloves":
                        whatImg = "PiperNoJacket-NoHat-NoShirt-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-PantsDown-NoHat-NoShirt-NoBoots":
                        whatImg = "PiperNoJacket-NoHat-NoShirt-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-OpenJacket-NoGloves-NoBoots":
                        whatImg = "PiperClothed-OpenJacket-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-PantsDown-NoHat-NoGloves-NoBoots":
                        whatImg = "PiperNoJacket-NoHat-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves-NoBoots":
                        whatImg = "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                }
            }
    });

    //ADD / REMOVE PANTS
    $(document).on('click', '#removePants, #addPants', function() {
        var $button = $(this);
        if ($button.text() === 'REMOVE PANTS') {
            $button.text('ADD PANTS').attr('id', 'addPants');
            switch(whatImg){
                case "PiperClothed":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoGloves":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoGloves":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoGloves-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoGloves-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoGloves":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoGloves":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoGloves-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoGloves":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoGloves":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoShirt-NoGloves-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoGloves-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoGloves":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-lowerPants":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoGloves":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoGloves-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoShirt-NoGloves":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoShirt-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoGloves-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoGloves-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoGloves":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoHat";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoGloves":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoGloves-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoHat-NoShirt":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoHat-NoShirt";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoGloves":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt-NoGloves":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoShirt-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-NoHat-NoShirt-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt-NoGloves-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoShirt-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-NoShirt-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-NoShirt-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoGloves":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoGloves";
                    changeBackgroundImage();
                break;
                case "PiperClothed-OpenJacket-NoGloves-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoGloves-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-NoHat-NoGloves-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperNoJacket-PantsDown-NoHat-NoGloves-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperNoJacket-NoPants-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                case "PiperClothed-PantsDown-OpenJacket-NoHat-NoGloves-NoBoots":
                    $("#lowerPants").css("background-color", "grey");
                    $("#raisePants").css("background-color", "grey");
                    whatImg = "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots";
                    changeBackgroundImage();
                break;
                }
            } else {
                $button.text('REMOVE PANTS').attr('id', 'removePants');
                switch(whatImg){
                    case "PiperClothed-NoPants":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoHat":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoHat";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoGloves":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoHat-NoGloves":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoHat-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoHat-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoHat-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoGloves-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoHat-NoGloves-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoHat-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-OpenJacket":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-OpenJacket";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-OpenJacket-NoHat":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-OpenJacket-NoHat";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-OpenJacket-NoGloves":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-OpenJacket-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-OpenJacket-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-OpenJacket-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-OpenJacket-NoHat-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-OpenJacket-NoHat-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-OpenJacket-NoPants-NoGloves-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoShirt":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoShirt";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoShirt-NoGloves":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoShirt-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoHat-NoShirt":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoHat-NoShirt";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoShirt-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoShirt-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoHat-NoShirt-NoGloves":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoHat-NoShirt-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoHat-NoShirt-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoHat-NoShirt-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoShirt-NoGloves-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoShirt-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoHat-NoShirt-NoGloves-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoHat-NoShirt-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-NoPants":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperNoJacket";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-NoPants-NoHat":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperNoJacket-NoHat";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-NoPants-NoGloves":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperNoJacket-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-NoPants-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperNoJacket-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-OpenJacket-NoHat-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-NoPants-NoHat-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperNoJacket-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-NoPants-NoHat-NoGloves":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperNoJacket-NoHat-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-NoPants-NoGloves-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperNoJacket-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-NoPants-NoHat-NoShirt-NoGloves":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperNoJacket-NoHat-NoShirt-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-NoPants-NoHat-NoShirt-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperNoJacket-NoHat-NoShirt-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoHat-NoGloves-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-PantsDown-NoHat-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoHat-NoGloves":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-PantsDown-NoHat-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoGloves":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoHat":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-PantsDown-NoPants-NoHat";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoHat":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-PantsDown-NoPants-NoShirt";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoGloves":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoHat-NoShirt":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoHat-NoShirt";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoGloves-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoHat-NoShirt-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoShirt-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoShirt-NoGloves-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoShirt-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-NoShirt-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoShirt-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-OpenJacket-NoGloves":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-NoShirt-NoGloves";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-OpenJacket-NoGloves-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-OpenJacket-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-OpenJacket-NoHat-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-OpenJacket-NoHat-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-NoPants-NoHat-NoGloves-NoBoots":
                        whatImg = "PiperNoJacket-NoHat-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperNoJacket-NoPants-NoHat-NoGloves-NoBoots":
                        whatImg = "PiperNoJacket-NoHat-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                    case "PiperClothed-NoPants-OpenJacket-NoHat-NoGloves-NoBoots":
                        $("#lowerPants").css("background-color", "#f8f9fa");
                        $("#raisePants").css("background-color", "#f8f9fa");
                        whatImg = "PiperClothed-OpenJacket-NoHat-NoGloves-NoBoots";
                        changeBackgroundImage();
                    break;
                }
            }
    });

    function changeBackgroundImage(){
        $("body").css("background-image", "url(assets/media/" + whatImg + ".png)");
        console.log(whatImg);
    }
});