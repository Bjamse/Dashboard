class moduleObject{
    constructor(config) {
        console.log(config);
        this.width = config.width;
        this.height = config.height;


        this.element = document.createElement("div");
        this.element.className = "module";
        this.element.style.gridColumn = "span "+ this.width;
        this.element.style.gridRow = "span "+ this.width;
        document.body.appendChild( this.element);
        this.fyll(config.content)
    }

    async fyll(adresse){
        this.element.innerHTML = await fetch(adresse).then(Response => Response.text());
        if(this.element.querySelector("script")){
            eval(this.element.querySelector("script").text);
        }
    }
}