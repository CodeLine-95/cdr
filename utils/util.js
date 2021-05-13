function t(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}

function formatTime(e) {
    var n = e.getFullYear(), o = e.getMonth() + 1, r = e.getDate(), u = e.getHours(), i = e.getMinutes(), g = e.getSeconds();
    return [ n, o, r ].map(t).join("/") + " " + [ u, i, g ].map(t).join(":");
}

function getLast(e){
    e.setDate(e.getDate() - 7); 
    var dateArray = [];
    var dateTemp;
    var flag = 1;
    for (var i = 0; i < 7; i++) { 
        dateTemp = (e.getMonth() + 1) + "." + e.getDate();
        dateArray.push(dateTemp);
        e.setDate(e.getDate() + flag);
    }
    
    return dateArray;
}

function timeTamp(e){
    let dateTime = formatTime(e);
    return Date.parse(dateTime) /1000;
}

module.exports = {
    formatTime: formatTime,
    getLast: getLast,
    timeTamp: timeTamp
};