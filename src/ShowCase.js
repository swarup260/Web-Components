export class ShowCase extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
    }
    set showCaseHeader(headerName) {
        this.root.innerHTML = `
        <style>
        /* Showcase */
        section#showcase {
          background: #000000;
          -webkit-filter: sepia(1);
          filter: sepia(1);
          display: -webkit-box;
          /* OLD - iOS 6-, Safari 3.1-6 */
          display: -moz-box;
          /* OLD - Firefox 19- (buggy but mostly works) */
          display: -ms-flexbox;
          /* TWEENER - IE 10 */
          display: -webkit-flex;
          /* NEW - Chrome */
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 60vh;
        }
        
        section#showcase h1 {
          font-family: "Lobster", cursive;
          font-size: 50px;
          color: #ffffff;
          text-shadow: 2px 2px 4px #000000;
        }
        
        @media only screen and (max-width: 460px) {
          section#showcase h1 {
            font-size: 30px;
            margin: 4px 6px;
          }
        }
        
        section#showcase h1 span {
          font-size: 55px;
          color: #0B2577;
        }
        
        section#showcase h1 span:hover {
          transition: color 3s;
          color: #FFF200;
        }
        
        @media only screen and (max-width: 460px) {
          section#showcase h1 span {
            font-size: 25px;
            margin: 4px 6px;
          }
        }
        
        section#showcase p {
          font-family: "Roboto Slab", serif;
          font-size: 40px;
          color: #ffffff;
          padding: 2px 4px;
          text-shadow: 2px 2px 4px #000000;
        }
        
        section#showcase p span {
          color: #FC3C45;
        }
        
        @media only screen and (max-width: 460px) {
          section#showcase p {
            font-size: 20px;
          }
        }
        
        /*  END Showcase */
                
        </style>
        <section id="showcase"> <!--  Showcase -->
        <h1>
            ${headerName}
        </h1>
            <p>
                  
            </p>
        </section> <!--  End of Showcase -->`;
    }
}