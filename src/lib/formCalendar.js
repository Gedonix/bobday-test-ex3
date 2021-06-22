let date = new Date('2021-01-04')
let timestamp = date.getTime()
let weekday
let arr = []
let oweek = {
    week: 0,
    // start: 0,
    // end: 0,
    mon: 'mon',
    fri: 'fri',
    work: []
}

function ruformat(date) {
    day = date.getDate()
    sday = day < 10 ? '0' + String(day) : String(day)
    month = date.getMonth() + 1
    smonth = month < 10 ? '0' + String(month) : String(month)
    return `${sday}.${smonth}.${date.getFullYear()}`
}
let i = 0
let w = 1
let work = []
let week = {}
while (i < 366) {
    let s = timestamp + (i * 86400000)
    date = new Date(s)
    weekday = date.getDay()
    date = ruformat(date)
    switch (weekday) {
        case 1:
            week = {...oweek }
            work = []
            week.week = w
            week.mon = date
                //week.start = s
            work.push(date)
            break;
        case 2:
        case 3:
        case 4:
            work.push(date)
            break
        case 5:
            week.fri = date
                //week.end = s + 86400000            
            work.push(date)
            week.work = work
            arr.push(week)
            w++
            break
        default:
            break;
    }
    i++
}
let j = JSON.stringify(arr)
console.log(j);