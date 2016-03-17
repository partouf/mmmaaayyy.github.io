
var PlayerCharacter = {
    Name: "",
    IsLoaded: false,
    Load: function() {
        this.Name = localStorage.PlayerCharacterName;
    },
    Save: function() {
        localStorage.PlayerCharacterName = this.Name;
    }
};

$(document).ready(function() {
    if (!PlayerCharacter.IsLoaded) {
        PlayerCharacter.Load();
    }
});
