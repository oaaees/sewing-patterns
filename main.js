class Pattern {
    constructor(name = "", img = "", measurements = []){
        this.name = name;
        this.img = img;
        this.measurements = measurements;
    }
}

let patterns = [];

let circle_skirt = new Pattern("Circle Skirt", "circle_skirt.png", [10,10])
patterns.push(circle_skirt);

let main = document.getElementsByTagName('body');
console.log(main);

for (let i = 0; i < patterns.length; i++){
    
    let div = document.createElement('div')
    div.class = patterns[i].name;
    div.innerHTML = patterns[i].name;

    main.appendChild(div);
}

console.log("hello");

