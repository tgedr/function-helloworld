'use strict';


exports.handler = async function(event) {
    console.log('event:', event);
    const promise = new Promise(function(resolve) {
        resolve(
            {
                statusCode: 200
                , body: JSON.stringify({msg: 'hello world'})
                , headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            } );
    });
    return promise;
}

