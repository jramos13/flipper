let dropdown = ""

export default {
  oninit: () => {
    dropdown = ""
  },
  view: (vnode) => m("nav.navbar.is-light.is-fixed-top", [
    m(".navbar-brand", [
      m("a.navbar-item.has-text-weight-semibold", {"href": "/#!/"}, "Flipper"),
      m("a.navbar-burger.burger" + dropdown, {
        "role": "button",
        "aria-label": "menu",
        "aria-expanded": "false",
        "data-target": "navbar-content",
        onclick: () => {
          if(dropdown === "") dropdown = ".is-active"
          else dropdown = ""
        }
      }, [
        m("span", {"aria-hidden": "true"}),
        m("span", {"aria-hidden": "true"}),
        m("span", {"aria-hidden": "true"}),
      ])
    ]),
    m("#navbar-content.navbar-menu" + dropdown, [
      m(".navbar-start", [
        m("a.navbar-item" + 
            (vnode.attrs.active === "about" ? ".is-active" : ""), {
          "href": "/#!/about"}, "About"), 
        m("a.navbar-item" + 
            (vnode.attrs.active === "contact" ? ".is-active" : ""), {
          "href": "/#!/contact"}, "Contact"), 
      ]),
      m(".navbar-end", m(".navbar-item", m(".buttons", [
        m("a.button.is-primary" +
            (vnode.attrs.active == "signup" ? ".is-active" : ""), {
          "href": "/#!/signup"}, m("strong", "Sign up")),
        m("a.button" +
            (vnode.attrs.active == "login" ? ".is-active" : ""), {
          "href": "/#!/login"}, "Log in")
      ]))),
    ])
  ])
}
