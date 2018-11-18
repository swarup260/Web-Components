/* export class NavBar extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
    }
    set Items(items) {
        let htmlString = `
        <style>
        *{
            margin:0;
            padding:0;
        }
        ul{
            margin 0 auto;
            background-color:orange;
            width: 100%;
            font-size: 25px;
            list-style: none;
            float: left;
        }
        li{
            display: inline-block;  
        }
        a{
            color:white;
        }
        </style>
        <ul>`;
        for (let index = 0; index < items.length; index++) {
            htmlString += `<li> <a href="#">${items[index].toCapitalize()}</a></li> `;
        }
        htmlString += "</ul>";
        this.root.innerHTML = htmlString;
    }
} */





export class NavBar extends HTMLElement {
	constructor() {
		super()
		this.root = this.attachShadow({ mode: "open" })
	}
	set Items(items) {
		let htmlString = `
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
        <style>
        *{
            margin:0;
            padding:0;
        }
        .topnav {
            overflow: hidden;
            background-color: #333;
          }
          
          .topnav a {
            float: left;
            display: block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
          }
          
          .topnav a:hover {
            background-color: #ddd;
            color: black;
          }
          
          .active {
            background-color: #4CAF50;
            color: white;
          }
          
          .topnav .icon {
            display: none;
          }
          
          @media screen and (max-width: 600px) {
            .topnav a:not(:first-child) {display: none;}
            .topnav a.icon {
              float: right;
              display: block;
            }
          }
          
          @media screen and (max-width: 600px) {
            .topnav.responsive {position: relative;}
            .topnav.responsive .icon {
              position: absolute;
              right: 0;
              top: 0;
            }
            .topnav.responsive a {
              float: none;
              display: block;
              text-align: left;
            }
        </style>
        <div class="topnav" id="myTopnav">
`
		for (let index = 0; index < items.length; index++) {
			htmlString += `<a href="#">${items[index].toCapitalize()}</a>`
		}
		htmlString += `  <a href="#" class="icon">
        <i class="fas fa-align-justify"></i>
      </a>
    </div>`
		this.root.innerHTML = htmlString
		const innerEl = this.root.querySelector("#myTopnav")
		const toggleEl = this.root.querySelector("a.icon")
		toggleEl.addEventListener("click",() => this.toogleNavBar(innerEl))

	}

	/* set innerEl(innerEl){
        return innerEl;
    }
    get innerEl(){
        return innerEl;
    } */

	toogleNavBar(element) {
		//console.log(element);
        
		if (element.className === "topnav") {
			element.className += " responsive"
		} else {
			element.className = "topnav"
		}
	}
}