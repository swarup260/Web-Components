import TopHeader from "./TopHeader"
import { NavBar } from "./NavBar"
import { ShowCase } from "./ShowCase"
import { Accordion } from "./Accordion"
import { Tabs } from "./Tabs"

/* top Header */
customElements.define("top-header", TopHeader)
const topHeader = document.querySelector("top-header")
topHeader.Header = "ACE TECH"

String.prototype.toCapitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1)
}

/* navbar */
customElements.define("top-nav", NavBar)
const topNav = document.querySelector("top-nav")
topNav.Items = ["home", "about us", "contact us", "Find us"]

/* SHOWCASE */
customElements.define("show-case", ShowCase)
const show = document.querySelector("show-case")
show.showCaseHeader = "Python Programming"


/* ACCORDIN */

customElements.define("accordion-el", Accordion)
const acc = document.querySelector("accordion-el")
acc.Items = [{ title: "section1", desc: "lorem ispum <b>adsa</b>" }, { title: "section2", desc: "lorem ispum <b>adsa</b>" }, { title: "section3", desc: "lorem ispum <b>adsa</b>" }]



customElements.define("tab-el", Tabs)
const tab = document.querySelector("tab-el")
tab.tabItems = [{ title: "tab1", desc: "lorem ispum <b>adsa</b>" }, { title: "tab2", desc: "lorem ispum <b>adsa</b>" }, { title: "tab3", desc: "lorem ispum <b>adsa</b>" }]