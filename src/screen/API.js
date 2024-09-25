
export const register = async (url, data) => {
    const res = await fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, body: JSON.stringify((data))
    });
    const Resultdata = await res.json();
    // console.log('signup(register) ---- >>', Resultdata)

    return Resultdata;
}

// verifyotp
export const verifyotp = async (url, data) => {
    const res = await fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, body: JSON.stringify((data))
    });
    const Resultdata = await res.json();
    // console.log('verifyotp ---- >>', Resultdata)

    return Resultdata;
}

// login
export const login = async (url, data) => {
    const res = await fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, body: JSON.stringify((data))
    });
    const Resultdata = await res.json();
    // console.log('login ---- >>', Resultdata)

    return Resultdata;
}

// forgotpassword
export const forgotpassword = async (url, data) => {
    const res = await fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, body: JSON.stringify((data))
    });
    const Resultdata = await res.json();
    // console.log('forgotpassword ---- >>', Resultdata)

    return Resultdata;
}

// getcategory
export const getcategory = async (url, data) => {
    const res = await fetch(url, {
        method: 'get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, body: JSON.stringify((data))
    });
    const Resultdata = await res.json();
    // console.log('getcategory ---- >>', Resultdata)

    return Resultdata;
}

// getsubcategory
export const getsubcategory = async (url, data) => {
    const res = await fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, body: JSON.stringify((data))
    });
    const Resultdata = await res.json();
    // console.log('getsubcategory ---- >>', Resultdata)

    return Resultdata;
}

// updateuserprofile
export const updateuserprofile = async (url, data) => {
    // console.log('data', data)
    const res = await fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, body: JSON.stringify((data))
    });
    const Resultdata = await res.json();
    // console.log('updateuserprofile ---- >>', Resultdata)

    return Resultdata;
}

// uploadimage
export const uploadimage = async (url, data) => {
    const res = await fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, body: JSON.stringify((data))
    });
    const Resultdata = await res.json();
    // console.log('uploadimage ---- >>', Resultdata)

    return Resultdata;
}

// applyformerchant
export const applyformerchant = async (url, data) => {
    const res = await fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, body: JSON.stringify((data))
    });
    const Resultdata = await res.json();
    // console.log('applyformerchant ---- >>', Resultdata)

    return Resultdata;
}

// adddeal
export const adddeal = async (url, data) => {
    const res = await fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, body: JSON.stringify((data))
    });
    const Resultdata = await res.json();
    // console.log('adddeal ---- >>', Resultdata)

    return Resultdata;
}

// getnotification
export const getnotification = async (url, data) => {
    console.log('data', data)

    const res = await fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, body: JSON.stringify((data))
    });
    const Resultdata = await res.json();
    // console.log('getnotification ---- >>', Resultdata)

    return Resultdata;
}