import Axios from 'axios';

function LogHandler(logType, clientId, userId, functionCalled, activity, status, message, logTime) {
    Axios.post('http://localhost:7070/swifthivebe/clientLog',
        { logType, clientId, userId, functionCalled, activity, status, message, logTime },
        {
            auth: {
                'username': 'test',
                'password': 'test'
            }
        },
        {
            headers:
            {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
}
export default LogHandler;