characterService = (function () {

    var findById = function (id) {
            var deferred = $.Deferred();
            var character = null;
            var character_list_length = characters.length;
            for (var i = 0; i < character_list_length; i++) {
                if (characters[i].id == id) {
                    character = characters[i];
                    break;
                }
            }
            deferred.resolve(character);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred();
            var results = characters.filter(function (element)
            {
                var name = element.name;
                return name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        characters = [
                          {"id": 1, "name": 'Ryu', "country": 'Japan', "tagline":"You must defeat Sheng Long to stand a chance.", "power": 7, "speed": 7, "jump": 7, "range": 7, "special_moves":[{"move_name":"Fireball", "move_steps":"DOWN, DOWN-RIGHT, RIGHT, PUNCH"}, {"move_name":"Hurrican Kick", "move_steps":"DOWN, DOWN-LEFT, LEFT, KICK"}, {"move_name":"Dragon Punch", "move_steps":"RIGHT, DOWN, DOWN-RIGHT, RIGHT, PUNCH"}], "icon":'https://cdn.wikimg.net/strategywiki/images/3/37/Portrait_SF2_Ryu.png', "character_list_item_backgroundcolor": "#ff9b9b"},
                          {"id": 2, "name": 'E. Honda', "country": 'Japan', "tagline":"Can't you do better than that?", "power": 9, "speed": 6, "jump": 6, "range": 7, "special_moves":[{"move_name":"Hundred Hand Slap", "move_steps":"PUNCH, PUNCH PUNCH..."}, {"move_name":"Sumo Headbutt", "move_steps":"LEFT (2 sec.), RIGHT, PUNCH"}], "icon":'https://cdn.wikimg.net/strategywiki/images/5/5a/Portrait_SF2_EHonda.png', "character_list_item_backgroundcolor": "#9bb9ff"},
                          {"id": 3, "name": 'Blanka', "country": 'Brazil', "tagline":"Seeing you in action is a joke.", "power": 7, "speed": 6, "jump": 6, "range": 7, "special_moves":[{"move_name":"Rolling Attack", "move_steps":"LEFT (2 sec.), RIGHT, PUNCH"}, {"move_name":"Electricity", "move_steps":"PUNCH, PUNCH, PUNCH..."}], "icon":'https://cdn.wikimg.net/strategywiki/images/a/ad/Portrait_SF2_Blanka.png', "character_list_item_backgroundcolor": "#a4cc9b"},
                          {"id": 4, "name": 'Guile', "country": 'USA', "tagline":"Go home and be a family man.", "power": 8, "speed": 8, "jump": 7, "range": 8, "special_moves":[{"move_name":"Sonic Boom", "move_steps":"LEFT (2 sec.), RIGHT, PUNCH"}, {"move_name":"Flash Kick", "move_steps":"DOWN  (2 sec.), UP, KICK"}], "icon":'https://cdn.wikimg.net/strategywiki/images/4/4e/Portrait_SF2_Guile.png', "character_list_item_backgroundcolor": "#f3ff8e"},
                          {"id": 5, "name": 'Ken', "country": 'USA', "tagline":"Attack me if you dare, I will crush you.", "power": 7, "speed": 7, "jump": 7, "range": 7, "special_moves":[{"move_name":"Fireball", "move_steps":"DOWN, DOWN-RIGHT, RIGHT, PUNCH"}, {"move_name":"Hurrican Kick", "move_steps":"DOWN, DOWN-LEFT, LEFT, KICK"}, {"move_name":"Dragon Punch", "move_steps":"RIGHT, DOWN, DOWN-RIGHT, RIGHT, PUNCH"}], "icon":'https://cdn.wikimg.net/strategywiki/images/5/50/Portrait_SF2_Ken.png', "character_list_item_backgroundcolor": "#ff8466"},
                          {"id": 6, "name": 'Chun Li', "country": 'China', "tagline":"I'm the strongest woman in the world.", "power": 6, "speed": 9, "jump": 9, "range": 7, "special_moves":[{"move_name":"Lightning Kick", "move_steps":"KICK, KICK, KICK..."}, {"move_name":"Spinning Bird Kick", "move_steps":"DOWN (2 sec.), UP, KICK"}], "icon":'https://cdn.wikimg.net/strategywiki/images/e/e2/Portrait_SF2_ChunLi.png', "character_list_item_backgroundcolor": "#6670ff"},
                          {"id": 7, "name": 'Zangief', "country": 'USSR', "tagline":"My strength is much greater than yours.", "power": 7, "speed": 5, "jump": 4, "range": 4, "special_moves":[{"move_name":"Spinning Clothesline", "move_steps":"PUNCH + PUNCH"}, {"move_name":"Spinning Piledriver", "move_steps":"270 degree motion close to opponent, PUNCH"}], "icon":'https://cdn.wikimg.net/strategywiki/images/8/81/Portrait_SF2_Zangief.png', "character_list_item_backgroundcolor": "#ffa551"},
                          {"id": 8, "name": 'Dhalsim', "country": 'India', "tagline":"I will meditate and then destroy you.", "power": 5, "speed": 4, "jump": 6, "range": 10, "special_moves":[{"move_name":"Yoga Fire", "move_steps":"DOWN, DOWN-RIGHT, RIGHT, PUNCH"}, {"move_name":"Yoga Flame", "move_steps":"LEFT, DOWN-LEFT, DOWN, DOWN-RIGHT, PUNCH"}], "icon":'https://cdn.wikimg.net/strategywiki/images/8/88/Portrait_SF2_Dhalsim.png', "character_list_item_backgroundcolor": "#ffea51"}
                   ];

    // The public API
    return {
        findById: findById,
        findByName: findByName
    };

}());