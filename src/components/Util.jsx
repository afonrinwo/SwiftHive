
function Util(requiredValue) {

    let today = new Date();

    switch (requiredValue) {
        case "clientId":
            let clientIdStr = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds() + "-" + today.getMilliseconds();
            return clientIdStr.replace(/-/g, '');
        default:
            return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ':' + today.getMilliseconds();
    }

}
export default Util;