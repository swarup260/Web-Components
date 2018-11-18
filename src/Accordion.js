export class Accordion extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
    }
    set Items(items) {
        let htmlString = `
        <style>
        /* Style the buttons that are used to open and close the accordion panel */
        .accordion {
            background-color: #eee;
            color: #444;
            cursor: pointer;
            padding: 18px;
            width: 100%;
            text-align: left;
            border: none;
            outline: none;
            transition: 0.4s;
        }
        
        /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
        .active, .accordion:hover {
            background-color: #ccc;
        }
        
        /* Style the accordion panel. Note: hidden by default */
        .panel {
            padding: 0 18px;
            background-color: white;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.2s ease-out;
        } 
        </style>
        `;
        for (let index = 0; index < items.length; index++) {
            htmlString += `
            <button class="accordion">${items[index].title}</button>
                <div class="panel">
                    <p>${items[index].desc}</p>
                </div>
            `;
        }
        this.root.innerHTML = htmlString;
        /* adding event listener */
        const acc = this.root.querySelectorAll('button.accordion');
        /* for (let index = 0; index < items.length; index++) {
                acc[index].addEventListener('')
        } */
        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                }
                else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }
}