module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.res = {
        headers: {
            "Content-Type": "application/json"
        },
        body: [
            {id: 1, title: "title1", body: "body1"},
            {id: 2, title: "title2", body: "body2"},
            {id: 3, title: "title3", body: "body3"},
        ]
    }
};
