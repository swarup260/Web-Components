class TopHeader extends HTMLElement {
	constructor() {
		super()
		this.root = this.attachShadow({ mode: "open" })
	}
	set Header(header) {
		this.root.innerHTML =
            `
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                background-color:${this.background || "red"};
                width:100%;
            }
            h1{
            color: ${this.color || "black"};
            text-align:${this.align || "right"};
            font-size:5vw;
            }
        </style>
        <h1> ${header} </h1>
        `
	}

	set color(color) {
		return this.setAttribute("color", color)
	}
	get color() {
		return this.getAttribute("color")
	}

	set background(background) {
		return this.setAttribute("background", background)
	}
	get background() {
		return this.getAttribute("background")
	}
	set align(align) {
		return this.setAttribute("align", align)
	}
	get align() {
		return this.getAttribute("align")
	}
}

export default TopHeader