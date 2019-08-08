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
                    let typeText = xhr.getResponseHeader('Content-Type');
                    let resultData = xhr.response;
                    if(typeText) {
                        if(typeText.includes('application/json')) {
                            resultData = JSON.parse(xhr.reponse);
                        }
                    }
                    resolve( { result:true, code: xhr.status, data: resultData} );
                } else if(xhr.readyState == 4) {
                    resolve({ result:false, code: xhr.status});
                }
            }

            xhr.onerror = () => {
                reject();
            }

            xhr.send(body);
        });
    }
    requestGet(host, headers = null) {
        return new Promise( (resolve, reject) => {
            let xhr = new XMLHttpRequest();
            let url = host;

            xhr.open('GET', url, true);
            xhr.withCredentials = true;

            if(headers) {
                headers.forEach(header => {
                    xhr.setRequestHeader(header.kind, header.value);
                }); 
            }
        
            xhr.onreadystatechange = () => {
                //console.log(`${xhr.readyState} ${xhr.status}`);
                if(xhr.readyState == 4 && xhr.status == 200) {
                    console.log(`success ${xhr.body}`);
                    resolve( { result:true, code: xhr.status} );
                } else if(xhr.readyState == 4) {
                    resolve({ result:false, code: xhr.status});
                } 
            }

            xhr.onerror = () => {
                reject();
            }

            xhr.send();
        });
    }
}

export default RequestService;
