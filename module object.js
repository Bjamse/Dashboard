class moduleObject{
    constructor(config) {
        this.width = config.width;
        this.height = config.height;


        this.element = document.createElement("div");
        this.element.className = "module";
        this.element.style.gridColumn = "span "+ this.width;
        this.element.style.gridRow = "span "+ this.width;
        this.element.style.position = "relative";
        document.body.appendChild( this.element);
        this.fyll(config.content)
    }

    async fyll(adresse){
        this.element.innerHTML = await fetch(adresse).then(Response => Response.text());
        if(this.element.querySelector("script")){
            let newScript = document.createElement("script")
            newScript.innerHTML= this.element.querySelector("script").innerHTML;
            document.head.appendChild(newScript);
        }
    }
}