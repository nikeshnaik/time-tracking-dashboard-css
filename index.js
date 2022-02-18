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


function section_template_mapper(section) {
    let filter = myStorage.getItem('filter')
    return section_template_filler(section, filter)
}


function section_template_filler(section, filter) {

    title = section.title
    css_class = section.title.toLowerCase().split(" ").join("_")
    current = section["timeframes"][filter]["current"]
    previous = section["timeframes"][filter]["previous"]

    var template = `

        <div class="${css_class}_section">
        <div class="eclipse_background"></div>
        <div class="header">
        <span id="title">${title}</span>
        <span id="btn">Button</span>
        </div>
            <div class="header-text">
                <p id="unit-value">${current}hrs</p>
                <p id="previous-unit-value">Previous - ${previous}hrs</p>
            </div>
        </div> `
    console.log(template)

    return template

}


document.getElementById(timeframes[0]).addEventListener("click", () => {
    myStorage.setItem('filter', timeframes[0]);
    document.getElementsByTagName("main")[0].innerHTML = document.getElementsByTagName("main")[0].innerHTML + data.map(section_template_mapper)

}, false);

document.getElementById(timeframes[1]).addEventListener("click", () => {
    myStorage.setItem('filter', timeframes[1]);
    document.getElementsByTagName("main")[0].innerHTML = document.getElementsByTagName("main")[0].innerHTML + data.map(section_template_mapper)


}, false);

document.getElementById(timeframes[2]).addEventListener("click", () => {
    myStorage.setItem('filter', timeframes[2]);
    document.getElementsByTagName("main")[0].innerHTML = document.getElementsByTagName("main")[0].innerHTML + data.map(section_template_mapper)


}, false);








