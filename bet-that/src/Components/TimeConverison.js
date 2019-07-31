import React from 'react'

const UnixTimestamp = (t) => {
    let dt = new Date(t * 1000);
    let hr = dt.getHours();
    let m = "0" + dt.getMinutes();
    let s = "0" + dt.getSeconds();
    return hr + ':' + m.substr(-2) + ':' + s.substr(-2);
}

export default UnixTimestamp