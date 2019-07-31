export class RequestService {
    constructor(global) {
        this.service = global.$service;
    }

    requestPost(host, body, headers = null) {
        return new Promise( (resolve, reject) => {
            let xhr = new XMLHttpRequest();
            let url = host;

            xhr.open('POST', url, true);
            xhr.withCredentials = true;
            if(headers) {
                headers.forEach(header => {
                    xhr.setRequestHeader(header.kind, header.value);
                }); 
            }
        
            xhr.onreadystatechange = () => {
                //console.log(`${xhr.readyState} ${xhr.status}`);
                if(xhr.readyState == 4 && xhr.status == 200) {
                    console.log(`success ${resolve}`);
                    resolve(true);
                } else if(xhr.readyState == 4 && xhr.status == 401) {
                    resolve(false);
                } else if(xhr.readyState == 4 ) {
                    reject();
                }
            }

            xhr.onerror = () => {
                reject();
            }

            xhr.send(body);
        });
    }
}

export default RequestService;
