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

console.log(data)

const timeframes = ["daily", "weekly", "monthly"]
myStorage = window.localStorage;


// function section_template_mapper(section) {
//     let filter = myStorage.getItem('filter')
//     return section_template_filler(section, filter)
// }


// function section_template_filler(section, filter) {

//     title = section.title
//     css_class = section.title.toLowerCase().split(" ").join("_")
//     current = section["timeframes"][filter]["current"]
//     previous = section["timeframes"][filter]["previous"]

//     var template = `
//         <div class="${css_class}_section">
//         <div class="eclipse_background"></div>
//         <div class="header">
//         <span id="title">${title}</span>
//         <span id="btn">Button</span>
//         </div>
//             <div class="header-text">
//                 <p id="unit-value">${current}hrs</p>
//                 <p id="previous-unit-value">Previous - ${previous}hrs</p>
//             </div>
//         </div> `

//     return template

// }



document.getElementsByClassName("time_frame")[0].innerHTML = timeframes.map((element) => {

    id_tag = element
    text = element

    var template = `<a id="${id_tag}" href="#">${text}</a>`

    return template

}).join(" ")



function events_to_anchors(timeframe) {

    document.getElementById(timeframe).addEventListener("click", () => {
        console.log(timeframe)
        template_tag = document.getElementById("grids")


        data.forEach(section => {
            title = section.title
            css_class = section.title.toLowerCase().split(" ").join("_") + "_section"
            current = section["timeframes"][timeframe]["current"]
            previous = section["timeframes"][timeframe]["previous"]
            // console.log(current)
            // console.log(previous)
            console.log(css_class)
            // console.log(title)

            section_div = create_grid_item(css_class, title, current, previous)
            document.getElementsByTagName("main")[0].append(section_div)

        });

    })

    return null
}



events_to_anchors("daily")
events_to_anchors("weekly")
events_to_anchors("monthly")


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
    section_div.classname = css_class
    eclipse_div = document.createElement("div")
    eclipse_div.classname = "eclipse_background"
    section_div.appendChild(eclipse_div)

    header_div = document.createElement("header")
    span_title = document.createElement("span")
    span_title.id = "title"
    span_title.textContent = title
    span_btn = document.createElement("span")
    span_btn.id = "btn"
    span_btn.textContent = "button"


    header_div.appendChild(span_title)
    header_div.appendChild(span_btn)
    section_div.appendChild(header_div)

    header_text_div = document.createElement("div")
    header_text_div.classname = "header-text"
    p_current = document.createElement("p")
    p_current.id = "unit-value"
    p_current.textContent = current
    p_previous = document.createElement("p")
    p_previous.id = "previous-unit-value"
    p_previous.textContent = previous

    header_text_div.appendChild(p_current)
    header_text_div.appendChild(p_previous)
    section_div.appendChild(header_text_div)

    console.log(section_div)
    return section_div

}


// create_grid_item("work_section", "Work", "1000", "2112")


