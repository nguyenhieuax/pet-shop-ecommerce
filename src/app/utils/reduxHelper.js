
const mapType = (type, status) => `${status.valuePrefix}${type}`;

const createAction = type => (
    payload = {},
    onSuccess = () => { },
    onError = () => { }
) => {
    return {
        type,
        payload,
        onSuccess,
        onError
    };
};

const status = {
    start: {
        valuePrefix: "@@FETCH_START/",
        keyPostfix: ""
    },
    success: {
        valuePrefix: "@@FETCH_SUCCESS/",
        keyPostfix: "_SUCCESS"
    },
    failure: {
        valuePrefix: "@@FETCH_ERROR/",
        keyPostfix: "_FAILURE"
    }
};

export {
    status,
    mapType,
    createAction
}