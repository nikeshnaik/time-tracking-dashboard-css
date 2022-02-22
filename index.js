var data = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]


const timeframes = ["daily", "weekly", "monthly"]


// creates anchor tag for each timeframe and calls event listener setup.
timeframes.forEach(element => {

    id_tag = element
    text = element

    a_tag = document.createElement("a")
    a_tag.id = id_tag
    a_tag.textContent = text

    document.getElementsByClassName("time_frame")[0].appendChild(a_tag)
    events_to_anchors(element)
});


//// Setups event listener for each timeframe, we add more to make dynamic

function events_to_anchors(timeframe) {

    document.getElementById(timeframe).addEventListener("click", () => {

        localStorage.setItem("timeframe", timeframe)

        timeframes.forEach(element => {
            document.getElementById(element).style.color = "white"
        });

        document.getElementById(timeframe).style.color = "var(--neutral-Desaturated-blue)"


        data.forEach(section => {
            title = section.title
            css_class = section.title.toLowerCase().split(" ").join("_") + "_section"
            current = section["timeframes"][timeframe]["current"]
            previous = section["timeframes"][timeframe]["previous"]

            section_div = create_grid_item(css_class, title, current, previous)
            document.getElementsByTagName("main")[0].append(section_div)

        });

    })

}


// Builds the sections, since using innerhtml reconstruct the dom and event listeners are lost.

function create_grid_item(css_class, title, current, previous) {
    // <div class="${css_class}_section">
    //     <div class="eclipse_background"></div>
    //     <div class="header">
    //         <span id="title">${title}</span>
    //         <span id="btn">Button</span>
    //     </div>
    //     <div class="header-text">
    //         <p id="unit-value">${current}hrs</p>
    //         <p id="previous-unit-value">Previous - ${previous}hrs</p>
    //     </div>
    // </div> `

    section_div = document.createElement("div")
    section_div.className = css_class
    eclipse_div = document.createElement("div")
    eclipse_div.className = "eclipse_background"
    section_div.appendChild(eclipse_div)

    header_div = document.createElement("div")
    header_div.className = "header"
    span_title = document.createElement("span")
    span_title.className = "title"
    span_title.textContent = title

    span_btn = document.createElement("span")
    span_btn.className = "img_span"
    btn_img = document.createElement("img")
    btn_img.className = "btn_img"
    btn_img.setAttribute("src", "images/icon-ellipsis.svg")
    btn_img.setAttribute("alt", "button_img")
    span_btn.appendChild(btn_img)

    header_div.appendChild(span_title)
    header_div.appendChild(span_btn)
    section_div.appendChild(header_div)

    header_text_div = document.createElement("div")
    header_text_div.className = "header-text"
    p_current = document.createElement("p")
    p_current.className = "unit-value"
    p_current.textContent = current + "hrs"
    p_previous = document.createElement("p")
    p_previous.className = "previous-unit-value"
    p_previous.textContent = "Previous - " + previous + "hrs"

    header_text_div.appendChild(p_current)
    header_text_div.appendChild(p_previous)
    section_div.appendChild(header_text_div)

    // console.log(section_div)
    return section_div

}



// Init by clicking on event listener and storing the state in local storage
if (!localStorage.getItem("timeframe")) {
    localStorage.setItem("timeframe", "monthly")
}

document.getElementById(localStorage.getItem("timeframe")).click()



/// New things learned is, the event listener are removed if innerhtml is used.
/// Cannot toggle multiple classes at once, need looping