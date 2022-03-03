

const mainChar = {
    name: "",
    colour: "",
    activity: "",
    sex: "",
    home: "",
    prop5: "",
    prop6: "",
    prop7: "",
    prop8: ""
}
const trait = [
["Maggie", "Patrick", "Anna", "Henry", "Keegan ", "Izzy", "Mme. Ross ", "Micah", "Nyah", "Alex B.", "Ibrahim", "Cinderella", "Flick", "Elsa", "Shrek", "Martha", "Hercules ", "Olaf ", "Rapunzel", "Bruno", "The Evil Stepmother ", "Annastasia", "Alex M.", "Ayvah ", "Babcia", "Jadek", "Grandma ", "Uncle Dylan", "Aunty Cody", "Uncle Brandi", "Evie", "Becca ", "Damien ", "Eli", "Ahyey"], 
["brown", "orange", "green", "purple", "pink", "blue", "rainbow", "yellow", "black", "white", "silver", "red", "magenta"],
["skate on the ice", "climb trees", "watch TV", "colour with markers", "bake cookies", "play in the snow", "swing at the park", "read books","eat vegetables" ], 
["house", "boot", "apartment", "school", "van", "shopping mall", "boat", "closet", "hole in the ground", "moon", "toilet", "den", "tree", "igloo"],
["goblin", "troll", "snowman", "punk", "robot", "fairy", "Swede", "elf", "dog", "cat", "baby", "witch", "bird", "snake", "bear", "talking car", "shark"],
["ring", "necklace", "cup", "shirt", "brush", "flower", "tooth", "candy", "fork", "phone", "noodle", "underwear", "pencil", "cake", "hockey stick", "backpack", "stuffie", "TV", "kiwi", "wolf", "foot" ],
["summer", "fall", "winter", "spring"],
["dark", "dusty", "bright", "stinky", "twisted", "colourful", "creepy", "funny looking", "charming", "cute", "disgusting", "fancy", "filthy", "horrible", "muddy", "shiny", "sparkling"],
["rectangle", "hexagon", "triangle", "square", "circle", "octagon", "semicircle"]
]

    
//Random numbers to pick properties in main char      
 const random0 = Math.floor(Math.random() * trait[0].length);
mainChar.name = trait[0][random0];

const random1 = Math.floor(Math.random() * trait[1].length);
mainChar.colour = trait[1][random1];

const random2 = Math.floor(Math.random() * trait[2].length);
mainChar.activity = trait[2][random2];

const random3 = Math.floor(Math.random() * trait[3].length);
mainChar.home = trait[3][random3];

const random4 = Math.floor(Math.random() * trait[4].length);
mainChar.npc = trait[4][random4];

do {
    var random5 = Math.floor(Math.random() * trait[0].length);
    } 
    while (random5 == random0);
mainChar.npcname = trait[0][random5];

do {
    var random6 = Math.floor(Math.random() * trait[4].length);
    } 
    while (random6 == random4);
mainChar.npc2 = trait[4][random6];

do {
    var random7 = Math.floor(Math.random() * trait[0].length);
    } 
    while (random7 == random0 || random7 == random5);
mainChar.villain = trait[0][random7];

const random8 = Math.floor(Math.random() * trait[5].length);
mainChar.thingy = trait[5][random8];

const random9 = Math.floor(Math.random() * trait[6].length);
mainChar.season = trait[6][random9];

const random10 = Math.floor(Math.random() * trait[7].length);
mainChar.adj = trait[7][random10];

do {
    var random11 = Math.floor(Math.random() * trait[3].length);
    } 
    while (random11 == random3);
mainChar.lair = trait[3][random11];

function sexReveal(x) {
   return x % 2 == 0;
}

mainChar.sex = sexReveal(mainChar.name.length);

if (mainChar.sex == true) {
    mainChar.sex = "she";
 } else { mainChar.sex = "he";
 }
 
 function insertAdj () {
const adj =  trait[7][Math.floor(Math.random() * trait[7].length)]; 
return adj;
 }

document.write("Once upon a time, there was a person named " + mainChar.name + " who had " + mainChar.colour + " hair. " + mainChar.name + " lived in a " + mainChar.home + " and loved to " + mainChar.activity + ", and would do so anytime that " + mainChar.sex + " could. One day, a " + mainChar.npc + " came to the " + mainChar.home + ". \"Hello, my name is " + mainChar.npcname + ", and I need your help. An evil, " + insertAdj() + " " + mainChar.npc2 + " named " + mainChar.villain + " has stolen my special " + mainChar.thingy + "\". " + mainChar.name + " agreed to help the poor " + mainChar.npc + ", and got ready to leave as fast as " + mainChar.sex + " could. " + mainChar.name + " stepped out of the " + mainChar.home + " and breathed in the " + mainChar.season + " air. After many days of travelling, " + mainChar.sex + " came across a " + insertAdj() + " " 
+ mainChar.lair + " where the villainous  " + mainChar.villain + " lived. \"Come out! I know that you have " + mainChar.npcname + "'s " + mainChar.thingy + "! Hand it over and I will leave peacefully. \"" + mainChar.villain + " told " + mainChar.name + " that the only way to get the " + mainChar.thingy + " was to " + mainChar.activity + ". Luckily, that was " + mainChar.name + "'s favourite thing to do. After " + mainChar.sex + " did it, " + mainChar.name + " brought the " + mainChar.thingy + " back to " + mainChar.npcname + ", and everyone lived happily ever after." ); 