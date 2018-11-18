/* TABS  */
export class Tabs extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
    }
    set tabItems(items) {
        let htmlString = `
        <style>
        /* Style the tab */
            .tab {
                overflow: hidden;
                border: 1px solid #ccc;
                background-color: #f1f1f1;
            }

            /* Style the buttons that are used to open the tab content */
            .tab button {
                background-color: inherit;
                float: left;
                border: none;
                outline: none;
                cursor: pointer;
                padding: 14px 16px;
                transition: 0.3s;
            }

            /* Change background color of buttons on hover */
            .tab button:hover {
                background-color: #ddd;
            }

            /* Create an active/current tablink class */
            .tab button.active {
                background-color: #ccc;
            }

            /* Style the tab content */
            .tabcontent {
                display: none;
                padding: 6px 12px;
                border: 1px solid #ccc;
                border-top: none;
            }
        </style>
        <div class="tab">
        `;
        /* Tab Links */
        for (let index = 0; index < items.length; index++) {
            htmlString += `<button class="tablinks" onclick="this.openCity(event, '${items[index].title}')">${items[index].title}</button>`;
        }
        htmlString += `</div>`;
        /* Tab Content */
        for (let index = 0; index < items.length; index++) {
            htmlString += `
            <div id="${items[index].title}" class="tabcontent">
                <h3>${items[index].title}</h3>
                <p>${items[index].desc}</p>
            </div>
            `;
        }
        this.root.innerHTML = htmlString;
    }
    openCity(evt, cityName) {
        // Declare all variables
        var i, tabcontent, tablinks;
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
}