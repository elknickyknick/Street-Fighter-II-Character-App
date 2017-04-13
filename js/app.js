var HeaderComponent = React.createClass({
    //---This component is used in both the home page and the character page
    render: function () {
        return (
            <h1 id="page_title">{this.props.text}</h1>
        );
    }
});

//---These components are used for the home page
var SearchBarComponent = React.createClass({
    getInitialState: function() {
        return {searchKey: ""};
    },
    searchHandler: function(event) {
        var searchKey = event.target.value;
        this.setState({searchKey: searchKey});
        this.props.searchHandler(searchKey);
    },
    render: function () {
        return (
            <input id="search_bar" type="search" onChange={this.searchHandler} />
        );
    }
});
var CharacterListItemComponent = React.createClass({
    render: function () {
        var backgroundcolor = this.props.character.character_list_item_backgroundcolor;
        var style = {backgroundColor: backgroundcolor};
        return (
            <div className="character_list_item" style={style}>
                <a href={"#characters/" + this.props.character.id}>
                   <img className="character_list_item_icon" src={this.props.character.icon} />
                   <div className="character_list_item_info">
                     <h3 className="character_list_item_name">{this.props.character.name}</h3>
                     <p className="character_list_item_country">{this.props.character.country}</p>
                   </div>
                 </a>
            </div>
        );
    }
});
var CharacterListComponent = React.createClass({
    render: function () {
        var my_characters = this.props.characters.map(function (character) {
            return (
                <CharacterListItemComponent key={character.id} character={character} />
            );
        });
        console.log(items);
        return (
            <div>
                {my_characters}
            </div>
        );
    }
});
var HomePage = React.createClass({
    getInitialState: function() {
        return {characters: []}
    },
    searchHandler:function(key) {
        this.props.service.findByName(key).done(function(result) {
            this.setState({searchKey: key, characters: result});
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                <HeaderComponent text="Character List"/>
                <SearchBarComponent searchHandler={this.searchHandler}/>
                <CharacterListComponent characters={this.state.characters}/>
            </div>
        );
    }
});

//---These components are used in the chartacter page
//---Just like the CharacterListComponent, there's a component that holds the info
//    for every singular item on the list. The first component renders how the information...
var SpecialMoveComponent = React.createClass({
    render: function(){
        return(
            <div>
                   <h3 className="character_page_move_name">{this.props.move.move_name}</h3>
                   <p className="character_page_move_steps"><i>{this.props.move.move_steps}</i></p>
            </div>
            );
    }
});
//   ...the second component handles the mapping of the information.
var SpecialMoveListComponent = React.createClass({
    render: function(){
        var special_moves = this.props.moves.map(function(move){
            return(
                <SpecialMoveComponent move={move} />
                );
        });
        return(
            <div className="special_move_list">
                   {special_moves}
            </div>
            );
    }
});
var CharacterPage = React.createClass({
    getInitialState: function() {
        return {character: {}};
    },
    componentDidMount: function() {
        this.props.service.findById(this.props.characterId).done(function(result) {
            this.setState({character: result});
        }.bind(this));
    },
    render: function () {
        var powerstars = [];
        var speedstars = [];
        var jumpstars = [];
        var rangestars = [];
        var special_move_list_component = "";
        for(var p = 0; p < 10; p++)
        {
            if(p < this.state.character.power)
            {
                powerstars.push(<img className="stat_star" src="powerstar.png" />);
            }
            else
            {
                powerstars.push(<img className="stat_star empty_star" src="emptystar.png" />);
            }
        }
        for(var s = 0; s < 10; s++)
        {
            if(s < this.state.character.speed)
            {
                speedstars.push(<img className="stat_star" src="speedstar.png" />);
            }
            else
            {
                speedstars.push(<img className="stat_star empty_star" src="emptystar.png" />);
            }
        }
        for(var j = 0; j < 10; j++)
        {
            if(j < this.state.character.jump)
            {
                jumpstars.push(<img className="stat_star" src="jumpstar.png" />);
            }
            else
            {
                jumpstars.push(<img className="stat_star empty_star" src="emptystar.png" />);
            }
        }
        for(var r = 0; r < 10; r++)
        {
            if(r < this.state.character.range)
            {
                rangestars.push(<img className="stat_star" src="rangestar.png" />);
            }
            else
            {
                rangestars.push(<img className="stat_star empty_star" src="emptystar.png" />);
            }
        }
        //---When this component is mounted (or rendered) the special_moves isn't quite ready to exist. So first
        //     I check if it is ready, then render the component that handles the mapping, and put that in a variable
        //     which is called in this component's return 
        if(this.state.character.special_moves)
        {
            special_move_list_component = <SpecialMoveListComponent moves={this.state.character.special_moves} />;
        }
        return (
            <div>
                <HeaderComponent text="Character Details"/>
                <div>
                   <div className="charcater_page_top_info">
                       <img className="character_page_icon" src={this.state.character.icon} />       
                       <div className="character_page_info">
                           <h3 className="character_page_name">{this.state.character.name}</h3>
                           <p className="character_page_country">{this.state.character.country}</p>
                        </div>
                    </div>
                    <p className="character_page_tagline"><i>{this.state.character.tagline}</i></p>
                    <h2 className="section_title">Character Stats</h2>
                    <div className="character_page_stats">
                          <div className="character_page_power stat_holder">
                                 <h3 className="stat_title"><i>POWER</i></h3>
                                 <div className="power_star_holder">
                                         {powerstars}
                                 </div>
                          </div>
                          <div className="character_page_speed stat_holder">
                                 <h3 className="stat_title"><i>SPEED</i></h3>
                                 <div className="speed_star_holder">
                                         {speedstars}
                                 </div>
                          </div>
                          <div className="character_page_jump stat_holder">
                                 <h3 className="stat_title"><i>JUMP</i></h3>
                                 <div className="jump_star_holder">
                                         {jumpstars}
                                 </div>
                          </div>
                          <div className="character_page_range stat_holder">
                                 <h3 className="stat_title"><i>RANGE</i></h3>
                                 <div className="range_star_holder">
                                         {rangestars}
                                 </div>
                          </div>
                    </div>
                    <h2 className="section_title">Special Moves</h2>
                    {special_move_list_component}
                </div>
            </div>
        );
    }
});

//---The router actually renders the components onto the document with the data from an external source
router.addRoute('', function() {
    React.render(
        <HomePage service={characterService}/>,
        document.body
    );
});
router.addRoute('characters/:id', function(id) {
    React.render(
        <CharacterPage characterId={id} service={characterService}/>,
        document.body
    );
});
router.start();